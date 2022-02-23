import { SIGNIN, SIGNUP, LOAD_USER } from '@api';
import { handleModal } from '@store/modules/modals/actions';
import * as authActions from './actions';

export const signinRequest = (body) => {
	return function (dispatch) {
		dispatch(authActions.signin());
		SIGNIN(body)
			.then((res) => {
				const response = res.data;
				window.sessionStorage.setItem('lowestLeagueToken', response.data);
				dispatch(authActions.signinSuccess(response.data));
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
			.then(() => {
				dispatch(handleModal('CONFIRM_REGISTRATION'));
				dispatch(authActions.signinSuccess());
			})
			.catch((err) => {
				const data = err.response.data;
				dispatch(authActions.signinFailure(data.data));
			});
	};
};

export const loadRequest = () => {
	return function (dispatch) {
		dispatch(authActions.loadUser());
		LOAD_USER()
			.then((res) => {
				const data = res.data;
				dispatch(authActions.loadUserSuccess(data.data));
			})
			.catch((err) => {
				dispatch(authActions.loadUserFailure());
				console.error(err);
			});
	};
};
