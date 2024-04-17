import React from "react";


function ProjectLinks(props) {
    return (
        <>
        <div className='project-links'>
            <p><i class="fas fa-code icon" style={{marginRight: "1rem"}}></i><a href={`https://${props.projectLink}`}>Project</a></p>
            <p><i class="fab fa-github" style={{marginRight: "1rem"}}></i> <a href={`https://www.github.com/goatmil2k/${props.gitLink}`}>Git Hub</a> </p>
        </div>  
        </>
    )
}


export default ProjectLinks