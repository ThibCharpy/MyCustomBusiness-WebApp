import React from 'react'

import UserList from './UserList'
import {findAllUsers, deleteUser} from '../../utils/mcb-api-users'
import Link from 'react-router-dom/Link';

/**
 * User management component
 */
class UserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.getUsers = this.getUsers.bind(this);
        this.handleUserCreate = this.handleUserCreate.bind(this);
        this.handleUserUpdate = this.handleUserUpdate.bind(this);
        this.handleUsersDelete = this.handleUsersDelete.bind(this);
        this.state = {
            users: [],
            usersError: ''
        }
    }

    /**
     * On mounting component
     */
    componentDidMount() {
        this.getUsers();
    }

    handleUserCreate() {
        //TODO: to be implemented
    }

    handleUserUpdate() {
        //TODO: to be implemented
    }

    /**
     * Handle on click event over user delete button
     * @param {Integer} userId 
     */
    handleUsersDelete(userId) {
        deleteUser(userId).then(status => {
            if (status === 404) {
                this.setState({usersError: 'Cannot delete user with id='+userId+', server not found'});
            } else if(status === 500) {
                this.setState({usersError: 'Cannot delete user with id='+userId+', internal server error'});
            } else {
                this.setState({usersError: null});
            }
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
                this.setState({usersError: null});
            }
        ).catch(reason => {
            this.setState({usersError: 'Cannot load user list, '+reason})
            this.setState({users: []});
        }
      );
    };

    /**
     * Render html and other components
     */
    render() {
        let toCreateUser = {
            pathname: '/users/new',
            onCreateUser: this.handleUserCreate 
        };
        return (
            <div style={{paddingTop: '10px'}}>
                <div className="d-flex justifiy-content-between mb-3">
                    <h2 className="p-2">My Custom Business - Users management</h2>
                    {(this.state.users.length > 0) ? <Link to={toCreateUser} className="btn btn-primary ml-auto">New User</Link>: null}
                </div>
                <hr />
                <div class={`${this.state.usersError? 'alert alert-danger': ''}`} role="alert">
                    {this.state.usersError}
                </div>
                <UserList onDeleteUser={this.handleUsersDelete} onEditUser={this.handleUserUpdate} items={this.state.users}/>
            </div>
        );
    }
}

export default UserComponent;