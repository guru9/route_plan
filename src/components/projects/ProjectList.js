import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjctList = (props) => {

    console.log('projects-', props)
    const { projects } = props

    return (
        <div className="section">
            {projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id} className={props.className} >
                        <button className="btn waves-effect waves-light right green lighten-1 z-depth-2" value={project.id} onClick={props.onView} >View</button>
                    </ProjectSummary>
                )
            })}
        </div>
    )
}

export default ProjctList