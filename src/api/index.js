import axios from 'axios';
import Routes from './routes';

export const SIGNIN = (body = null) => {
	const options = {
		url: `${Routes.TEST_URL}/${Routes.SIGNIN}`,
		body,
	};

	return axios.post(options.url, options.body);
};

export const SIGNUP = (body = null) => {
	const options = {
		url: `${Routes.TEST_URL}/${Routes.SIGNUP}`,
		body,
	};

	return axios.post(options.url, options.body);
};

export const LOAD_USER = () => {
	const token = window.sessionStorage.getItem('lowestLeagueToken');

	const options = {
		url: `${Routes.TEST_URL}/${Routes.GET_USER}`,
	};

	const headers = {
		authorization: `Bearer ${token}`,
	};

	return axios.get(options.url, { headers });
};
