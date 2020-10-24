import React from 'react';

const Navbar = () => {
	return (
		<nav className="nav-wrapper red bg-darken-3">
			<div className="container">
				<span className="brand-logo"> Poke' Times</span>
				<ul className="right ">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contacts">Contacts</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
