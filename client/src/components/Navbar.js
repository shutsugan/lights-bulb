import React from 'react';

import '../css/Navbar.css'

const Navbar = props => (
	<div className="Navbar">
		<div>{props.date}</div>
		<div>{props.time}</div>

		{props.children}
	</div>
);

export default Navbar;