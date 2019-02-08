import React from 'react';

import {Link} from 'react-router-dom'

/**
 * App Footer
 */
class Footer extends React.Component {

    /**
     * Render html and other components function function
     */
    render() {
        return (
            <footer class="fixed-bottom">
                <hr />
                <div class="row justify-content-around">
                    <small>My Custom Business</small>
                    <Link class="btn-light" to="/">
                        <i class="fas fa-suitcase fa-2x"></i>
                    </Link>
                    <small>ReactJS Web Application</small>
                </div>
            </footer>
            
        );
    }
}

export default Footer;