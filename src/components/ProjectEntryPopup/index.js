import React from 'react';
import './style.scss'
import ProjectStyles from "../../styles/projectStyles";

export class ProjectEntryPopup extends React.Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const props = this.props;
        window.onkeyup = (event) => {
            if (event.which === 27 && props && props.hideOverlay) {
                props.hideOverlay();
            }
        }
    }

    render() {
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


                    <div className="title">{this.props.title}</div>
                    <div className="description" dangerouslySetInnerHTML={{__html: this.props.description}}></div>

                    {(this.props.technology && this.props.technology.length > 0) &&
                    <div className="technology">
                        <ul>
                            {this.props.technology.map(tech => tech.title).map(function (tech, index) {
                                return <li className="technology__item" key={index}>{tech}</li>;
                            })}
                        </ul>
                    </div>
                    }
                    <div className='buttonWrap'>
                        <a onClick={this.props.hideOverlay}>Close</a>

                        {/*<button onClick={props.hideOverlay}>Close</button>*/}
                    </div>

                </div>
            </div>
        )
    }
}