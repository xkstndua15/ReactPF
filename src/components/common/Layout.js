function Layout(props) {
	return (
		<section className={`content ${props.name}`}>
			<div className='inner'>
				<h1>{props.name}</h1>
				<p>{props.desc}</p>
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
