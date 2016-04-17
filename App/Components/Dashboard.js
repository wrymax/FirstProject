import React, { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Profile from './Profile'
import Repositories from './Repositories'
import api from '../Utils/api'

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }, 
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  }
})

class Dashboard extends React.Component {
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row', 
      alignSelf: 'stretch', 
      justifyContent: 'center', 
      flex: 1
    }

    if(btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }
  goToProfile() {
    const { userInfo } = this.props

    this.props.navigator.push({
      title: "用户资料",
      component: Profile,
      passProps: { userInfo}
    });
  }
  goToRepos() {
    const { userInfo } = this.props
    // fetch data from Github
    api.getRepos(userInfo.login)
      .then((res) => {
        console.log('Repos:', res)
        this.props.navigator.push({
          title: "代码库",
          component: Repositories,
          passProps: { userInfo, repos: res }
        })
      });    
  }

  render() {
    const { userInfo } = this.props

    return (
      <View style={styles.container}>
        <Image style={ styles.image } source={{ uri: userInfo.avatar_url }} />

        <TouchableHighlight
          style={ this.makeBackground(0) }
          onPress={ this.goToProfile.bind(this) } 
          underlayColor='#88D4F5'>  
          <Text style={ styles.buttonText }> 用户资料 </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={ this.makeBackground(1) }
          onPress={ this.goToRepos.bind(this) } 
          underlayColor='#88D4F5'>  
          <Text style={ styles.buttonText }> 代码库 </Text>
        </TouchableHighlight>

      </View>    
    )
  }
}

export default Dashboard
