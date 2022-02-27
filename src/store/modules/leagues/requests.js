import { LOAD_LEAGUES } from '@api';
import * as leaguesActions from './actions';

export const getLeaguesRequest = () => {
	return function (dispatch) {
		dispatch(leaguesActions.loadLeagues());
		LOAD_LEAGUES()
			.then((res) => {
				const response = res.data;
				if (response.status === 204) return dispatch(leaguesActions.loadLeaguesSuccess([]));
				return dispatch(leaguesActions.loadLeaguesSuccess(response.data));
			})
			.catch(() => {
				dispatch(leaguesActions.loadLeaguesFailure());
			});
	};
};
