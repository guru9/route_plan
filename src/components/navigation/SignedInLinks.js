import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create' activeStyle={{ background: '#8bc34a4f' }} className="waves-effect waves-light">New Project</NavLink></li>
            <li><Link to='/signin' className="waves-effect waves-light">Log Out</Link></li>
        </ul>
    )
}

export default SignedInLinks