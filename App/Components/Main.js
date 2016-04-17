import React, { View, Text, StyleSheet, TextInput, TouchableHighlight, ActivityIndicatorIOS } from 'react-native'
import api from '../Utils/api'
import Dashboard from './Dashboard'

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    padding: 30, 
    marginTop: 65, 
    flexDirection: 'column', 
    justifyContent: 'center', 
    backgroundColor: '#48BBEC'
  }, 
  title: {
    marginBottom: 20, 
    fontSize: 25, 
    textAlign: 'center', 
    color: '#fff'
  }, 
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }, 
  error: {
    justifyContent: 'center', 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 14, 
    color: '#EEE'
  }
})

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '', 
      isLoading: false, 
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    })
  }

  handleSubmit() {
    // update spiiner
    this.setState({
      isLoading: true
    })
    // fetch data from Github
    api.getBio(this.state.username)
      .then((res) => {
        if(res.message === 'Not Found'){
          this.setState({
            error: "找不到目标用户",
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.name || "Select an Option",
            component: Dashboard,
            passProps: {userInfo: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
    });    
    // reroute to the next passing that github information
  }

  render() {
    var showErr = (
      this.state.error ? <Text style={ styles.error }> { this.state.error } </Text> : <View></View>
    )
    return (
      <View style={styles.mainContainer}>
        <Text style={ styles.title }> 搜索Github用户 </Text>

        <TextInput style={ styles.searchInput } value={ this.state.username } onChange={ this.handleChange.bind(this) } />

        <TouchableHighlight style={ styles.button } onPress={ this.handleSubmit.bind(this) } underlayColor="white">
          <Text style={ styles.buttonText }> 搜索 </Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
          animating={ this.state.isLoading } 
          color='#111' 
          size='large'>
        </ActivityIndicatorIOS>
        { showErr }
      </View>
    )
  }
}

export default Main
