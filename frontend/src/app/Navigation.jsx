import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileIcon } from './Icons'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export const Navigation = props => {

	{/* <nav id="navigation" className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between" style={{height: 70}}>
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
	</nav> */}
	let logout = () => {
		sessionStorage.setItem("userId", undefined);
		sessionStorage.setItem("isAuthenticated", "false");

	};

return <>
	<Navbar bg="dark" expand="lg" className="navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-between" >
        <Navbar.Brand href="/home"><img className="mw-50" src={require('../images/textbookFoundation_logoWhite.png')} alt="Textbook Foundation Logo"/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="font-weight-bold ml-auto">
		  <NavLink to='/home' className='nav-link'>HOME</NavLink>
		  <NavLink to='/donate' className="nav-link" >DONATE</NavLink>
		  <NavLink exact to='/' className="nav-link" onClick={ () => logout() } >LOGOUT</NavLink>
		  <NavLink to={ '/profile/' + sessionStorage.userId }><ProfileIcon width="35" height="35"/></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
	</>;

}
