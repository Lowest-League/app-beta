import * as Types from './types';

const INITIAL_STATE = {
	breadcrumb: null,
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.SET_BREADCRUMB:
			return {
				...state,
				breadcrumb: action.payload,
			};

		default:
			return state;
	}
}

export { reducer };
