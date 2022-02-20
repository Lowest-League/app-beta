import * as Types from './types';

const INITIAL_STATE = {
	loading: false,
	error: false,
	user: null,
	token: null,
	message: '',
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.SIGNIN:
			return {
				...state,
				loading: true,
				error: false,
			};

		case Types.SIGNIN_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
			};

		case Types.SIGNIN_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
				message: action.payload,
			};

		case Types.SIGNUP:
			return {
				...state,
				loading: true,
				error: false,
			};

		case Types.SIGNUP_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
			};

		case Types.SIGNUP_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
				message: action.payload,
			};

		case Types.LOAD_USER:
			return {
				...state,
				loading: true,
				error: false,
			};

		case Types.LOAD_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				token: window.sessionStorage.getItem('lowestLeagueToken'),
				loading: false,
				error: false,
			};

		case Types.LOAD_USER_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
			};

		case Types.SIGNOFF:
			return {
				...state,
				user: null,
				token: null,
			};

		case Types.HANDLE_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
}

export { reducer };
