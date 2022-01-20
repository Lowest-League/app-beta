import * as Types from './types';

const INITIAL_STATE = {
	loading: false,
	error: false,
	token: '',
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
