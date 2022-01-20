import { SIGNIN } from '../../../api';
import * as authActions from './actions';

export const signinRequest = (body) => {
	return function (dispatch) {
		dispatch(authActions.signin());
		SIGNIN(body)
			.then((res) => {
				const response = res.data;
				window.localStorage.setItem('lowestLeagueToken', response.data);
				window.alert('Thanks for testing.');
				dispatch(authActions.signinSuccess());
			})
			.catch((err) => {
				const data = err.response.data;
				dispatch(authActions.signinFailure(data.data));
			});
	};
};
