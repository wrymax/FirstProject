import React, { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
import Badge from './Badge'
import Separator from './Helpers/Separator'
import MyWebView from './Helpers/WebView'

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 15 
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5, 
    fontWeight: 'bold'
  },
  stars: {
    color: '#666',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5, 
    marginLeft: 1
  }
});

export default class Repositories extends React.Component {
  openPage(url, fullName) {
    console.log('Web URL: ', url)
    let repoName = fullName.split('/')[1]

    this.props.navigator.push({
      component: MyWebView, 
      title: repoName, 
      passProps: { url }
    })
  }

  render() {
    const { repos } = this.props
    var list = repos.map((item, index) => {
      var desc = repos[index].description ? <Text style={ styles.description }> { repos[index].description } </Text> : <View />
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
          <TouchableHighlight onPress={ this.openPage.bind(this, repos[index].html_url, repos[index].full_name) } underlarColor='transparent'>
              <Text style={styles.name}> { repos[index].name } </Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: { repos[index].stargazers_count } </Text>
            { desc }
          </View>
          <Separator />
        </View>
      )
    })
    return (
      <ScrollView style={ styles.container }>
        <Badge userInfo={ this.props.userInfo } />
        { list }
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
}
