import React from 'react';

import './style.scss';
import ProjectStyles from "../../styles/projectStyles";

const SocialButtons = (props, context) => {
    return (
        <div className="social-icons animate-icons">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ecostack" style={ { color: ProjectStyles.colorPrimary} }><i className="fab fa-github"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sebastian-scheibe" style={ { color: ProjectStyles.colorPrimary } }><i className="fab fa-linkedin"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@Ecostack" style={ { color: ProjectStyles.colorPrimary } }><i className="fab fa-medium"></i></a>
        </div>
    );
};


export default SocialButtons