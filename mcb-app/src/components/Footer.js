import React from 'react';

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
                    <a class="btn-light" href="#">
                        <i class="fas fa-suitcase fa-2x"></i>
                    </a>
                    <small>ReactJS Web Application</small>
                </div>
            </footer>
        );
    }
}

export default Footer;