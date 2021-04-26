import React from 'react';
import { Redirect } from 'react-router-dom';
import { Navigation } from '../app/Navigation';
import { Accounts } from '../api/accounts';
import { Checkbox, Nav } from 'react-bootstrap';


export class ProfileEditor extends React.Component {
    accountsRepository = new Accounts();

    state = {
        username: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        joinDate: "",
        private: 0,
        redirect: false
    };

    onSave() {
        this.accountsRepository.updateProfile(sessionStorage.userId, this.state)
        .then(() =>
        this.setState({ redirect: true }));
    }

    render() {

        const { redirect } = this.state;

        if (redirect) {
        return <Redirect to={ '/profile/' + sessionStorage.userId } />;
        }

        return <>
        <Navigation />
        <form className="container">
                <h3>Edit Your Profile</h3>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={ event => this.setState({ username: event.target.value }) }
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                        id="firstName"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={ event => this.setState({ firstName: event.target.value }) }
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"
                        id="lastName"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={ event => this.setState({ lastName: event.target.value }) }
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumbers">Phone Number</label>
                    <input type="number"
                        id="phoneNumbers"
                        name="phoneNumbers"
                        value={this.state.phoneNumber}
                        onChange={ event => this.setState({ phoneNumbers: event.target.value }) }
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={ event => this.setState({ email: event.target.value }) }
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={ event => this.setState({ password: event.target.value }) }
                        className="form-control" />
                </div>                        

                <div className="form-group">
                    
                    <input type="checkbox"
                        id="private"
                        name="private"
                        checked={this.state.private}
                        onChange={ event => this.setState({ private: event.target.checked }) }
                        /> <label htmlFor="private">Keep your account private</label>
                </div>

                <div>
                    <button onClick={ () => this.onSave() }
                            className="btn btn-block btn-primary"
                            type="button">
                                Save
                    </button>
                </div>
            </form>
        </>;
    }

    componentDidMount() {
        let id = sessionStorage.userId;
        if (id) {
            this.accountsRepository.getProfile(id)
            .then(account => this.setState(account.data[0]));
        }
    }
}