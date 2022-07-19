import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Members() {
	const desc =
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolorem non illum vero eos? Rerum amet saepe aut mollitia et accusamus, aperiam odio numquam nesciunt. Tenetur eveniet eum consequuntur officia.';
	const path = process.env.PUBLIC_URL;
	const history = useHistory();
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

	const check = (value) => {
		const errs = [];
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+]/;

		if (value.userId.length < 5) {
			errs.userId = '아이디를 5글자 이상 입력하세요';
		}

		if (value.email.length < 8 || !/@/.test(Val.email)) {
			errs.email = '이메일은 8글자 이상 @를 포함하세요';
		}

		if (
			value.pwd < 5 ||
			!eng.test(value.pwd) ||
			!num.test(value.pwd) ||
			!spc.test(value.pwd)
		) {
			errs.pwd =
				'비밀번호는 5글자 이상 영문, 숫자, 특수문자를 모두 포함하여 입력하세요';
		}
		if (value.pwd !== value.pwdRe || value.pwdRe < 5) {
			errs.pwdRe = '두개의 비밀번호를 동일하게 입력하세요';
		}

		if (!value.gender) {
			errs.gender = '성별을 입력하세요';
		}

		if (!value.interests) {
			errs.interests = '관심사를 하나 이상 선택하세요';
		}

		if (value.comments.length < 20) {
			errs.comments = '남기는 말을 20글자 이상 작성하세요';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setVal({ ...Val, [name]: value });
	};
	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;

		setVal({ ...Val, [name]: isCheck });
	};
	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});

		setVal({ ...Val, [name]: isCheck });
	};
	const handleReset = () => {
		setSubmit(false);
		setErr({});
		setVal(initVal);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('회원가입이 완료되었습니다. 메인페이지로 이동합니다.');
			history.push('/');
		}
	}, [Err]);

	return (
		<>
			<Layout
				name='Members'
				desc={desc}
				visual={`${path}/img/sub/members/visual.jpg`}></Layout>

			<div id='members'>
				<h3>Our Membership</h3>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend className='hidden'>회원가입 폼 양식</legend>
						<table border='1'>
							<caption className='hidden'>회원가입 정보입력</caption>
							<tbody>
								{/* ID */}
								<tr>
									<th scope='col'>
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
										<span className='err'>{Err.userId}</span>
									</td>
								</tr>
								{/* PASSWORD */}
								<tr>
									<th scope='col'>
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
										<span className='err'>{Err.pwd}</span>
									</td>
								</tr>
								{/* PASSWORD RE */}
								<tr>
									<th scope='col'>
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
										<span className='err'>{Err.pwdRe}</span>
									</td>
								</tr>
								{/* EMAIL */}
								<tr>
									<th scope='col'>
										<label htmlFor='email'>EMAIL</label>
									</th>
									<td>
										<input
											type='text'
											placeholder='이메일을 입력하세요'
											name='email'
											id='email'
											onChange={handleChange}
										/>
										<span className='err'>{Err.email}</span>
									</td>
								</tr>
								{/* gender */}
								<tr>
									<th scope='col'>GENDER</th>
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
										<span className='err'>{Err.gender}</span>
									</td>
								</tr>
								{/* interest */}
								<tr>
									<th scope='col'>INTERESTS</th>
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
										<span className='err'>{Err.interests}</span>
									</td>
								</tr>
								{/* comments */}
								<tr>
									<th scope='col'>
										<label htmlFor='comments'>COMMENTS</label>
									</th>
									<td>
										<textarea
											name='comments'
											id='comments'
											cols='30'
											rows='5'
											onChange={handleChange}></textarea>
										<span className='err'>{Err.comments}</span>
									</td>
								</tr>
								{/* btn */}
								<tr>
									<th colSpan='4'>
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
