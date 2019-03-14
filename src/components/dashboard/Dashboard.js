import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col m6 s12">
                        <ProjectList />
                    </div>
                    <div className="col m5 s12 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard