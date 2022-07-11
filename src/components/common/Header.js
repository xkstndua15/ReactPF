import { NavLink, Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<div className='inner'>
				<h1>
					<Link to='/'>LOGO</Link>
				</h1>
				<ul id='gnb'>
					<li>
						<NavLink to='/department'>Department</NavLink>
					</li>
					<li>
						<NavLink to='/gallery'>Gallery</NavLink>
					</li>
					<li>
						<NavLink to='/youtube'>Youtube</NavLink>
					</li>
					<li>
						<NavLink to='/community'>Community</NavLink>
					</li>
					<li>
						<NavLink to='/location'>Location</NavLink>
					</li>
					<li>
						<NavLink to='/membership'>Membership</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
