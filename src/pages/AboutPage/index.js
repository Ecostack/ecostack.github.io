import React from 'react';

import ScrollToNext from '../../components/ScrollToNext/index'

import './style.scss'

export default class AboutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...props};
        this.style = {
            bgPrimary: `rgb(72, 85, 100)`,
            colorPrimary: `rgb(255, 255, 255)`,
            textPrimary: `rgb(255, 255, 255)`,
            colorHighlight: `rgb(255, 255, 255)`,
        }
    }


    render() {
        return (
            // <div></div>
            <div className="about-page" style={{backgroundColor: this.style.bgPrimary}}>
                <style jsx="true">
                    {`
                  .highlight {
                    background-color: ${this.style.colorHighlight};
                  }
                  ::selection {
                    background-color: ${this.style.colorHighlight};
                  }
                `}
                </style>
                <div className="content-grid">
                    <h1 style={{color: this.style.colorPrimary}}>About me</h1>
                    <div className="about-wrapper">
                        <div className="about-content" style={{color: this.style.textPrimary}}>
                            <p>I am a software developer with ten years of experience.</p>

                            <p>My experience ranges from maintenance, new development, creation of software and server
                                land scape architecture to teachings.</p>

                            <p>The current technology stack includes things like NodeJS, TypeScript, ElasticSearch,
                                Redis and also their related frameworks and libraries.</p>

                            <p>Besides that I have interesting in emerging technologies like machine learning and how it
                                can be combined with traditional software development.</p>

                            <p>If you are you need help for a new development, maintenance of an application or just
                                wanna have a chat, please feel free to contact me via mail.</p>


                        </div>
                    </div>
                </div>
                <ScrollToNext pageSelector=".portfolio-page"/>
            </div>
        );
    }
}