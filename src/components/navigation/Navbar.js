import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import SignedInUser from './signedInUser'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper green darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo waves-effect waves-light">RoutePlan</Link>
                    <div className="hide-on-med-and-down">
                        <SignedInLinks />
                        <SignedOutLinks />
                    </div>
                    <SignedInUser />
                </div>
            </div>
        </nav >
    )
}

export default Navbar