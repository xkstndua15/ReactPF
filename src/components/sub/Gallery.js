import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';
import Popup from '../common/Popup';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../../redux/actionType';

function Gallery() {
	const desc =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, facilis. Officiis nam distinctio libero delectus cum aperiam eius reiciendis quae provident, fuga esse illum! Provident sunt quam nam? Reprehenderit, ipsum?';
	const path = process.env.PUBLIC_URL;
	const dispatch = useDispatch();

	const { gallery } = useSelector((store) => store.galleryReducer);

	const frame = useRef(null);
	const btn = useRef(null);
	const pop = useRef(null);
	let Num = 10;

	const [Index, setIndex] = useState(0);
	const [Opt, setOpt] = useState({
		type: 'user',
		user: '195955518@N03',
		num: Num,
	});

	const increaseList = () => {
		if (Num >= 20) return;

		Num *= 2;
		setOpt({
			type: 'user',
			user: '195955518@N03',
			num: Num,
		});

		if (Num * 2 >= 20) {
			btn.current.classList.add('off');
			console.log(btn.current.classList);
		}
	};

	const openPop = (index) => {
		pop.current.open();
		setIndex(index);
	};

	useEffect(() => {
		console.log(gallery);

		dispatch({ type: types.GALLERY.start, Opt });
	}, [Opt]);

	return (
		<>
			<Layout
				name={'Gallery'}
				desc={desc}
				visual={`${path}/img/sub/gallery/visual.jpg`}></Layout>
			<div id='gallery'>
				<h3>Our Gallery</h3>
				<div className='frame' ref={frame}>
					{gallery.map((item, idx) => {
						return (
							<article key={idx}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
											alt={item.title}
											onClick={() => openPop(idx)}
										/>
									</div>
									<h4>{item.title}</h4>
									<div className='profile'>
										<span>{item.desc}</span>
									</div>
								</div>
							</article>
						);
					})}
				</div>
				<button onClick={increaseList} ref={btn}>
					View more
				</button>
			</div>
			<Popup ref={pop}>
				{gallery.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${gallery[Index].server}/${gallery[Index].id}_${gallery[Index].secret}_b.jpg`}
						alt={gallery[Index].title}
					/>
				)}
			</Popup>
		</>
	);
}

export default Gallery;
