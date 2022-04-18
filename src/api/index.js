import axios from 'axios';
import Routes from './routes';

// console.log - replace TEST_URL by the orrect url

export const SIGNIN = (body = null) => {
	const options = {
		url: `${Routes.BASE_URL}/${Routes.SIGNIN}`,
		body,
	};

	return axios.post(options.url, options.body);
};

export const SIGNUP = (body = null) => {
	const options = {
		url: `${Routes.BASE_URL}/${Routes.SIGNUP}`,
		body,
	};

	return axios.post(options.url, options.body);
};

export const LOAD_USER = () => {
	const token = window.sessionStorage.getItem('lowestLeagueToken');

	const options = {
		url: `${Routes.BASE_URL}/${Routes.USERS}/load`,
	};

	const headers = {
		authorization: `Bearer ${token}`,
	};

	return axios.get(options.url, { headers });
};

export const LOAD_LEAGUES = () => {
	const token = window.sessionStorage.getItem('lowestLeagueToken');
	const options = {
		url: `${Routes.BASE_URL}/${Routes.USERS}/leagues`,
	};

	const headers = {
		authorization: `Bearer ${token}`,
	};

	return axios.get(options.url, { headers });
};
