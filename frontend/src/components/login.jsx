import React from 'react';
import '../css/login.scss';
import Home from './home';
import CrearProducto from './CrearProducto';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';




import firebase, { auth, provider } from '../Auth/firebase';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
   
  }
  login =() => {
    auth.signInWithPopup(provider).then((result) => {
      this.setState({
          user: result.user
      })
    })
  }
  logout =() => {
    auth.signOut().then((result) => {
      this.setState({
        user: null
      })
    })
  }
  componentDidMount =() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
      }
    })
  }
  
  goTO =() =>  {
    const { history } = this.props;
    return this.context.history.push('/crearproducto')
  }
  render() {
    let authButton = this.state.user ?
      <button className="boton"  onClick={this.logout}>cerrar sesión</button> :
      <button className="boton" onClick={this.login}>Iniciar sesión</button>
    let uploader = this.state.user ?
    <button className="boton" onClick={() => this.props.history.push('/crearproducto')}>Crear Producto</button>
     
     :  <pre></pre>
      
    return (
      <div>
        {authButton}
        {uploader}
      </div>
    )
  }
}

export default withRouter(Login)