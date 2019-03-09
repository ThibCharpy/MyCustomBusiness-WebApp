import React from 'react'

import UserList from './UserList'
import {findAllUsers, findUserById, addUser, updateUser, deleteUser} from '../../utils/mcb-api-users'
import Link from 'react-router-dom/Link';

/**
 * User management component
 */
class UserComponent extends React.Component {

    /**
     * @todo make the footer fixed on reducing the window
     */

    constructor(props) {
        super(props);
        this.getUsers = this.getUsers.bind(this);
        this.handleFindUserById = this.handleFindUserById.bind(this);
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

    async handleFindUserById(userId) {
        const user = await findUserById(userId);
        return user;
    }

    /**
     * Handle form submit to create a new user
     * @param {String} username 
     * @param {String} email 
     * @param {String} password 
     */
    async handleUserCreate(username, email, password) {
        try {
            await addUser(username, email, password);
        } catch (reason) {
            throw Error(reason);
        }
    }

    /**
     * Handle form submit to update a user by its id
     * @param {Integer} userId 
     * @param {String} username 
     * @param {String} email 
     * @param {String} password 
     */
    async handleUserUpdate(userId, username, email, password) {
        try {
            await updateUser(userId, username, email, password);
        }catch (reason) {
            throw Error(reason);
        }
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
     * Retrieve all users
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
                        //password: user.password
                    };
                    this.setState({users: [userElement].concat(this.state.users)});
                });
                this.setState({usersError: null});
            }
        ).catch(reason => {
            this.setState({usersError: 'Cannot load user list, '+reason});
            this.setState({users: []});
        }
      );
    };

    /**
     * Render html and other components
     */
    render() {
        let createFunc = this.handleUserCreate;
        let toCreateUser = {
            pathname: '/users/new',
            innerRef: {createFunc}
        };
        return (
            <div style={{paddingTop: '10px'}}>
                <div className="d-flex justifiy-content-between mb-3">
                    <h2 className="p-2">My Custom Business - Users management</h2>
                    {(this.state.users.length > 0) ? 
                        <Link to={toCreateUser} className="btn btn-primary ml-auto align-self-end">
                            Create&nbsp;<i className="far fa-plus-square fa-lg"></i>
                        </Link>
                    : null}
                </div>
                <hr />
                <div className={`${this.state.usersError? 'alert alert-danger': ''}`} role="alert">
                    {this.state.usersError}
                </div>
                <UserList onSearchUser={this.handleFindUserById} onCreateUser={this.handleUserCreate} onDeleteUser={this.handleUsersDelete} onEditUser={this.handleUserUpdate} items={this.state.users}/>
            </div>
        );
    }
}

export default UserComponent;