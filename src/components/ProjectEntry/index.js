import React  from 'react';

function ProjectEntryTechnology(props) {
    return (
        <div>

        </div>
    )
}

function ProjectEntryTitle(props) {
    return (
        <h2>{props.title}</h2>
    )
}

function ProjectEntryDescription(props) {
    return (
        <div dangerouslySetInnerHTML={{ __html: props.description }}/>
    )
}




export function ProjectEntry(props) {
    return (
        <div>
            <div>
                <ProjectEntryTitle title={props.title}></ProjectEntryTitle>
                <div>
                    <ProjectEntryDescription description={props.description}></ProjectEntryDescription>
                </div>
                {props.technology &&
                <div>
                    <ProjectEntryTechnology technology={props.technology}></ProjectEntryTechnology>
                </div>
                }
            </div>
            {props.image &&
            <div>
                <img src={props.image}></img>
            </div>
            }
        </div>
    );
}