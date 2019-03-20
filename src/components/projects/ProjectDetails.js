import React from 'react'

const ProjectDetails = (props) => {
    const projectId = props.match.params.id
    return (
        <div className="container section">
            <div className="card z-depth-2">
                <div className="card-content">
                    <span className="card-title">Project Title - {projectId} </span>
                    <p>Helllo, how r u!!!</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div> posted By Guru</div>
                    <div>Sept 1, 10am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails