class api {
  static getBio(username){
    username = username.toLowerCase().trim()
    var url = `https://api.github.com/users/${username}`
    return fetch(url).then(res => res.json())
  }
  static getRepos(username){
    username = username.toLowerCase().trim()
    var url = `https://api.github.com/users/${username}/repos`
    return fetch(url).then(res => res.json())
  }
}

export default api
