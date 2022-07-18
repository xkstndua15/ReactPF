import Layout from '../common/Layout';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Popup from '../common/Popup';

function Youtube() {
	const path = process.env.PUBLIC_URL;
	const desc =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure nostrum quisquam minima dolores animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam voluptate pariatur id mollitia.';
	const key = 'AIzaSyDv6JIUkmdFO-F6Ha1KriiO4uw0Iot8bb4';
	const playlistInst = [
		{
			playlist: 'PLmAX7QJDEdu34IYyBw8oR6rXWVSPwH8sS',
			num: 4,
		},
		{ playlist: 'PLmAX7QJDEdu3KapeCk3bACIhBj0-X0a15', num: 4 },
		{ playlist: 'PLmAX7QJDEdu2mgWqVzotrDsnFFgP6Hskj', num: 5 },
		{ playlist: 'PLmAX7QJDEdu3F0cQ63STQsRxtmQDw0oxJ', num: 4 },
		{ playlist: 'PLmAX7QJDEdu0lxbVWKNA0FBg9pcf-v3dL', num: 5 },
	];

	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);
	const [VidIdx, setVidIdx] = useState(0);
	const caption = useRef(null);
	const vids = useRef(null);
	const pop = useRef(null);

	useEffect(() => {
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistInst[0].playlist}&maxResults=${playlistInst[0].num}`;
		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	}, []);

	useEffect(async () => {
		if (vids.current.children.length === 0) return;

		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistInst[Index].playlist}&maxResults=${playlistInst[Index].num}`;

		await axios.get(url).then((json) => {
			setVids(json.data.items);
		});

		for (const cap of caption.current.children) {
			cap.classList.remove('on');
		}
		caption.current.children[Index].classList.add('on');

		for (const vid of vids.current.children) {
			vid.classList.remove('on');

			if (vid === vids.current.children[Index]) {
				vid.classList.add('on');
			}
		}
		vids.current.children[Index].classList.add('on');
	}, [Index]);

	const captionList = ['CHAIR', 'BED', 'DESKTOP', 'WIFI', 'FAN'];

	return (
		<>
			<Layout
				name='Youtube'
				desc={desc}
				visual={`${path}/img/sub/youtube/visual.jpg`}></Layout>
			<div id='youtube'>
				<h3>Our Videos</h3>
				<ul className='list' ref={caption}>
					{captionList.map((caption, idx) => {
						const on = idx === 0 ? 'on' : '';

						return (
							<li key={idx} onClick={() => setIndex(idx)} className={on}>
								<h3>{caption}</h3>
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
						const on = idx === 0 ? 'on' : '';

						return (
							<article
								key={idx}
								className={on}
								onClick={() => {
									pop.current.open();
									setVidIdx(idx);
								}}>
								<div className='txt'>
									<h4>{tit}</h4>
									<p>{desc}</p>
									<span>{date}</span>
								</div>
								<div className='pic'>
									<img src={vid.snippet.thumbnails.high.url} alt={tit} />
								</div>
								<div className='play'>
									<FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
								</div>
							</article>
						);
					})}
				</ul>
			</div>

			{Vids.length > 0 && (
				<Popup ref={pop}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[VidIdx].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				</Popup>
			)}
		</>
	);
}

export default Youtube;
