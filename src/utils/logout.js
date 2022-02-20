import { signoff } from '@store/modules/auth/actions';

function logout(dispatch) {
	window.sessionStorage.removeItem('lowestLeagueToken');
	dispatch(signoff());
}

export default logout;
