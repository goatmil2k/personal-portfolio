import React from 'react';
import ProjectLinks from './links/ProjectLinks';
import Title from './Title';

function ProjectDisplay(props) {
    return (
        <>  
            <div className="project-display">
                <h3 className="project-title">{props.projectName}</h3>
                <p style={{textAlign: "left", marginLeft: "10px", fontSize: '20px'}}>{props.projectDescription}</p>
                <ProjectLinks gitLink={props.gitLink} projectLink={props.projectLink}/>
            </div>
        </>
    )
}


export default ProjectDisplay;