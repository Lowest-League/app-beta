// Topbar template
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '@utils';

// STYLE
import './style.scss';

// COMPONENTS
import { UserNav } from '@components';

const Topbar = () => {
	const dispatch = useDispatch();
	const authStore = useSelector((store) => store.auth);
	const user = authStore.user;
	const { username } = user;

	const container = (
		<div className="Topbar">
			<UserNav username={username} logout={() => logout(dispatch)} />
		</div>
	);

	return user ? container : null;
};

Topbar.prototypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	active: PropTypes.bool,
	small: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Topbar;
