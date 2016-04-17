import React, { View, WebView, StyleSheet } from 'react-native'

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F8F8F8', 
    flexDirection: 'column'
  }
})

class MyWebView extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <WebView source={{uri: this.props.url}} />
      </View>
    )
  }
}

MyWebView.propTypes = {
  url: React.PropTypes.string.isRequired
}

export default MyWebView
