import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Members() {
	const desc =
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolorem non illum vero eos? Rerum amet saepe aut mollitia et accusamus, aperiam odio numquam nesciunt. Tenetur eveniet eum consequuntur officia.';
	const path = process.env.PUBLIC_URL;
	const initVal = {
		userId: '',
		pwd: '',
		pwdRe: '',
		email: '',
		comments: '',
		edu: '',
		gender: null,
		interests: null,
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const check = (value) => {};

	const handleChange = (e) => {};
	const handleRadio = (e) => {};
	const handleCheck = (e) => {};
	const handleReset = () => {};
	const handleSubmit = (e) => {};

	useEffect(() => {
		console.log(Err);
	}, [Err]);

	return (
		<>
			<Layout
				name='Members'
				desc={desc}
				visual={`${path}/img/sub/members/visual.jpg`}></Layout>

			<div id='members'>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend className='hidden'>회원가입 폼 양식</legend>
						<table border='1'>
							<caption className='hidden'>회원가입 정보입력</caption>
							<tbody>
								{/* ID */}
								<tr>
									<th scope='row'>
										<label htmlFor='userId'>USER ID</label>
									</th>
									<td>
										<input
											type='text'
											placeholder='아이디를 입력하세요'
											name='userId'
											id='userId'
											onChange={handleChange}
										/>
									</td>
								</tr>
								{/* PASSWORD */}
								<tr>
									<th scope='row'>
										<label htmlFor='pwd'>PASSWORD</label>
									</th>
									<td>
										<input
											type='password'
											placeholder='비밀번호를 입력하세요'
											name='pwd'
											id='pwd'
											onChange={handleChange}
										/>
									</td>
								</tr>
								{/* PASSWORD RE */}
								<tr>
									<th scope='row'>
										<label htmlFor='pwdRe'>PASSWORD-RE</label>
									</th>
									<td>
										<input
											type='password'
											placeholder='비밀번호를 다시 입력하세요'
											name='pwdRe'
											id='pwdRe'
											onChange={handleChange}
										/>
									</td>
								</tr>
								{/* EMAIL */}
								<tr>
									<th scope='row'>
										<label htmlFor='email'>PASSWORD-RE</label>
									</th>
									<td>
										<input
											type='text'
											placeholder='이메일을 입력하세요'
											name='email'
											id='email'
											onChange={handleChange}
										/>
									</td>
								</tr>
								{/* gender */}
								<tr>
									<th scope='row'>GENDER</th>
									<td>
										<label htmlFor='male'>MALE</label>
										<input
											type='radio'
											id='male'
											name='gender'
											onChange={handleRadio}
										/>

										<label htmlFor='female'>FEMALE</label>
										<input
											type='radio'
											id='female'
											name='gender'
											onChange={handleRadio}
										/>
									</td>
								</tr>
								{/* interest */}
								<tr>
									<th scope='row'>INTERESTS</th>
									<td>
										<label htmlFor='sports'>SPORTS</label>
										<input
											type='checkbox'
											id='sports'
											name='interests'
											onChange={handleCheck}
										/>

										<label htmlFor='game'>GAME</label>
										<input
											type='checkbox'
											id='game'
											name='interests'
											onChange={handleCheck}
										/>

										<label htmlFor='reading'>READING</label>
										<input
											type='checkbox'
											id='reading'
											name='interests'
											onChange={handleCheck}
										/>

										<label htmlFor='music'>MUSIC</label>
										<input
											type='checkbox'
											id='music'
											name='interests'
											onChange={handleCheck}
										/>

										<label htmlFor='movie'>MOVIE</label>
										<input
											type='checkbox'
											id='movie'
											name='interests'
											onChange={handleCheck}
										/>
									</td>
								</tr>
								{/* comments */}
								<tr>
									<th scope='row'>
										<label htmlFor='comments'>COMMENTS</label>
									</th>
									<td>
										<textarea
											name='comments'
											id='comments'
											cols='30'
											rows='5'
											onChange={handleChange}></textarea>
									</td>
								</tr>
								{/* btn */}
								<tr>
									<th colSpan='2'>
										<input type='reset' value='CANCEL' onClick={handleReset} />
										<input
											type='submit'
											value='SUBMIT'
											onClick={() => setSubmit(true)}
										/>
									</th>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</form>
			</div>
		</>
	);
}

export default Members;
