import React from 'react';
import Fade from 'react-reveal/Fade';

const Project = ({ title, description, tags, date, links }) => {

    return (
        <Fade  bottom cascade>
        <div>
            <div className="project-container">
                <div className="project-tile">
                    {/* <Fade  bottom cascade> */}
                    <i className="far fa-folder folder fa-lg"></i>
                        <h3 className="project-title">{ title }</h3>
                        <p className="project-description">{ description }</p>
                        <p className="tags">{ tags.map(item => <span className="tag">{ item }</span>) }</p>
                        <p className="project-date">{ date }</p>
                        <div className="icons">
                        {Object.keys( links ).map(link => {
                            return(
                                <a href={links[link]}>{link === "website" ? <i className="fas fa-external-link-alt fa-lg"></i> : <i className="fab fa-github fa-lg"></i>}</a>
                            )
                        })}
                            
                        </div>
                        {/* </Fade> */}
                    </div>
            </div>
        </div>
        </Fade>
    )
}


export default Project;