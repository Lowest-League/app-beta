import axios from 'axios';
import Routes from './routes';

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
