import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

// common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
// main
import Main from './components/main/Main';
// sub
import Department from './components/sub/Department';
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import Community from './components/sub/Community';
import Location from './components/sub/Location';
import Members from './components/sub/Members';

import './scss/style.scss';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.YOUTUBE.start, Opt: { index: 0 } });
		dispatch({ type: types.MEMBERS.start });
		dispatch({
			type: types.GALLERY.start,
			Opt: { type: 'user', user: '195955518@N03', num: 10 },
		});
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/department' component={Department}></Route>
			<Route path='/youtube' component={Youtube}></Route>
			<Route path='/gallery' component={Gallery}></Route>
			<Route path='/community' component={Community}></Route>
			<Route path='/location' component={Location}></Route>
			<Route path='/members' component={Members}></Route>

			<Footer />
		</>
	);
}

export default App;
