import Realm from 'realm';

// Schema names
export const TODOLIST_SCHEMA = "TodoList";
export const TODO_SCHEMA = "Todo";

// Define your models and their properties
export const TodoSchema = {
    name: TODO_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int', // primary key
        name: { type: 'string', indexed: true },
        done: { type: 'bool', default: false },
    }
}

export const TodoListSchema = {
    name: TODOLIST_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int', // primary key
        name: 'string',
        creationDate: 'date',
        todos: { type: 'list', objectType: TODO_SCHEMA }
    }
};

// Database options
const databaseOptions = {
    path: 'todoListApp.realm',
    schema: [TodoListSchema, TodoSchema],
    schemaVersion: 0, // optional
};

/* 
functions for TodoLists
resolve = Success
reject = Failed
*/

export const insertNewTodoList = newTodoList => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(TODOLIST_SCHEMA, newTodoList);
            resolve(newTodoList);
        });
    }).catch((error) => reject(error));
});

export const updateTodoList = todoList => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            // Get a TodoList from specific ID
            let updateTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);
            updateTodoList.name = todoList.name;
            resolve();
        });
    }).catch((error) => reject(error));
});

export const deleteTodoList = todoListId => new Promise((resolve, reject) => {
    realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let deleteTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoListId);
            realm.delete(deleteTodoList);
            resolve();
        });
    }).catch((error) => reject(error));
});

export const deleteAllTodoLists = () => new Promise((resolve, reject) => {
    realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allTodoLists = realm.objects(TODOLIST_SCHEMA);
            realm.delete(allTodoLists);
            resolve();
        });
    }).catch((error) => reject(error));
});

export const queryAllTodoLists = () => new Promise((resolve, reject) => {
    realm.open(databaseOptions).then(realm => {
        let allTodoLists = realm.objects(TODOLIST_SCHEMA);
        resolve(allTodoLists);
    }).catch((error) => reject(error));
});

export default new Realm(databaseOptions);