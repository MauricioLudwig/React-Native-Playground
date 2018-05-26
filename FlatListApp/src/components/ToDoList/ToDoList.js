import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';

const ToDoList = (props) => {

    return (
        <FlatList
            style={styles.container}
            data={props.todos}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => {
                        props.deleteItem(item);
                    }}
                >
                    <View>
                        <Text>{item}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 5,
        width: '100%'
    },
    itemContainer: {
        width: '100%',
        marginTop: 5,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    }
});

export default ToDoList;