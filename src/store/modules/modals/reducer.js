import * as Types from './types';

const INITIAL_STATE = {
	active: null,
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.HANDLE_MODAL:
			return {
				...state,
				active: action.payload
			};

		case Types.CLOSE_MODAL:
			return {
				...state,
				active: null
			};

		default:
			return state;
	}
}

export { reducer };
