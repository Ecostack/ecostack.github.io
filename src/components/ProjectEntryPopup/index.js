import React from 'react';
import './style.scss'
import ProjectStyles from "../../styles/projectStyles";

export function ProjectEntryPopup(props) {
    return (
        <div className="project-entry-popup">
            <style jsx="true">
                {`
              .project-entry-popup {
                background-color: ${ProjectStyles.bgPrimary};
                color: ${ProjectStyles.colorPrimary};
              }

              .technology__item {
                color: ${ProjectStyles.bgPrimary};
                 background-color: ${ProjectStyles.colorPrimary};
                 padding: 0.4em 0.7em;
                margin-right: 0.5em;
                margin-bottom: 0.4em;
                 font-weight:400;
              }
            `}
            </style>
            <div className="project-entry-popup-grid">



                <div className="title">{props.title}</div>
                <div className="description" dangerouslySetInnerHTML={{__html: props.description}}></div>

                {(props.technology && props.technology.length > 0) &&
                <div className="technology">
                    <ul>
                        {props.technology.map(tech => tech.title).map(function(tech, index){
                            return <li className="technology__item" key={index}>{tech}</li>;
                        })}
                    </ul>
                </div>
                }
                <div className='buttonWrap'>
                    <a onClick={props.hideOverlay}>Close</a>

                    {/*<button onClick={props.hideOverlay}>Close</button>*/}
                </div>

            </div>
        </div>
    )
}