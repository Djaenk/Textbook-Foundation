import React from 'react';
import { ProfileIcon } from './Icons'

export const Navigation = props =>
<>
	<nav id="navigation" className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between" style={{height: 70}}>
		<a className="navbar-brand">
			<img src="textBookFoundation_logoWhite.png" alt="Textbook Foundation Logo"/>
		</a>

		<ul className="navbar navbar-nav font-weight-bold">
			<li className="nav-item active pl-5">
				<a className="nav-link" href="/home">HOME</a>
			</li>
			<li className="nav-item active pl-5">
				<a className="nav-link" href="/donate">DONATE</a>
			</li>
			<li className="nav-item active pl-5">
				<a className="nav-link" href="#">BORROW</a>
			</li>
			<li className="nav-item active pl-5">
				<a className="nav-link" href="#"><ProfileIcon width="35" height="35"/></a>
			</li>
		</ul>
	</nav>
</>
