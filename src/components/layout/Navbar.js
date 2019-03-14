import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper green darken-3">
                <Link to="/" className="brand-logo">RoutePlan</Link>
                <div className="right hide-on-med-and-down">
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </div>
        </nav>
    )
}

export default Navbar