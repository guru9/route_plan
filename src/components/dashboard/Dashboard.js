import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

//5) //glue b/w redux to react by connect
import { connect } from 'react-redux'

class Dashboard extends Component {

    vewProject = (e) => {
        this.props.history.push(`/project/${e.target.value}`)
    }

    render() {
        console.log('props--', this.props)
        const { projects } = this.props

        return (
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <ProjectList projects={projects} onView={this.vewProject} />
                    </div>
                    <div className="col m5 s12 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

//6) map a state(eg. project state) from store to props in this component
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects //project is in rootReducer & projects is a dummy data
    }
}

//7) connect is fun which returns higher order component(eg. connects project state into dashboard)
export default connect(mapStateToProps)(Dashboard)