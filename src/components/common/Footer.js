import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<h2>LOGO</h2>
				<div id='upFooter'>
					<ul>
						<li>
							<a href='#'>
								<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
							</a>
						</li>
						<li>
							<a href='#'>
								<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
							</a>
						</li>
						<li>
							<a href='#'>
								<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
							</a>
						</li>
					</ul>
					<div className='subscribe'>
						<p>Subscribe our news</p>
						<input type='text' placeholder='Your email address' />
						<button>Subscribe</button>
					</div>
				</div>
				<div id='downFooter'>
					<ul>
						<li>
							<a href='#'>Terms & Conditions</a>
						</li>
						<li>
							<a href='#'>Privacy Policy</a>
						</li>
						<li>
							<a href='#'>Accessibility</a>
						</li>
						<li>
							<a href='#'>Legal</a>
						</li>
					</ul>
					<p>2022 HYEONSEONG &copy; ALL RIGHT RESERVED.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
