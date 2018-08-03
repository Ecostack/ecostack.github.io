import React from 'react';

import Nav from '../../components/Nav/index'

import './style.scss'

import imgProfilePicture from '../../assets/images/profile.jpg'

// const styleProfilePicture = {
//  "border-radius": '50%' 
// }

export default class LandingPage extends React.Component {
    // localization ?

    

    constructor(props) {
        super(props);
        this.state = {...props};
      
      }
    

    render() {
        return <div style={{ backgroundColor: this.state.bgPrimary }} className="landing-page">
        <Nav />
        <main style={{ color: this.state.colorPrimary }}>
          <div className="intro-wrapper">
            <div className="intro-picture"><img  src={imgProfilePicture} alt="Avatar"></img></div>
            <div className="intro-name">Welcome, my name is Sebastian!</div>
            <div className="tagline">
              Full Stack Dev
            </div>
            {/* <SocialIcons /> */}
          </div>
        </main>
        {/* <ScrollToNext pageSelector=".about-page" /> */}
      </div>
    }
}