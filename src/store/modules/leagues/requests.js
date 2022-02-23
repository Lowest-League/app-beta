import { LOAD_LEAGUES } from '@api';
import * as leaguesActions from './actions';

export const getLeaguesRequest = () => {
	return function (dispatch) {
		dispatch(leaguesActions.loadLeagues());
		LOAD_LEAGUES()
			.then((res) => {
				const response = res.data;
				dispatch(leaguesActions.loadLeaguesSuccess(response.data));
				console.log(response.data);
			})
			.catch(() => {
				dispatch(leaguesActions.loadLeaguesFailure());
			});
	};
};
