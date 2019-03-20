import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container section">
                <div className="card z-depth-2">
                    <div className="card-content grey-text text-darken-2">
                        <span className="card-title">Create New Project</span>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="content">Content</label>
                                <textarea type="text" id="content" onChange={this.handleChange} className="materialize-textarea" />
                            </div>
                            <div className="input-field">
                                <button className="btn waves-effect waves-light green lighten z-depth-3">create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProject