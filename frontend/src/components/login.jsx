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
      <button onClick={this.logout}>cerrar sesión</button> :
      <button onClick={this.login}>Iniciar sesión</button>
    let uploader = this.state.user ?
      <Home/> :  <pre></pre>
      
    return (
      <div>
        {authButton}
        {uploader}
      </div>
    )
  }
}
