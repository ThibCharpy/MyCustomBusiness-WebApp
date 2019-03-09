import React from 'react'
import {Link} from 'react-router-dom'
/**
 * User item component to display user's informations
 */
class UserItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

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
        let editUser = this.props.user;
        let toEditUser = {
            pathname: '/users/'+this.props.user.id,
            innerRef: {editFunc, editUser}
        };
        return (
            <tr className="d-flex">
                <th scope="row" className="col-sm-1">{this.props.user.id}</th>
                <td className="col-sm-4">{this.props.user.username}</td>
                <td className="col-sm-5">{this.props.user.email}</td>
                <td className="col-sm-2 text-center">
                    <Link to={toEditUser} className="btn btn-warning">
                        <i className="far fa-edit"></i>
                    </Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={this.handleDelete}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default UserItem;