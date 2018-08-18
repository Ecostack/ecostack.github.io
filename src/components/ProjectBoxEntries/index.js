import React from 'react';
import ProjectStyles from "../../styles/projectStyles";
import './style.scss';
import {ProjectEntryPopup} from "../ProjectEntryPopup";
import projects from "../../pages/ProjectPage/projects";


export class ProjectBoxEntry extends React.Component {

    constructor(props) {
        super(props);
        this.projects = projects;
        this.state = {showComponent: false};

        this.showOverlay = this.showOverlay.bind(this);
    }

    showOverlay() {
        this.setState({
            showComponent: true
        })
    }


    render() {
        return (
            <div
                className="portfolio-item"
                style={{backgroundColor: ProjectStyles.colorPrimary, color: ProjectStyles.bgPrimary}}
            >
                <div className="portfolio-item__title">{this.props.title}</div>
                {/*<div className="portfolio-item__desc">*/}
                {/*{props.subtitle}*/}
                {/*</div>*/}


                {this.props.logo &&
                <div className="portfolio-item__image">
                    <img src={this.props.logo}/>
                </div>
                }


                {(this.props.technology && this.props.technology.length > 0) &&
                <div className="portfolio-item__technology">
                    <ul>
                        {this.props.technology.map(tech => {
                            <li>{JSON.stringify(tech.title)}</li>
                        })}
                    </ul>
                </div>
                }


                {/*<div className="portfolio-item__icon">*/}
                {/*<i className="fab fa-js" />*/}
                {/*<i className="fab fa-react" />*/}
                {/*<i className="fab fa-html5" />*/}
                {/*</div>*/}
                <div className="portfolio-item__links">
                    <a onClick={this.showOverlay}>Open</a>
                    {this.props.link &&
                    <a href={this.props.link}>Link</a>
                    }
                    {this.state.showComponent &&
                    <ProjectEntryPopup {...this.props}/>
                    }

                </div>
            </div>)
    }
}