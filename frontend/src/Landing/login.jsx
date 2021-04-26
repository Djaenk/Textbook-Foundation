import React from 'react';
import axios from 'axios';

/*
Props expected:
	* function signUp()
*/

const loginURL = "";

export class LoginPage extends React.Component {

	state = {
		userName: "",
		password: "",
		attempts: 0
	};

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

	submitCreds() {
		axios.post(loginURL, {username: this.state.userName, password: this.state.password})
		.then(res => {
			console.log(res);
			if (true) { //Success

			} else { //Fail
				this.setState(s => {
					s.attempts++;
					return s;
				});
			}

		});
	}

	render() {
		return (
		<div>
			<img src=""/>
			<div className="text-center m-5 p-5 border bg-light rounded">
				<h1 className="">Log In</h1>
				<div className="text-muted">Please enter your credentials</div>
				<form>
					<label for="user" className="mt-3">Username</label><br/>
					<input type="text" id="user" onChange={e => this.setUser(e.target.value)}/><br/>
					<label for="pass" className="mt-3">Password</label><br/>
					<input type="text" id="pass" onChange={e => this.setPass(e.target.value)}/><br/>
				</form>
				<div className="m-2 text-danger font-weight-bold"> {this.state.attempts !== 0 && (<span>Username or Password is invalid</span>)} </div>
				<div className="btn btn-primary rounded-pill m-3" onClick={() => this.submitCreds()}>LOG IN</div>
			</div>

			<div className="text-center m-5 p-5 border bg-light rounded">
				<h1 className="">New member?</h1>
				<div>Enter your personal details and start browsing.</div>
				<div className="btn btn-primary rounded-pill m-4" onClick={() => this.props.signUp()}>SIGN UP</div>
    			</div>
		</div>
		);
	}
}
