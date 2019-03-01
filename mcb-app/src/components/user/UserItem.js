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
        this.props.onDelete(this.props.user.id);
    }

    /**
     * Render html and other components
     */
    render() {
        let editFunc = this.props.onEdit;
        let toEditUser = {
            pathname: '/users/'+this.props.user.id,
            innerRef: {editFunc}
        };
        return (
            <tr className="d-flex">
                <th scope="row" className="col-sm-1">{this.props.user.id}</th>
                <td className="col-sm-4">{this.props.user.username}</td>
                <td className="col-sm-5">{this.props.user.email}</td>
                <td className="col-sm-2 text-center">
                    <Link to={toEditUser} className="btn btn-warning">
                        <i class="far fa-edit"></i>
                    </Link>
                    &nbsp;
                    <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                </td>
            </tr>
        );
    }
}

export default UserItem;