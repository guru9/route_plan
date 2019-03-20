import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup' activeStyle={{background: '#8bc34a4f'}} className="waves-effect waves-light">Signup</NavLink></li>
            <li><NavLink to='/signin' activeStyle={{background: '#8bc34a4f'}} className="waves-effect waves-light">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks