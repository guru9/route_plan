import React from 'react'
import { Link } from 'react-router-dom'

const SignedInUser = () => {
    return (
        <ul className="user-badge">
            <li><Link to='/' className="btn btn-floating green lighten z-depth-2">GM</Link></li>
        </ul>
    )
}

export default SignedInUser