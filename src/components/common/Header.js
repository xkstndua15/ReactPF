import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const color = { color: '#fff' };
	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<Link to='/'>LOGO</Link>
				</h1>
				<ul id='gnb'>
					<li>
						<NavLink to='/department' activeStyle={color}>
							Department
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={color}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={color}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={color}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/location' activeStyle={color}>
							Location
						</NavLink>
					</li>
					<li>
						<NavLink to='/members' activeStyle={color}>
							Membership
						</NavLink>
					</li>
				</ul>
				<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
			</div>
		</header>
	);
}

export default Header;
