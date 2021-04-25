import React from 'react';
import { Redirect } from 'react-router-dom';
import { Navigation } from '../app/Navigation';
import { Accounts } from '../api/accounts';


export class ProfileEditor extends React.Component {
    profileRepository = new Accounts();

    state = {
        name: '',
        email: '',
        isEmployee: false,
        departmentId: 0,
        phoneNumbers: []
    };

    addPhone(phone) {
        var phoneNumbers = this.state.phoneNumbers;
        phoneNumbers.push(phone);
        this.setState({ phoneNumbers });
    }

    onSave() {
        if (this.state.id) {
            this.accountsRepository.updateAccount(this.state.id, this.state)
            .then(account => {
                this.setState({ redirect: '/' });
            });
        } else {
            this.accountsRepository.createAccount(this.state)
            .then(account => {
                this.setState({ redirect: '/' });
            });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={ this.state.redirect } />;
        }
        return <>
        <form className="container">
                <h1>Account Editor</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={ event => this.setState({ name: event.target.value }) }
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
                    <label htmlFor="isEmployee">
                        <input type="checkbox"
                            id="isEmployee"
                            name="isEmployee"
                            checked={this.state.isEmployee}
                            onChange={ event => this.setState({ isEmployee: event.target.checked }) }
                            />
                        Is Employee
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="departmentId">Department</label>
                    <select id="departmentId"
                        name="departmentId"
                        className="form-control"
                        value={this.state.departmentId}
                        onChange={ event => this.setState({ departmentId: event.target.value }) }>
                            <option></option>
                            {
                                this.departments.map(x => <option key={ x.id } value={ x.id }>{ x.name }</option>)
                            }
                    </select>
                </div>
                        
                <PhoneList phoneNumbers={ this.state.phoneNumbers } />
                <PhoneEditor onPhoneAdded={ phone => this.addPhone(phone) } />

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