import React from 'react';

import projects from './projects'

import ProjectStyles from "../../styles/projectStyles";

import './style.scss'
import {ProjectBoxEntry} from "../../components/ProjectBoxEntries";

export default class ProjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.projects = projects;
    }

    render() {
        return (
            <div style={{backgroundColor: ProjectStyles.bgPrimary}} className="project-page">
                <div className="content-grid">
                    <h1 style={{color: ProjectStyles.colorPrimary}}>Projects</h1>


                    <div className="portfolio-wrapper">
                        <style jsx="true">
                            {`
              .portfolio-item {
                background-color: ${ProjectStyles.boxBackground};
                color: ${ProjectStyles.bgPrimary};
              }
              .portfolio-item__image {
                background-color: white;
              }
              // .portfolio-item a {
              //   color: ${ProjectStyles.colorPrimary};
              // }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${ProjectStyles.bgPrimary};
              }
            `}
                        </style>
                        {this.projects.filter(project => project.hide !== true)
                            .map((item, i) => (
                                <ProjectBoxEntry {...item} key={i}/>
                            ))}
                    </div>
                </div>
            </div>
        )
    }
}