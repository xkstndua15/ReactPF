import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department() {
	const path = process.env.PUBLIC_URL;
	const [Members, setMembers] = useState([]);
	const desc =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure nostrum quisquam minima dolores animi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure nostrum quisquam minima dolores animi?';
	useEffect(() => {
		axios.get(`${path}/DB/members.json`).then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	return (
		<>
			<Layout
				name={'Department'}
				desc={desc}
				visual={`${path}/img/sub/department/visual.png`}>
				<div className='main'>
					<ul>
						<li>
							<h2>1. Strategy</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Recusandae, consequuntur?
							</p>
						</li>
						<li>
							<h2>2. Synchronize</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
								vitae!
							</p>
						</li>
						<li>
							<h2>3. Control</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
								molestias!
							</p>
						</li>
					</ul>
				</div>
			</Layout>
			<div id='department'>
				<div className='wrap'>
					<h3>Our Team</h3>
					{Members.map((member, idx) => {
						return (
							<article key={idx}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`${path}/img/sub/department/${member.pic}`}
											alt={`${path}/img/sub/department/${member.name}`}
										/>
									</div>
									<h4>{member.name}</h4>
									<p>{member.position}</p>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Department;
