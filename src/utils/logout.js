import { signoff } from '@store/modules/auth/actions';

function logout(dispatch) {
	window.sessionStorage.removeItem('lowestLeagueToken');
	dispatch(signoff());
	window.location.reload();
}

export default logout;
