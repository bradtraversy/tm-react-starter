import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<nav className='navbar bg-primary'>
		<h1>
			<i class='fab fa-react' /> My React App
		</h1>
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
		</ul>
	</nav>
);

export default Header;
