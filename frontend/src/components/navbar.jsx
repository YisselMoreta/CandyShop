import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from "./login";
import '../css/navbar.scss';


export default class navbar extends Component {
    render() {
        return (
            <div id="navegacion" >
               <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className=" oval" to="/">Chuces Lau</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav m-auto ">
      {/* <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="#"><Login/></Link>
      </li>
      
      </ul>
      <form className="form-inline my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </div>
      </nav> 
            </div>
        )
    }
}
