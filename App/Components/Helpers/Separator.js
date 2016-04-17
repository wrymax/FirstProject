import React, { View, StyleSheet } from 'react-native'

var styles = StyleSheet.create({
  separator: {
    height: 1, 
    backgroundColor: '#E4E4E4', 
    flex: 1, 
    marginLeft: 10
  }
})


export default class Separator extends React.Component {
  render() {
    return (
      <View style={ styles.separator } />
    )
  }
}
