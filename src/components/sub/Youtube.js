import Layout from '../common/Layout';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChair,
	faBed,
	faDesktop,
	faWifi,
	faFan,
} from '@fortawesome/free-solid-svg-icons';

function Youtube() {
	const path = process.env.PUBLIC_URL;
	const desc =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure nostrum quisquam minima dolores animi?';

	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);
	const caption = useRef(null);
	const vids = useRef(null);

	useEffect(() => {
		const key = 'AIzaSyDv6JIUkmdFO-F6Ha1KriiO4uw0Iot8bb4';
		const playlist = 'PLmAX7QJDEdu3phGnuvhY1SIPB47cipfvn';
		const num = 5;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	}, []);

	useEffect(() => {
		for (const cap of caption.current.children) {
			cap.classList.remove('on');
		}
		caption.current.children[Index].classList.add('on');

		for (const vid of vids.current.children) {
			vid.classList.remove('on');

			if (vid === vids.current.children[Index]) {
				console.log(vid);
				vid.classList.add('on');
			}
		}
		//vids.current.children[Index].classList.add('on');
	}, [Index]);

	const captionList = [
		{
			name: 'CHAIR',
			icon: <FontAwesomeIcon icon={faChair}></FontAwesomeIcon>,
		},
		{
			name: 'BED',
			icon: <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>,
		},
		{
			name: 'DESKTOP',
			icon: <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>,
		},
		{
			name: 'WIFI',
			icon: <FontAwesomeIcon icon={faWifi}></FontAwesomeIcon>,
		},
		{
			name: 'FAN',
			icon: <FontAwesomeIcon icon={faFan}></FontAwesomeIcon>,
		},
	];

	return (
		<>
			<Layout
				name='Youtube'
				desc={desc}
				visual={`${path}/img/sub/youtube/visual.jpg`}></Layout>
			<div id='youtube'>
				<ul className='list' ref={caption}>
					{captionList.map((caption, idx) => {
						return (
							<li key={idx}>
								<h3>{caption.name}</h3>
								<button onClick={() => setIndex(idx)}>{caption.icon}</button>
							</li>
						);
					})}
				</ul>

				<ul className='vids' ref={vids}>
					{Vids.map((vid, idx) => {
						const titLen = 50;
						const descLen = 200;
						const tit =
							vid.snippet.title.length > titLen
								? vid.snippet.title.substr(0, titLen) + '...'
								: vid.snippet.title;
						const desc =
							vid.snippet.description.length > descLen
								? vid.snippet.description.substr(0, descLen) + '...'
								: vid.snippet.description;
						const date = vid.snippet.publishedAt;
						const name = idx === 0 ? 'on' : '';

						return (
							<article key={idx} className={name}>
								<div className='txt'>
									<h4>{tit}</h4>
									<p>{desc}</p>
									<span>{date}</span>
								</div>
								<div className='pic'>
									<img src={vid.snippet.thumbnails.standard.url} alt={tit} />
								</div>
							</article>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default Youtube;
