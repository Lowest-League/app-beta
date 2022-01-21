import { SIGNIN, SIGNUP } from '@api';
import { handleModal } from '@store/modules/modals/actions';
import * as authActions from './actions';

export const signinRequest = (body) => {
	return function (dispatch) {
		dispatch(authActions.signin());
		SIGNIN(body)
			.then((res) => {
				const response = res.data;
				window.localStorage.setItem('lowestLeagueToken', response.data);
				dispatch(handleModal('THANKS'));
				dispatch(authActions.signinSuccess());
			})
			.catch((err) => {
				const data = err.response.data;
				dispatch(authActions.signinFailure(data.data));
			});
	};
};

export const signupRequest = (body) => {
	return function (dispatch) {
		dispatch(authActions.signin());
		SIGNUP(body)
			.then((res) => {
				dispatch(handleModal('CONFIRM_REGISTRATION'));
				dispatch(authActions.signinSuccess());
			})
			.catch((err) => {
				const data = err.response.data;
				dispatch(authActions.signinFailure(data.data));
			});
	};
};
