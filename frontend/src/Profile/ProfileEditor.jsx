import React from 'react';
import { Redirect } from 'react-router-dom';
import { Navigation } from '../app/Navigation';
import { Accounts } from '../api/accounts';
import { Checkbox } from 'react-bootstrap';


export class ProfileEditor extends React.Component {
    profileRepository = new Accounts();

    state = {
        username: sessionStorage.username,
        firstName: sessionStorage.firstName,
        lastName: sessionStorage.lastName,
        phoneNumbers: sessionStorage.phoneNumbers,
        email: sessionStorage.email,
        password: sessionStorage.password,
        joinDate: sessionStorage.joinDate,
        private: sessionStorage.private
    };

    onSave() {
        this.profileRepository.updateProfile(this.state.id, this.state)
        .then(account => {
            this.setState({ redirect: '/profile' });
        });

    }

    render() {
        return <>
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
                        value={this.state.phoneNumbers}
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
                    <label htmlFor="private">Keep your account private</label>
                    <input type="checkbox"
                        id="private"
                        name="private"
                        checked={this.state.private}
                        onChange={ event => this.setState({ private: event.target.checked }) }
                        />
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
        let id = +this.props.match.params.id;
        if (id) {
            this.accountsRepository.getAccount(id)
            .then(account => this.setState(account));
        }
    }
}