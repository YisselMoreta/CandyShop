import React from 'react';
import '../css/home.scss';

export default class Home extends React.Component {
    constructor() {
        super()
    }
        
        render(){
            return(
                <header className="header content">
                  <div className="header-video">
                    <video  muted src="/img/Pexels Videos 2568409.mp4" autoPlay loop></video>
                  </div>
                  <div className="header-overlay"></div>

                  <div className="header-content">
                    <h1>Chuches Lau</h1>
                    <p>Endulza tu día con las mejores chuches 😊</p>
                    <a href="/productos" class="btn btn-primary js-scroll-trigger">Empezar</a>
                  </div>
                </header>
            )
        }


}