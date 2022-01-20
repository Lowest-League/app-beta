import axios from 'axios';
import Routes from './routes';

export const SIGNIN = (body = null) => {
	const options = {
		url: `${Routes.BASE_URL}/${Routes.SIGNIN}`,
		body,
	};

	return axios.post(options.url, options.body);
};
