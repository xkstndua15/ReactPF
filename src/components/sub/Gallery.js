import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';

function Gallery() {
	const desc =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, facilis. Officiis nam distinctio libero delectus cum aperiam eius reiciendis quae provident, fuga esse illum! Provident sunt quam nam? Reprehenderit, ipsum?';
	const path = process.env.PUBLIC_URL;

	const frame = useRef(null);
	const btn = useRef(null);
	const pop = useRef(null);

	const [Num, setNum] = useState(10);
	const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0);

	const getFlickr = async () => {
		const key = 'b74012b5c1b79c7c3bc8c8e61f3b23f0';
		const method_user = 'flickr.people.getPhotos';
		const usr = '195955518@N03';

		let url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${Num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${usr}`;

		await axios.get(url).then((json) => {
			setItems(json.data.photos.photo);
		});
	};
	const increaseList = () => {
		if (Num >= 20) return;

		setNum(Num * 2);

		if (Num * 2 >= 20) {
			btn.current.classList.add('off');
			console.log(btn.current.classList);
		}
	};

	useEffect(() => {
		getFlickr();
	}, [Num]);

	return (
		<>
			<Layout
				name={'Gallery'}
				desc={desc}
				visual={`${path}/img/sub/gallery/visual.jpg`}></Layout>
			<div id='gallery'>
				<h3>Our Gallery</h3>
				<div className='frame' ref={frame}>
					{Items.map((item, idx) => {
						return (
							<article key={idx}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
											alt={item.title}
											onClick={() => {
												setIndex(idx);
												pop.current.open();
											}}
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
				{Items.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
						alt={Items[Index].title}
					/>
				)}
			</Popup>
		</>
	);
}

export default Gallery;
