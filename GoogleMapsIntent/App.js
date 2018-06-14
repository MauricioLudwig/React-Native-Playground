import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking
} from 'react-native';

export default class App extends Component {

  componentDidMount() {
    console.warn('This is a warning');
  };

  launchGoogleMaps = () => {

    let appUrl = 'geo';
    let webUrl = 'https://www.google.com/maps';

    Linking.canOpenURL(appUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(appUrl)
            .catch(error => { alert(error) });
        } else {
          Linking.openURL(webUrl)
            .catch(error => { alert(error) })
        };
      }).catch((error) => { alert(error) })

      console.log('Testing remote debugging');

  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          color="green"
          title="Launch Google Maps"
          onPress={() => this.launchGoogleMaps()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
