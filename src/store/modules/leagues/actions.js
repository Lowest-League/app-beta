import * as Types from './types';

export const loadLeagues = () => {
	return {
		type: Types.LOAD_LEAGUES,
	};
};

export const loadLeaguesSuccess = (leagues) => {
	return {
		type: Types.LOAD_LEAGUES_SUCCESS,
		payload: leagues,
	};
};

export const loadLeaguesFailure = () => {
	return {
		type: Types.LOAD_LEAGUES_FAILURE,
	};
};
