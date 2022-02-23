import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth/reducer';
import { reducer as modalsReducer } from './modals/reducer';
import { reducer as leaguesReducer } from './leagues/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	modals: modalsReducer,
	leagues: leaguesReducer,
});

export { rootReducer };
