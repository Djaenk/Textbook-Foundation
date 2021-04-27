import React from 'react';
import axios from 'axios';
import { Navigation } from '../app/Navigation';
import { Accounts } from '../api/accounts'
import { Redirect } from 'react-router';

export class Register extends React.Component {

	accountRepository = new Accounts();

	state = {
			firstName: "",
			lastName: "",
			number: "",
			email: "",
			username: "",
			password: "",
			private: "",
			redirect: false
	};

	setName(n) {
		this.setState(s => {
			s.firstName = n;
			return s;
		});
	}

	setLast(l) {
		this.setState(s => {
			s.lastName = l;
			return s;
		});
	}

	setPhone(f) {
		this.setState(s => {
			s.number = f;
			return s;
		});
	}

	setEmail(e) {
		this.setState(s => {
			s.email = e;
			return s;
		});
	}

	setUser(u) {
		this.setState(s => {
			s.username = u;
			return s;
		});
	}

	setPass(p) {
		this.setState(s => {
			s.password = p;
			return s;
		});
	}

	setPrivate(z) {
		this.setState(s => {
			s.password = z;
			return s;
		});
	}

	signUp() {
			this.accountRepository.register(this.state)
            .then(this.setState({redirect: true}));
	}

	render(){
		const { redirect } = this.state;

		if (redirect) {
			return <Redirect to='/'/>;
		}
		return(
				<>
					<Navigation/>

				     <div>
				     <form id="register-form"
					 className="col-sm-9 col-md-7 col-lg-4 mt-5 mx-auto border-0"
					 onSubmit={() => this.signUp()}>
				         <h2 className="text-center">Sign Up</h2>
				         <p className="text-center text-secondary">Please enter your personal information.</p>
				         <div className="form-label-group">
				             <label htmlFor="first-name">First Name</label>
				             <input
				                type="text"
				                id="first-name"
								placeholder="John"
				                className="form-control"
												onChange={e => this.setName(e.target.value)}/>
				         </div>
				         <div className="form-label-group mt-2">
				             <label htmlFor="last-name">Last Name</label>
				             <input
				                type="text"
				                id="last-name"
								placeholder="Smith"
				                className="form-control"
												onChange={e => this.setLast(e.target.value)}/>
				         </div>
				         <div className="form-label-group mt-2">
				             <label htmlFor="phone">Phone Number</label>
				             <input
				                type="tel"
				                id="phone"
								pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
								placeholder="214-789-8000"
				                className="form-control"
												onChange={e => this.setPhone(e.target.value)}/>
				         </div>
				         <div className="form-label-group mt-2">
				             <label htmlFor="email">Email</label>
				             <input
				                type="email"
				                id="email"
								placeholder="jsmith@smu.edu"
				                className="form-control"
												onChange={e => this.setEmail(e.target.value)}/>
				         </div>
				         <div className="form-label-group mt-2">
				             <label htmlFor="username">Username*</label>
				             <input
				                type="text"
				                id="username"
								placeholder="jsmith"
				                className="form-control"
								onChange={e => this.setUser(e.target.value)}
								required/>
				         </div>
				         <div className="form-label-group mt-2">
				             <label htmlFor="password">Password*</label>
				             <input
				                type="password"
				                id="password"
				                className="form-control"
								onChange={e => this.setPass(e.target.value)}
								required/>
								</div>
								<div className="form-check form-check-inline mt-4">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="0"
										onClick={e => this.setPrivate(e.target.value)}></input>
									<label className="form-check-label" htmlFor="inlineRadio1">Public Account</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="1"
										onClick={e => this.setPrivate(e.target.value)}></input>
									<label className="form-check-label" htmlFor="inlineRadio2">Private Account</label>
								</div>

				         <div id="login-button-container" className="text-center mt-4">
				             <button
				                type="submit"
				                className="btn btn-info"
								onSubmit={() => this.signUp()}>
				                Sign Up
				             </button>
				         </div>

				         <div id="register-button-container" className="text-center mt-3">
				             <span>Already have an account? </span>
				             <a href="/">Log-In here</a>
				         </div>
				     </form>
				     </div>
				</>
				);
		}
}
