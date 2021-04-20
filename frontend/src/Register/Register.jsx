import React from 'react';
import { Navigation } from '../app/Navigation';

export const Register = props =>
<>
	<Navigation/>

     <div>
     <form id="register-form" className="col-sm-9 col-md-7 col-lg-4 mt-5 mx-auto border-0">
         <h2 className="text-center">Sign Up</h2>
         <p className="text-center text-secondary">Please enter your personal information.</p>
         <div className="form-label-group">
             <label htmlFor="username">First Name</label>
             <input
                type="text"
                id="first-name"
                className="form-control"/>
         </div>
         <div className="form-label-group mt-2">
             <label htmlFor="username">Last Name</label>
             <input
                type="text"
                id="last-name"
                className="form-control"/>
         </div>
         <div className="form-label-group mt-2">
             <label htmlFor="username">Number</label>
             <input
                type="text"
                id="phone"
                className="form-control"/>
         </div>
         <div className="form-label-group mt-2">
             <label htmlFor="username">Email</label>
             <input
                type="text"
                id="email"
                className="form-control"/>
         </div>
         <div className="form-label-group mt-2">
             <label htmlFor="username">Username</label>
             <input
                type="text"
                id="username"
                className="form-control"/>
         </div>
         <div className="form-label-group mt-2">
             <label htmlFor="password">Password</label>
             <input
                type="password"
                id="password"
                className="form-control"/>
         </div>

         <div id="login-button-container" className="text-center mt-3">
             <button
                type="submit"
                className="btn btn-info">
                Sign Up
             </button>
         </div>

         <div id="register-button-container" className="text-center mt-2">
             <span>Already have an account? </span>
             <a href="/">Log-In here</a>
         </div>
     </form>
     </div>
</>
