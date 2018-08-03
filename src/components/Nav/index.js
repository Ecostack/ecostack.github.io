import React from 'react';

import './style.scss';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
          isSticky: false
        };

        this.style = {
          navAlpha : `rgba(72, 85, 100, 0.75)`,
          bgPrimary : `rgb(72, 85, 100)`,
          colorPrimary : `rgb(255, 255, 255)`
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll() {
        if (window.pageYOffset > this.nav.offsetTop) {
          this.setState({
            isSticky: true
          });
        } else {
          this.setState({
            isSticky: false
          });
        }
      }
    
      scrollToPage(pageSelector) {
        const nextPage = document.querySelector(pageSelector);
        // TODO define scroll function
        // scrollToElement(nextPage);
      }
    
      render() {
        // const {
        //   theme: { colorPrimary, bgPrimary, navAlpha },
        // //   switchTheme
        // } = this.context;

       
    
        const stickyClass = this.state.isSticky ? 'sticky' : '';
        const stickyStyles = this.state.isSticky
          ? { backgroundColor: this.style.navAlpha, color: this.style.ncolorPrimary }
          : { backgroundColor: this.style.nbgPrimary, color: this.style.ncolorPrimary };
        return (
          <nav
            className={stickyClass}
            ref={(elem) => {
              this.nav = elem;
            }}
            style={stickyStyles}
          >
            <style jsx="true">
              {`
                .menu .item:hover {
                  border-bottom: 2px solid ${this.style.colorPrimary};
                }
              `}
            </style>
            <div className="menu">
              <div
                className="item active"
                onClick={(e) => this.scrollToPage('.about-page')}
              >
                About
              </div>
              <div
                className="item"
                onClick={(e) => this.scrollToPage('.portfolio-page')}
              >
                Portfolio
              </div>
            </div>
          </nav>
        );
}
}