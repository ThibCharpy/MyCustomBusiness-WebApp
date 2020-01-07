import React from 'react';

import {withRouter, Redirect} from 'react-router-dom';

/**
 * Form component to create or edit a user
 */
class UserForm extends React.Component {

    constructor(props) {
        super(props);
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

        this.state = {
            user: {
                id: null,
                username: '',
                email: ''
            },
            password: '',
            confirmedPassword: '',
            usernameError: '',
            emailError: '',
            passwordError: '',
            confirmedPasswordError: '',
            submitError: '',
            redirect: false
        }

        this.baseState = this.state;
    }

    componentDidMount() {
        const isEditMode = this.props.match.params.id !== undefined;
        if (isEditMode) {
            console.log('Edit mode !!');
            const {editUser} = this.props.location.innerRef;
            this.setState(() => ({user: editUser}));
        }
        console.log(this.state.user);
    }

    /**
     * Handle on change event for username
     * @param {Event} e on change event
     */
    handleUsernameChange(e) {
        var tmpUser = {...this.state.user}
        tmpUser.username = e.target.value;
        this.setState({user: tmpUser}, () => this.validateUsername());
    }

    /**
     * Handle on change event for email
     * @param {Event} e on change event
     */
    handleEmailChange(e) {
        var tmpUser = {...this.state.user}
        tmpUser.email = e.target.value;
        this.setState({user: tmpUser}, () => this.validateEmail());
    }

    /**
     * Handle on change event for password
     * @param {Event} e on change event
     */
    handlePasswordChange(e) {
        this.setState({password: e.target.value},  () => this.validatePassword());
    }

    /**
     * Handle on change event for confirmed password
     * @param {Event} e on change event
     */
    handleConfirmPasswordChange(e) {
        this.setState({confirmedPassword: e.target.value}, () => this.validateConfirmedPassword());
    }

    /**
     * Handle onSubmit function to send data to server
     */
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.match.params.id == null) {
            const {createFunc} = this.props.location.innerRef;
            createFunc(
                this.state.user.username,
                this.state.user.email,
                this.state.password
            ).then(() => this.setState(() => ({redirect: true})))
            .catch(error => this.setState(() => ({
                submitError: 'Cannot create user, ' + error
            })));
        } else {
            const {editFunc} = this.props.location.innerRef;
            editFunc(
                this.state.user.id,
                this.state.user.username,
                this.state.user.email,
                this.state.password
            ).then(() => this.setState(() => ({redirect: true})))
            .catch(error => this.setState(() => ({
                submitError: 'Cannot update user with id:' + this.state.user.id + ', ' + error
            })));
        }
    }

    /**
     * Clear form inputs
     */
    clearForm(e) {
        this.setState(this.baseState);
    }

    /**
     * Check if the username is valid
     */
    validateUsername() {
        const {username} = this.state.user;
        this.setState({
            usernameError:
                (username.length > 3 && username.length < 16)? null:
                'Invalid username, length: 6 < username < 16'
        });
    }

    /**
     * Check if the email is valid
     */
    validateEmail() {
        let emailRegexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const {email} = this.state.user;
        this.setState({
            emailError:
                emailRegexp.test(email)?null:
                email+' is not an email address'
        });
    }

    /**
     * Check if the password is valid
     */
    validatePassword() {
        const {password} = this.state;
        this.setState({
            passwordError:
                (password.length > 6 && password.length < 16)? null:
                "Invalid password length: 6 < password < 16"
        })
    }

    /**
     * Check if the confirmed password is valid
     */
    validateConfirmedPassword() {
        const {confirmedPassword} = this.state;
        const {password} = this.state;
        this.setState({
            confirmedPasswordError:
                (confirmedPassword === password)? null:
                "Confirmed password must be equals to password"
        })
    }

    /**
     * Render html and other components
     */
    render() {
        if (this.state.redirect) {
            return <Redirect to="/users"/>
        }

        const isCreateForm = this.props.match.params.id == null;
        let buttonSubmitText = (isCreateForm)? "Create": "Edit";
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>My Custom Business - {buttonSubmitText} User</h2>
                <hr />
                <div className={`${this.state.submitError? 'alert alert-danger': ''}`} role="alert">
                    {this.state.submitError}
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <input className={`form-control ${this.state.usernameError? 'is-invalid': ''}`} type="text" placeholder="Username" value={this.state.user.username} onChange={this.handleUsernameChange} onBlur={this.validateUsername}/>
                    <div className="invalid-feedback">{this.state.usernameError}</div>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input className={`form-control ${this.state.emailError? 'is-invalid': ''}`} type="text" placeholder="E-mail" value={this.state.user.email} onChange={this.handleEmailChange} onBlur={this.validateEmail}/>
                    <div className="invalid-feedback">{this.state.emailError}</div>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input className={`form-control ${this.state.passwordError? 'is-invalid': ''}`} type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} onBlur={this.validatePassword}/>
                    <div className="invalid-feedback">{this.state.passwordError}</div>
                </div>
                <div className="form-group">
                    <label>Confirm password:</label>
                    <input className={`form-control ${this.state.confirmedPasswordError? 'is-invalid': ''}`} type="password" placeholder="Confirm your password" value={this.state.confirmedPassword} onChange={this.handleConfirmPasswordChange} onBlur={this.validateConfirmedPassword}/>
                    <div className="invalid-feedback">{this.state.confirmedPasswordError}</div>
                </div>
                <button type="submit" className={`btn ${isCreateForm? 'btn-primary': 'btn-warning'}`}>{buttonSubmitText}</button>&nbsp;
                <button type="button" className="btn btn-secondary" onClick={this.clearForm}>Clear form</button>
            </form>
        );
    }
}

export default withRouter(UserForm);