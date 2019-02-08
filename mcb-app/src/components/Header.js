import React from 'react';

import {NavLink} from 'react-router-dom'

/**
 * App Header
 */
class Header extends React.Component {

    /**
     * Render html and other components function function
     */
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                <NavLink className="navbar-brand" to="/">
                    <i class="fas fa-suitcase fa-lg"></i>&nbsp;{this.props.title}
                </NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/users">Users</NavLink>
                    </ul>
                </div>
                <form class="form-inline my-2 my-lg-0">
                    <div class="nav-item dropdown">
                        <button class="nav-link btn btn-outline-light dropdown-toggle pull-left" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <NavLink class="dropdown-item" to="/">Profile</NavLink>
                            <NavLink class="dropdown-item" to="/">History</NavLink>
                            <div class="dropdown-divider"></div>
                            <NavLink class="dropdown-item" to="/">Logout</NavLink>
                        </div>
                    </div>
                </form>
            </nav>
        );
    }
}

export default Header;