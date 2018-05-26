import React from 'react';
import { StyleSheet, View } from 'react-native';

import ToDoInput from './src/components/ToDoInput/ToDoInput';
import ToDoList from './src/components/ToDoList/ToDoList';

export default class App extends React.Component {

  state = {
    todos: ['Hunting', 'Coding']
  }

  InputHandler = (todo) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.concat(todo)
      };
    });
  };

  DeleteItemHandler = (todo) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((item) => item != todo)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ToDoInput ToDoInputHandler={this.InputHandler} />
        <ToDoList todos={this.state.todos} deleteItem={this.DeleteItemHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
});
