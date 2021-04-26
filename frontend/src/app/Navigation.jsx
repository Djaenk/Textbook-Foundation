import React from 'react';
import { ProfileIcon } from './Icons'

export const Navigation = props =>
<>
	<nav id="navigation" class="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between" style={{height: 70}}>
		<a class="navbar-brand">
			<img src="textBookFoundation_logoWhite.png" alt="Textbook Foundation Logo"/>
		</a>

		<ul class="navbar navbar-nav font-weight-bold">
			<li class="nav-item active pl-5">
				<a class="nav-link" href="/home">HOME</a>
			</li>
			<li class="nav-item active pl-5">
				<a class="nav-link" href="/donate">DONATE</a>
			</li>
			<li class="nav-item active pl-5">
				<a class="nav-link" href="#">BORROW</a>
			</li>
			<li class="nav-item active pl-5">
				<a class="nav-link" href="#"><ProfileIcon width="35" height="35"/></a>
			</li>
		</ul>
	</nav>
</>
