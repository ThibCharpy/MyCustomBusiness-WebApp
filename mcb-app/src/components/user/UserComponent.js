import React from 'react'

import UserList from './UserList'
import {findAllUsers, deleteUser} from '../../utils/mcb-api-users'

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
     * Handle on click event over user delete button
     * @param {Integer} userId 
     */
    handleUsersDelete(userId) {
        deleteUser(userId).then(status => {
            console.log(status);
            //TODO: may be use response status
        });
        this.setState(
            previousState => ({
                users: previousState.users.filter(
                    user => user.id !== userId
                )
            })
        );
    }
    
    /**
     * Retrieve all users from the server
     */
    getUsers() {
        findAllUsers().then(
            userList => {
                this.setState({users: []});
                userList.forEach(user => {
                    let userElement = {
                        id: user.id,
                        username: user.username,
                        email: user.email
                    };
                    this.setState({users: [userElement].concat(this.state.users)})
                });
            }
        ).catch(reason => {
            console.log(reason);
            this.setState({users: []});
        }
      );
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