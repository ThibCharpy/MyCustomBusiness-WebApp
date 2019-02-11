import React from 'react';

import UserList from './UserList';

/**
 * User management component
 */
class UserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.getUsers = this.getUsers.bind(this);
        this.state = {
            users: []
        }
    }

    /**
     * On mounting component
     */
    componentDidMount(){
        this.getUsers();
    }
    
    /**
     * Retrieve users by requesting server
     */
    getUsers() {
        return [];
    };

    /**
     * Render html and other components
     */
    render() {
        return (
            <div>
                <h2>My Custom Business - Users management</h2>
                <hr />
                <UserList items={this.state.elements}/>
            </div>
        );
    }
}

export default UserComponent;