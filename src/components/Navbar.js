import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
	setTimeout(() => {
		props.history.push('/');
	}, 10000);
	return (
		<nav className="nav-wrapper red bg-darken-3">
			<div className="container">
				<span className="brand-logo"> Poke' Times</span>
				<ul className="right ">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<Link to="/contacts">Contacts</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
