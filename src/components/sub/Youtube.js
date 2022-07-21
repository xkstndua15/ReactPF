import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Popup from '../common/Popup';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../redux/actionType';

function Youtube() {
	const path = process.env.PUBLIC_URL;
	const desc =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure nostrum quisquam minima dolores animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam voluptate pariatur id mollitia.';

	const dispatch = useDispatch();
	const vids = useSelector((store) => store.youtubeReducer.youtube);

	const [Index, setIndex] = useState(0);
	const [VidIdx, setVidIdx] = useState(0);
	const caption = useRef(null);
	const pop = useRef(null);

	useEffect(async () => {
		dispatch({ type: types.YOUTUBE.start, Opt: { index: Index } });

		for (const cap of caption.current.children) {
			cap.classList.remove('on');
		}
		caption.current.children[Index].classList.add('on');
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

				<ul className='vids'>
					{vids.map((vid, idx) => {
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

			{vids.length > 0 && (
				<Popup ref={pop}>
					<iframe
						src={`https://www.youtube.com/embed/${vids[VidIdx].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				</Popup>
			)}
		</>
	);
}

export default Youtube;
