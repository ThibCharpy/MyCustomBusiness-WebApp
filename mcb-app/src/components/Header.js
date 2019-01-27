import React from 'react';

/**
 * App Header
 */
class Header extends React.Component {

    /**
     * Render html and other components function function
     */
    render() {
        return (
            <h1>Header for {this.props.title}</h1>
        );
    }
}

export default Header;