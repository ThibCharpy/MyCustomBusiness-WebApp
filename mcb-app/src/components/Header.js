import React from 'react';

import {NavLink, Link} from 'react-router-dom'

/**
 * App Header
 */
class Header extends React.Component {

    /**
     * Render html and other components
     */
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top bg-success">
                <NavLink className="navbar-brand" to="/">
                    <i className="fas fa-suitcase fa-lg"></i>&nbsp;{this.props.title}
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/users">Users</NavLink>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    <div className="nav-item dropdown">
                        <button className="nav-link btn btn-outline-light dropdown-toggle pull-left" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/">Profile</Link>
                            <Link className="dropdown-item" to="/">History</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/">Logout</Link>
                        </div>
                    </div>
                </form>
            </nav>
        );
    }
}

export default Header;