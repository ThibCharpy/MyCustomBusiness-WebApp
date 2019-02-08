import React from 'react';

import {Link} from 'react-router-dom'

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
                <Link className="navbar-brand" to="/">
                    <i class="fas fa-suitcase fa-lg"></i>
                    &nbsp;{this.props.title}
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link className="nav-link" to="/home">Home<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>
                    </ul>
                </div>
                <form class="form-inline my-2 my-lg-0">
                    <div class="nav-item dropdown">
                        <button class="nav-link btn btn-outline-light dropdown-toggle pull-left" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to="/">Profile</Link>
                            <Link class="dropdown-item" to="/">History</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/">Logout</Link>
                        </div>
                    </div>
                </form>
            </nav>
        );
    }
}

export default Header;