import axios from 'axios';

export const fetchGallery = async (opt) => {
	const key = 'b74012b5c1b79c7c3bc8c8e61f3b23f0';
	const method_user = 'flickr.people.getPhotos';
	let url = '';

	if (opt.type === 'user') {
		url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${opt.num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
	}

	return await axios.get(url);
};

export const fetchMembers = async () => {
	const url = process.env.PUBLIC_URL + '/DB/members.json';
	return await axios.get(url);
};

export const fetchYoutube = async (opt) => {
	const key = 'AIzaSyDv6JIUkmdFO-F6Ha1KriiO4uw0Iot8bb4';
	const playlistInst = [
		{
			playlist: 'PLmAX7QJDEdu34IYyBw8oR6rXWVSPwH8sS',
			num: 4,
		},
		{ playlist: 'PLmAX7QJDEdu3KapeCk3bACIhBj0-X0a15', num: 4 },
		{ playlist: 'PLmAX7QJDEdu2mgWqVzotrDsnFFgP6Hskj', num: 5 },
		{ playlist: 'PLmAX7QJDEdu3F0cQ63STQsRxtmQDw0oxJ', num: 4 },
		{ playlist: 'PLmAX7QJDEdu0lxbVWKNA0FBg9pcf-v3dL', num: 5 },
	];
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${
		playlistInst[opt.index].playlist
	}&maxResults=${playlistInst[opt.index].num}`;
	return await axios.get(url);
};
