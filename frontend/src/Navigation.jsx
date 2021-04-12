import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const Navigation = (props) =>
	<Navbar>
		<Navbar.Brand>TEXTBOOK FOUNDATION (logo here)</Navbar.Brand>
		<Nav>
			<Nav.Link>HOME</Nav.Link>
			<Nav.Link>DONATE</Nav.Link>
			<Nav.Link>BORROW</Nav.Link>
			<Nav.Link>(profile icon)</Nav.Link>
		</Nav>
	</Navbar>