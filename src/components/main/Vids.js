import { useSelector } from 'react-redux';

function Vids() {
	const vids = useSelector((store) => store.youtubeReducer.youtube);

	return (
		<section id='vids'>
			<div className='inner'>
				<h2>
					Upgrade Your
					<br />
					Product to
					<br />
					Amazing Thing.
				</h2>
				<div className='wrap'>
					<div className='textArea'>
						<p>
							Founded in 2015 by two-young brothers from Gotham City,
							<br />
							Jembruts Studio is very careful when crafed.
						</p>
						<button>Get Started</button>
					</div>
					<div className='vidsArea'>
						{vids.map((vid, idx) => {
							return (
								<article key={idx}>
									<img
										src={vid.snippet.thumbnails.high.url}
										alt={vid.snippet.title}
									/>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Vids;
