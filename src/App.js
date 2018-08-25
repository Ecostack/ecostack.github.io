import React, { Component } from 'react';
import logo from './logo.svg';


import LandingPage from "./pages/LandingPage/index";

import AboutPage from "./pages/AboutPage/index";
import ProjectPage from "./pages/ProjectPage";

class App extends Component {
  render() {
    return (
      <div className="wrapper-landing-page" style={{background:'linear-gradient(rgb(51, 107, 135), rgb(30, 150, 150))'}}>
          <LandingPage />
          <AboutPage />
          <ProjectPage/>
          {/*<PortfolioPage />
          <ScrollTop />
          <Footer /> */}
      </div>
    );
  }
}

export default App;
