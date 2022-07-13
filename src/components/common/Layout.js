function Layout(props) {
	return (
		<section className={`content ${props.name}`}>
			<div className='inner'>
				<h1>{props.name}</h1>
				<p>{props.desc}</p>
				<div className='visual'>
					<img src={props.visual} alt={props.name} />
				</div>
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
