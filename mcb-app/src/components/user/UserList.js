import React from 'react'
import {Link} from 'react-router-dom'

import UserItem from './UserItem'

/**
 * User list
 */
class UserList extends React.Component {

    /**
     * Render html and other components
     */
    render() {
        let list = null;
        let createFunc = this.props.onCreateUser;
        if (!Array.isArray(this.props.items) || !this.props.items.length) {
            list =<tr><td className="table-secondary text-center" colSpan="4">
                <Link to={{
                    pathname: '/users/new',
                    innerRef: {createFunc}
                    }}><u>Create a new User <i className="fas fa-plus-circle"></i></u></Link>
            </td></tr>;
        } else {
            list = this.props.items.map(
                    item => <UserItem key={item.id} onSearch={this.props.onSearchUser}  onDelete={this.props.onDeleteUser} onEdit={this.props.onEditUser} user={item}/>
                );
        }
        return (
            <table className="table table-hover">
                <thead className="bg-success">
                    <tr className="d-flex">
                        <th className="col-sm-1">#</th>
                        <th className="col-sm-4">Name</th>
                        <th className="col-sm-5">E-mail</th>
                        <th className="col-sm-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        );
    }
}

export default UserList;