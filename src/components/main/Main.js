import Header from '../common/Header';
import Vids from './Vids';
import Pics from './Pics';
import News from './News';
import Info from './Info';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Vids />
			<Pics />
			<News />
			<Info />
		</main>
	);
}

export default Main;
