import React from 'react';

import projects from './projects'
import {ProjectEntry} from "../../components/ProjectEntry";

import ProjectStyles from "../../styles/projectStyles";

import './style.scss'

const styleHR = {
    'backgroundColor': 'rgba(255,255,255,0.3)',
    'height': '1px',
    'border': 0
}

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
                    <ul style={{color: ProjectStyles.colorPrimary}}>
                        {this.projects.filter(project => project.hide !== true).map(project => {
                            return <li>
                                <div className="project-content">
                                    <ProjectEntry title={project.title} description={project.description}
                                                  image={project.image} technology={project.technology}></ProjectEntry>
                                </div>
                                <hr style={styleHR}/>
                            </li>
                        })}
                    </ul>

                </div>
            </div>
        )
    }
}