import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
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
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">Sign In</span>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">password</label>
                                <input type="password" id="password" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn waves-effect waves-light green lighten z-depth-3"> Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn