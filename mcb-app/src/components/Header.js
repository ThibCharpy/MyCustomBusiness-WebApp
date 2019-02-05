import React from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Users from '../components/user/UserComponent'
import App from '../App'

/**
 * App Header
 */
class Header extends React.Component {

    /**
     * Render html and other components function function
     */
    render() {
        return (
            <Router>
                <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                    <a class="navbar-brand" href="#">
                        <i class="fas fa-suitcase fa-lg"></i>
                        &nbsp;{this.props.title}
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Users</a>
                            </li>
                        </ul>
                    </div>
                    <form class="form-inline my-2 my-lg-0">
                        <div class="nav-item dropdown">
                            <a class="nav-link btn btn-outline-light dropdown-toggle pull-left" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-user"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Profile</a>
                                <a class="dropdown-item" href="#">History</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Logout</a>
                            </div>
                        </div>
                    </form>
                </nav>
            </Router>
        );
    }
}

export default Header;