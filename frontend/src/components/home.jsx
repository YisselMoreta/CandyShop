import React from 'react';
import '../css/home.scss';
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
    constructor() {
        super()
    }
        
        render(){
            return(
              <div>
                <header className="header content">
                  <div className="header-video">
                    <video  muted src="/img/Pexels Videos 2568409.mp4" autoPlay loop></video>
                  </div>
                  <div className="header-overlay"></div>

                  <div className="header-content">
                    <h1>Chuches Lau</h1>
                    <p>Endulza tu día con las mejores chuches<span>😊</span></p>
                    <Link to="/productos" className="btn btn-primary js-scroll-trigger">Empezar</Link>
                  </div>
                  
                </header>
               
                </div>
            )
        }


}