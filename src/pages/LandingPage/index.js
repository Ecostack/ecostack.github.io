import React from 'react';

import Nav from '../../components/Nav/index'

import './style.scss'

import imgProfilePicture from '../../assets/images/profile.jpg'
import SocialButtons from "../../components/SocialButtons";
import ProjectStyles from "../../styles/projectStyles";

export default class LandingPage extends React.Component {
    // localization ?

    constructor(props) {
        super(props);
        this.state = {...props};

    }

    render() {
        return <div style={{backgroundColor: ProjectStyles.bgPrimary}} className="landing-page">
            <Nav/>
            <main style={{color: ProjectStyles.colorPrimary}}>
                <div className="intro-wrapper">
                    <div className="intro-picture"><img src={imgProfilePicture} alt="Avatar"></img></div>
                    <div className="intro-name">Welcome, my name is Sebastian!</div>
                    <div className="tagline">
                        Full Stack Dev
                    </div>
                    <SocialButtons/>
                    {/* <SocialIcons /> */}
                </div>
            </main>
            {/* <ScrollToNext pageSelector=".about-page" /> */}
        </div>
    }
}