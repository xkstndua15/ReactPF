import Layout from '../common/Layout';
import { useState, useRef, useEffect } from 'react';

function Location() {
	const { kakao } = window;
	const info = [
		{
			title: 'IKEA',
			latlng: new kakao.maps.LatLng(37.424488792423766, 126.8815334382932),
			location: 'Gwangmyeong, Gyeonggi, Korea',
			tel: '+82 010-9876-5432',
			email: 'xkdtndua15@gmail.com',
		},
		{
			title: 'LIVART',
			latlng: new kakao.maps.LatLng(37.480881270430565, 126.89626390314471),
			location: 'Guro, Seoul, Korea',
			tel: '+82 010-1234-5678',
			email: 'hyeonSeong@gmail.com',
		},
		{
			title: 'CASAMIA',
			latlng: new kakao.maps.LatLng(37.521622348832196, 126.85541849425633),
			location: 'Yangcheon, Seoul, Korea',
			tel: '+82 010-0000-0000',
			email: 'jangHyeonSeong@gmail.com',
		},
	];

	const path = process.env.PUBLIC_URL;
	const desc =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam voluptate pariatur id mollitia, maxime nam aperiam enim. Ipsa quae commodi ipsum soluta cumque corporis minus ad, a itaque animi?';

	const [Traffic, setTraffic] = useState(false);
	const trafficBtn = useRef(null);
	const [LocationIndex, setLocationIndex] = useState(0);
	const container = useRef(null);
	const [MapInst, setMapInst] = useState(null);
	const btns = useRef(null);

	useEffect(() => {
		container.current.innerHTML = '';

		const mapOption = {
			center: new kakao.maps.LatLng(37.424488792423766, 126.8815334382932),
			level: 3,
		};

		const mapInst = new kakao.maps.Map(container.current, mapOption);
		mapInst.setDraggable(false);
		mapInst.setZoomable(false);

		for (const btn of btns.current.children) {
			btn.classList.remove('on');
		}
		btns.current.children[LocationIndex].classList.add('on');

		for (let i = 0; i < info.length; i++) {
			const marker = new kakao.maps.Marker({
				position: info[i].latlng,
			});

			marker.setMap(mapInst);
		}

		setMapInst(mapInst);
	}, []);

	useEffect(() => {
		if (!MapInst) return;

		Traffic
			? MapInst.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: MapInst.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	useEffect(() => {
		if (!MapInst) return;

		MapInst.setCenter(info[LocationIndex].latlng);

		for (const btn of btns.current.children) {
			btn.classList.remove('on');
		}
		btns.current.children[LocationIndex].classList.add('on');
	}, [LocationIndex]);

	return (
		<>
			<Layout
				name='Location'
				desc={desc}
				visual={`${path}/img/sub/location/visual.jpg`}></Layout>

			<div id='location'>
				<div className='locationBox'>
					<h3>Come see us</h3>
					<ul ref={btns}>
						{info.map((info, idx) => {
							return (
								<li key={idx} onClick={() => setLocationIndex(idx)}>
									{info.title}
								</li>
							);
						})}
						<li
							ref={trafficBtn}
							onClick={() => {
								setTraffic(!Traffic);
								trafficBtn.current.classList.toggle('on');
							}}>
							{Traffic ? 'Traffice ON' : 'Traffic OFF'}
						</li>
					</ul>
					<div id='map' ref={container}></div>
				</div>
				<div className='locationCaption'>
					<ul className='openTime'>
						<li>
							<h4>Sunday - Thursday</h4>
							<p>9:00 - 21:00</p>
						</li>
						<li>
							<h4>Friday</h4>
							<p>9:00 - 12:00</p>
						</li>
						<li>
							<h4>Saturday</h4>
							<p>Close</p>
						</li>
					</ul>

					<ul className='info'>
						<li>
							<h4>Address</h4>
							<p>{info[LocationIndex].location}</p>
						</li>
						<li>
							<h4>Tel</h4>
							<p>{info[LocationIndex].tel}</p>
						</li>
						<li>
							<h4>Email</h4>
							<p>{info[LocationIndex].email}</p>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Location;
