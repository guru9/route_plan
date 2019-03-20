import React from 'react'

const ProjctSummary = (props) => {

    console.log('project--', props)
    const project = props.project
    return (
        <div className="card z-depth-1 project-list">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <span className="show-view">{props.children}</span>
                <p>Posted by Guru</p>
                <p className="grey-text">3rd Sept 12am</p>
            </div>
        </div>

    )
}

export default ProjctSummary