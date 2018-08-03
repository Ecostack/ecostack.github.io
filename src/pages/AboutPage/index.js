import React from 'react';

import ScrollToNext from '../../components/ScrollToNext/index'

import './style.scss'

// const {
//     theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
//   } = context;

export default class AboutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...props};
        this.style = {
            bgPrimary : `rgb(72, 85, 100)`,
            colorPrimary : `rgb(255, 255, 255)`,
            textPrimary: `rgb(255, 255, 255)`,
            colorHighlight: `rgb(255, 255, 255)`,
          }
      }


      render() {
        return (
            // <div></div>
            <div className="about-page" style={{ backgroundColor: this.style.bgPrimary }}>
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
                <h1 style={{ color: this.style.colorPrimary }}>About</h1>
                <div className="about-wrapper">
                  <div className="about-content" style={{ color: this.style.textPrimary }}>
                    <p>
                      I like <span className="highlight">JavaScript</span> and
                      everything web.
                    </p>
                    <p>
                      When my dev senses kick-in I build presumably{' '}
                      <span className="highlight"> awesome stuff</span>. I stay close to
                      the community and try to keep tabs with the pace at which the web
                      is evolving. I also like to{' '}
                      <span className="highlight">blog</span> what I learn.
                    </p>
                    <p>
                      I built this site <span className="highlight">from scratch</span>.
                      By scratch, I mean <i>absolutely from scratch</i>{' '}
                      <span className="highlight">
                        without any UI library/framework
                      </span>{' '}
                      (except React though) and had so much fun along the way.
                    </p>
                    <p>
                      React-Redux, Node.js, Ruby on Rails, Java, Spring Boot, Docker and
                      AWS are the main tricks up my sleeve. I am also obsessed with making the web look pretty with SASS/CSS.
                    </p>
                    <p className="text-emoji" style={{ color: this.style.colorPrimary }}>
                      \ (•◡•) /
                    </p>
                  </div>
                </div>
              </div>
              <ScrollToNext pageSelector=".portfolio-page" />
            </div>
          );
      }
}