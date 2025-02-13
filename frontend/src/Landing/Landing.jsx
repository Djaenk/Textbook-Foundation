import React from 'react';
import { Redirect } from 'react-router-dom';
import Accounts from '../api/accounts';
import { Navigation } from '../app/Navigation';

export class Landing extends React.Component {

    state = {
        username: "",
        password: "",
        invalidCred: false,
        jwtValue: "",
    }

    accounts = new Accounts();

    async login(event) {
        // Authenticate user

        event.preventDefault();
        event.stopPropagation();

        if (!(this.state.username && this.state.password)) {
            this.setState({ invalidCred: true });
            return;
        }

        const response = await this.accounts.login(this.state.username, this.state.password);

        if (!response || response === 'error') {
            return;
        }

        if (response.status) {

            sessionStorage.setItem("isAuthenticated", "true");
            sessionStorage.setItem("userId", response.account.userID);

            this.setState({
                username: "",
                password: "",
                invalidCred: false
            });
        }
        else {
            this.setState({ invalidCred: true });

            //TEST - BYPASS LOGIN
            // this.setState({ invalidCred: false });
            // sessionStorage.setItem("isAuthenticated", "true");
            // sessionStorage.setItem("userId", 1);
            //TEST - BYPASS LOGIN
        }
    }

    render() {
        if (sessionStorage.getItem("isAuthenticated") === "true") {
            return <Redirect to="/home" />;
        }
        return (
            <>
            <Navigation />
                <form id="account-form" className="col-sm-9 col-md-7 col-lg-4 mt-5 mx-auto border-0" onSubmit={ e => this.login(e) }>
                    <h2 className="text-center">Log In</h2>
                    <p className="text-center text-secondary">Please enter your credentials.</p>
                    <p>{ this.state.jwtValue }</p>
                    { this.state.invalidCred &&
                        <p className="alert alert-danger">
                            Invalid username or password
                        </p> }
                    <div className="form-label-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            value={ this.state.username }
                            onChange={ event => this.setState({ username: event.target.value }) }/>
                    </div>
                    <div className="form-label-group mt-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={ this.state.password }
                            onChange={ event => this.setState({ password: event.target.value }) }/>
                    </div>

                    <div id="login-button-container" className="text-center">
                        <button
                            type="submit"
                            className="btn btn-info mt-4"
                            onClick={ event => this.login(event) }>
                            Log In
                        </button>
                    </div>

                    <div id="register-button-container" className="text-center mt-3">
                        <span>Need an account? </span>
                        <a href="/register">Register here</a>
                    </div>
                </form>
            </>
        );
    }
}
export default Landing;
