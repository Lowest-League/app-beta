// UserNav template
import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';

const UserNav = (props) => {
	const { username, logout } = props;

	const componentId = 'usernav';

	return (
		<div className="UserNav" id={componentId} data-testid={componentId}>
			<div className="UserNav__info">
				<Typography id={`${componentId}-username`} content={username} />
				<div className="UserNav__logout" onClick={logout} data-testid={`${componentId}-logout`}>
					<Typography id={`${componentId}-logout-label`} content="Logout" type="subtext" italic />
				</div>
			</div>
			<div className="UserNav__photo" data-testid={`${componentId}-photo`}>
				<div className="UserNav__img" />
			</div>
		</div>
	);
};

UserNav.prototypes = {
	username: PropTypes.string,
	logout: PropTypes.func,
};

export default UserNav;
