import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileIcon } from './Icons'

export const Navigation = props =>
<>
	<nav id="navigation" class="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between" style={{height: 70}}>
		<a class="navbar-brand">
			<img src="textBookFoundation_logoWhite.png" alt="Textbook Foundation Logo"/>
		</a>

		<ul class="navbar navbar-nav font-weight-bold">
			<li class="nav-item active pl-5">
				<NavLink to='/home' className='nav-link'>HOME</NavLink>
			</li>
			<li class="nav-item active pl-5">
				<NavLink to='/donate' className="nav-link" >DONATE</NavLink>
			</li>
			<li class="nav-item active pl-5">
				<NavLink to='/borrow' className="nav-link" >BORROW</NavLink>
			</li>
			<li class="nav-item active pl-5">
				<NavLink to='/profile'><ProfileIcon width="35" height="35"/></NavLink>
			</li>
		</ul>
	</nav>
</>