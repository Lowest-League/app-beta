import * as Types from './types';

export const signin = () => {
	return {
		type: Types.SIGNIN,
	};
};

export const signinSuccess = () => {
	return {
		type: Types.SIGNIN_SUCCESS,
	};
};

export const signinFailure = (message) => {
	return {
		type: Types.SIGNIN_FAILURE,
		payload: message,
	};
};

export const handleError = (value) => {
	return {
		type: Types.HANDLE_ERROR,
		payload: value,
	};
};
