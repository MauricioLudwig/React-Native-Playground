import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {

    loginHandler = () => {

    }

    render(){
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={() => {startMainTabs();}} />
            </View>
        );
    }
}

export default AuthScreen;