import React from 'react'

/**
 * Form component to create or edit a user
 */
class UserForm extends React.Component {

    constructor(props) {
        super(props);

        this.baseState = this.state;
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmedPassword: '',
            usernameError: null,
            emailError: null,
            passwordError: null,
            confirmedPasswordError: null,
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.validateUsername = this.validateUsername.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateConfirmedPassword = this.validateConfirmedPassword.bind(this);
    }

    /**
     * Handle on change event for username
     * @param {Event} e on change event
     */
    handleUsernameChange(e) {
        e.preventDefault();
        this.setState({
            username: e.target.value
        });
    }

    /**
     * Handle on change event for email
     * @param {Event} e on change event
     */
    handleEmailChange(e) {
        e.preventDefault();
        this.setState({
            email: e.target.value
        });
    }

    /**
     * Handle on change event for password
     * @param {Event} e on change event
     */
    handlePasswordChange(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value
        });
    }

    /**
     * Handle on change event for confirmed password
     * @param {Event} e on change event
     */
    handleConfirmPasswordChange(e) {
        e.preventDefault();
        this.setState({
            confirmedPassword: e.target.value
        });
    }

    /**
     * Handle onSubmit function to send data to server
     */
    handleSubmit(e) {
        e.preventDefault();
        // TODO: To be implemented
    }

    /**
     * Clear form inputs
     * @param {Event} e on click event
     */
    clearForm(e) {
        e.preventDefault();
        this.setState(this.baseState);
    }

    /**
     * Check if the username is valid
     */
    validateUsername() {
        const {username} = this.state;
        this.setState({
            usernameError:
                (username.length > 3 && username.length < 16)?null:
                'Invalid username'
        });
    }

    validateEmail() {
        let emailRegexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const {email} = this.state;
        this.setState({
            emailError:
                emailRegexp.test(email)?null:
                'Invalid email'
        });
    }

    validatePassword() {

    }

    validateConfirmedPassword() {

    }

    /**
     * Render html and other components
     */
    render() {
        const isCreateForm = this.props.match.params.id == null;
        let buttonSubmitText = (isCreateForm)? "Create": "Edit";
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>My Custom Business - {buttonSubmitText} User</h2>
                <hr />
                <div className="form-group">
                    <label>Username:</label>
                    <input className="form-control" type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange}/>
                    <div className="invalid-feedback">Invalid username</div>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input className="form-control" type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange}/>
                    <div className="invalid-feedback">Invalid Email</div>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input className="form-control" type="text" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <div className="invalid-feedback">Invalid password</div>
                </div>
                <div className="form-group">
                    <label>Confirm password:</label>
                    <input className="form-control" type="text" placeholder="Confirm your password" value={this.state.confirmedPassword} onChange={this.handleConfirmPasswordChange}/>
                    <div className="invalid-feedback">Invalid password</div>
                </div>
                <button type="submit" className={`btn ${isCreateForm? 'btn-primary': 'btn-warning'}`}>{buttonSubmitText}</button>&nbsp;
                <button type="reset" className="btn btn-secondary" onClick={this.clearForm}>Clear form</button>
            </form>
        );
    }
}

export default UserForm;