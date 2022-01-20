import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth/reducer';
import { reducer as modalsReducer } from './modals/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	modals: modalsReducer,
});

export { rootReducer };
