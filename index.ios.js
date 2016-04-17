/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS, 
  Text,
  View
} from 'react-native';

import Main from './App/Components/Main'

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#111'
  }
})

class FirstProject extends Component {
  render() {
    return (
      <NavigatorIOS
        style={ styles.container }
        initialRoute={{
          title: 'Githubber', 
          component: Main
        }}
      />
    );
  }
}

AppRegistry.registerComponent('FirstProject', () => FirstProject);
