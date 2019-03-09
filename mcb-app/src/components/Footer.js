import React from 'react';

import {Link} from 'react-router-dom'

/**
 * App Footer
 */
class Footer extends React.Component {

    /**
     * Render html and other components
     */
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row justify-content-around">
                        <small>My Custom Business</small>
                        <Link className="btn-light" to="/">
                            <i className="fas fa-suitcase fa-2x"></i>
                        </Link>
                        <small>ReactJS Web Application</small>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;