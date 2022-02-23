import * as Types from './types';

const INITIAL_STATE = {
	loading: false,
	error: false,
	leagues: null,
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.LOAD_LEAGUES:
			return {
				...state,
				loading: true,
				error: false,
			};

		case Types.LOAD_LEAGUES_SUCCESS:
			return {
				...state,
				token: action.payload,
				loading: false,
				error: false,
			};

		case Types.LOAD_LEAGUES_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
				leagues: action.payload,
			};

		default:
			return state;
	}
}

export { reducer };
