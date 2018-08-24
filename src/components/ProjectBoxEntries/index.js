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
        this.hideOverlay = this.hideOverlay.bind(this);
    }

    showOverlay() {
        this.setState({
            showComponent: true
        })
    }

    hideOverlay() {
        this.setState({...this.state, showComponent: false})
    }


    render() {
        return (
            <div
                className="portfolio-item"
                style={{backgroundColor: ProjectStyles.boxBackground, color: ProjectStyles.colorPrimary}}
            >
                {this.props.logo &&
                <div className="portfolio-item__image">
                    <img src={this.props.logo}/>
                </div>
                }

                <div className="portfolio-item__links">
                    <a onClick={this.showOverlay}>Open</a>
                    {this.props.link &&
                    <a href={this.props.link}>Link</a>
                    }
                    {this.state.showComponent &&
                    <ProjectEntryPopup {...this.props} hideOverlay={this.hideOverlay}/>
                    }

                </div>
            </div>)
    }
}