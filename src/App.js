import React, { Component } from 'react';
import logo from './logo.svg';


import LandingPage from "./pages/LandingPage/index";

import AboutPage from "./pages/AboutPage/index";

class App extends Component {
  render() {
    return (
      <div className="wrapper-landing-page">
          <LandingPage />
          <AboutPage />
          {/*<PortfolioPage />
          <ScrollTop />
          <Footer /> */}
      </div>
    );
  }
}

export default App;
