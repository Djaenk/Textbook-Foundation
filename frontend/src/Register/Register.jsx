import React from 'react';
import axios from 'axios';
import { Navigation } from '../app/Navigation';

const registerURL = "";

export class Register extends React.Component {

	state = {
		firstName: "",
		lastName: "",
		number: "",
		email: "",
		userName: "",
		password: ""
	}

	setName(n) {
		this.setState(s => {
			s.userName = n;
			return s;
		});
	}

	setLast(l) {
		this.setState(s => {
			s.password = l;
			return s;
		});
	}

	setPhone(f) {
		this.setState(s => {
			s.password = f;
			return s;
		});
	}

	setEmail(e) {
		this.setState(s => {
			s.password = e;
			return s;
		});
	}

	setUser(u) {
		this.setState(s => {
			s.userName = u;
			return s;
		});
	}

	setPass(p) {
		this.setState(s => {
			s.password = p;
			return s;
		});
	}


	signUp() {

		const user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			number: this.state.number,
			email: this.state.email,
			userName: this.state.userName,
			password: this.state.password
		};

		axios.post('/users',{ user })
			.then(res => {
				console.log(res);
				console.log(res.data);
			}).catch((error) => {
                console.log(error)
      });
	}

	render(){
			return(
				<>
					<Navigation/>

				     <div>
				     <form id="register-form" className="col-sm-9 col-md-7 col-lg-4 mt-5 mx-auto border-0" onSubmit={this.signUp}>
				         <h2 className="text-center">Sign Up</h2>
				         <p className="text-center text-secondary">Please enter your personal information.</p>
				         <div className="form-label-group">
				             <label htmlFor="first-name">First Name</label>
				             <input
				                type="text"
				                id="first-name"
				                className="form-control"
												onChange={e => this.setName(e.target.value)}/>
				         </div>
				         <div className="form-label-group mt-2">
				             <label htmlFor="last-name">Last Name</label>
				             <input
				                type="text"
				                id="last-name"
				                className="form-control"
												onChange={e => this.setLast(e.target.value)}/>
				         </div>
				         <div className="form-label-group mt-2">
				             <label htmlFor="phone">Number</label>
				             <input
				                type="text"
				                id="phone"
				                className="form-control"
												onChange={e => this.setPhone(e.target.value)}/>
				         </div>
				         <div className="form-label-group mt-2">
				             <label htmlFor="email">Email</label>
				             <input
				                type="text"
				                id="email"
				                className="form-control"
												onChange={e => this.setEmail(e.target.value)}/>
				         </div>
				         <div className="form-label-group mt-2">
				             <label htmlFor="username">Username</label>
				             <input
				                type="text"
				                id="username"
				                className="form-control"
												onChange={e => this.setUser(e.target.value)}/>
				         </div>
				         <div className="form-label-group mt-2">
				             <label htmlFor="password">Password</label>
				             <input
				                type="password"
				                id="password"
				                className="form-control"
												onChange={e => this.setPass(e.target.value)}/>
				         </div>

				         <div id="login-button-container" className="text-center mt-4">
				             <button
				                type="submit"
				                className="btn btn-info">
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
