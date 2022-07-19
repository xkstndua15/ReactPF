import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import { useRef } from 'react';

function Header(props) {
	const color = { color: '#fff' };
	const menu = useRef(null);
	return (
		<>
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
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => {
							menu.current.toggle();
						}}></FontAwesomeIcon>
				</div>
			</header>

			<Menu ref={menu} />
		</>
	);
}

export default Header;
