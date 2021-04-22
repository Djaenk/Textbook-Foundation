import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileIcon } from './Icons'

export const Navigation = props =>
<>
	<nav id="navigation" className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between" style={{height: 70}}>
		<a className="navbar-brand">
			<img src="textBookFoundation_logoWhite.png" alt="Textbook Foundation Logo"/>
		</a>

		<ul className="navbar navbar-nav font-weight-bold">
			<li className="nav-item active pl-5">
				<NavLink to='/home' className='nav-link'>HOME</NavLink>
			</li>
			<li className="nav-item active pl-5">
				<NavLink to='/donate' className="nav-link" >DONATE</NavLink>
			</li>
			<li className="nav-item active pl-5">
				<NavLink to='/borrow' className="nav-link" >BORROW</NavLink>
			</li>
			<li className="nav-item active pl-5">
				<NavLink to='/profile'><ProfileIcon width="35" height="35"/></NavLink>
			</li>
		</ul>
	</nav>
</>