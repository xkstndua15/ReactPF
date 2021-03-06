import Layout from '../common/Layout';
import { useState, useRef, useEffect } from 'react';

function Community() {
	const desc =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nulla eos quisquam mollitia voluptatibus quasi quaerat. Quasi a rerum inventore quo laudantium aspernatur nisi, assumenda dolorum nulla unde facilis reprehenderit.';
	const path = process.env.PUBLIC_URL;

	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);

	const getLocalData = () => {
		const dummyPosts = [
			{
				title: 'Hello5',
				content: 'Here comes description  in detail.',
				date: 'Tue June 23 2022 03:09:32',
			},
			{
				title: 'Hello4',
				content: 'Here comes description  in detail.',
				date: 'Tue Jul 19 2021 12:09:59',
			},
			{
				title: 'Hello3',
				content: 'Here comes description  in detail.',
				date: 'Sat Sep 19 2022 10:09:47',
			},
			{
				title: 'Hello2',
				content: 'Here comes description  in detail.',
				date: 'Mon Jul 20 2022 08:19:39',
			},
			{
				title: 'Hello1',
				content: 'Here comes description  in detail.',
				date: 'Sun Jul 19 2022 16:09:39',
			},
		];
		const data = localStorage.getItem('post');

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	const resetInput = (index) => {
		input.current.value = '';
		textarea.current.value = '';

		if (inputEdit.current && textareaEdit.current) {
			inputEdit.current.value = Posts[index].title;
			textareaEdit.current.value = Posts[index].content;
		}
	};
	const postInput = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetInput();
			return alert('제목과 본문을 입력해 주세요');
		}

		setPosts([
			{
				title: input.current.value,
				content: textarea.current.value,
				date: new Date().toString().substring(0, 24),
			},
			...Posts,
		]);

		resetInput();
	};

	const enableEditPost = (index) => {
		if (!Allowed) return;

		setAllowed(false);

		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableEditPost = true;

				return post;
			})
		);
	};
	const cancleEdit = (index) => {
		resetInput(index);
		setAllowed(true);

		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableEditPost = false;

				return post;
			})
		);
	};

	const editPost = (index) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			resetInput(index);
			return alert('제목과 본문을 입력해 주세요');
		}

		setAllowed(true);

		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) {
					post.enableEditPost = false;
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
				}

				return post;
			})
		);
	};
	const deletePost = (index) => {
		setPosts(Posts.filter((_, idx) => idx !== index));
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, []);

	return (
		<>
			<Layout
				name='Community'
				desc={desc}
				visual={`${path}/img/sub/community/visual.jpg`}></Layout>
			<div id='community'>
				<h3>Our Community</h3>
				<div className='inputBox'>
					<input type='text' placeholder='제목을 입력하세요' ref={input} />
					<br />
					<textarea
						cols='30'
						rows='5'
						placeholder='본문을 입력하세요'
						ref={textarea}></textarea>
					<br />

					<div className='btns'>
						<button onClick={() => resetInput()}>CANCEL</button>
						<button onClick={() => postInput()}>WRITE</button>
					</div>
				</div>
				<div className='showBox'>
					{Posts.map((post, idx) => {
						return (
							<article key={idx}>
								{post.enableEditPost ? (
									<>
										<div className='editTxt'>
											<input
												type='text'
												defaultValue={post.title}
												ref={inputEdit}
											/>
											<br />
											<textarea
												cols='30'
												rows='4'
												defaultValue={post.content}
												ref={textareaEdit}></textarea>
											<br />
										</div>
										<div className='btns'>
											<button onClick={() => cancleEdit(idx)}>CANCEL</button>
											<button onClick={() => editPost(idx)}>WRITE</button>
										</div>
									</>
								) : (
									<>
										<div className='txt'>
											<span>{post.date}</span>
											<h4>{post.title}</h4>
											<p>{post.content}</p>
										</div>
										<div className='btns'>
											<button onClick={() => enableEditPost(idx)}>EDIT</button>
											<button onClick={() => deletePost(idx)}>DELETE</button>
										</div>
									</>
								)}
							</article>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Community;
