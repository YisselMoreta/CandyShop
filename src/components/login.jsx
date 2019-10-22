import React from 'react';
import '../css/login.scss';
import Home from './home';



import firebase, { auth, provider } from '../Auth/firebase';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  login() {
    auth.signInWithPopup(provider).then((result) => {
      this.setState({
          user: result.user
      })
    })
  }
  logout() {
    auth.signOut().then((result) => {
      this.setState({
        user: null
      })
    })
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
      }
    })
  }
  render() {
    let authButton = this.state.user ?
      <button onClick={this.logout}>LogOut</button> :
      <button onClick={this.login}>LogIn</button>
    let uploader = this.state.user ?
      <Home/> :
      <h4>Logueate para comprar!</h4>
    return (
      <div>
        {authButton}
        {uploader}
      </div>
    )
  }
}
