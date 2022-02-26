import * as Types from './types';

export const signin = () => {
	return {
		type: Types.SIGNIN,
	};
};

export const signinSuccess = (token) => {
	return {
		type: Types.SIGNIN_SUCCESS,
		payload: token,
	};
};

export const signinFailure = (message) => {
	return {
		type: Types.SIGNIN_FAILURE,
		payload: message,
	};
};

export const signup = () => {
	return {
		type: Types.SIGNUP,
	};
};

export const signupSuccess = (token) => {
	return {
		type: Types.SIGNUP_SUCCESS,
		payload: token,
	};
};

export const signupFailure = (message) => {
	return {
		type: Types.SIGNUP_FAILURE,
		payload: message,
	};
};

export const loadUser = () => {
	return {
		type: Types.LOAD_USER,
	};
};

export const loadUserSuccess = (user) => {
	return {
		type: Types.LOAD_USER_SUCCESS,
		payload: user,
	};
};

export const loadUserFailure = () => {
	return {
		type: Types.LOAD_USER_FAILURE,
	};
};

export const signoff = () => {
	return {
		type: Types.SIGNOFF,
	};
};

export const handleError = (value) => {
	return {
		type: Types.HANDLE_ERROR,
		payload: value,
	};
};
