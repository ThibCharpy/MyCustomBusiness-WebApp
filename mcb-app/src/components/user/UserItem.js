import React from 'react'
import {Link} from 'react-router-dom'
/**
 * User item component to display user's informations
 */
class UserItem extends React.Component {

    /**
     * Handle the onClick event which permitt to delete the current user
     * @param {Event} e the onClick event 
     */
    handleDelete(e) {
        e.preventDefault();
        this.props.deleteUser(this.props.user.id);
    }

    /**
     * Render html and other components
     */
    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.email}</td>
                <td>
                    <Link className="btn btn-warning" to="/users/:id">
                        {this.props.user.id}<i class="far fa-pen"></i>
                    </Link>
                    &nbsp;
                    <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                </td>
            </tr>
        );
    }
}

export default UserItem;