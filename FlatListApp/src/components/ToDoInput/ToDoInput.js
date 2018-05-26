import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class ToDoInput extends Component {

    state = {
        text: ''
    };

    onSubmitToDo = () => {
        this.props.ToDoInputHandler(this.state.text);
        this.setState({
            text: ''
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ text })}
                    placeholder='To Do...'
                    maxLength={20}
                    value={this.state.text}
                />
                <Button
                    title='Add'
                    onPress={this.onSubmitToDo}
                    disabled={!(this.state.text && this.state.text.length > 0)}
                />
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        flex: 1,
        marginRight: 20
    }
});