import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
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