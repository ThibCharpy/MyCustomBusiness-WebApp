import React from 'react'
import {Link} from 'react-router-dom'

import UserItem from './UserItem'

/**
 * User list
 */
class UserList extends React.Component {

    /**
     * Render html and other components function
     */
    render() {
        let list = null;
        if (!Array.isArray(this.props.items) || !this.props.items.length) {
            list = <td colSpan="4"><Link to="/users/new">Create a new User</Link></td>
        } else {
            list = this.props.items.map(item => <UserItem user={item}/>);
        }
        return (
            <table>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        );
    }
}

export default UserList;