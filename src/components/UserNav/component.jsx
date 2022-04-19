// UserNav template
import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';

const UserNav = (props) => {
	const { user, logout } = props;
	const { username, email } = user;

	const componentId = 'usernav';

	return (
		<div className="UserNav" id={componentId} data-testid={componentId}>
			<div className="UserNav__info">
				<Typography id={`${componentId}-email`} content={email} />
				<div className="UserNav__logout" onClick={logout} data-testid={`${componentId}-logout`}>
					<Typography id={`${componentId}-logout-label`} content="Logout" size="sm" italic />
				</div>
			</div>
			<div className="UserNav__photo" data-testid={`${componentId}-photo`}>
				<div className="UserNav__img">
					<Typography
						id={`${componentId}-user-initials`}
						content={username.slice(0, 2)}
						size="lg"
					/>
				</div>
			</div>
		</div>
	);
};

UserNav.prototypes = {
	username: PropTypes.shape({
		id: PropTypes.string,
		username: PropTypes.string,
		leagues: PropTypes.arrayOf(PropTypes.string),
	}),
	logout: PropTypes.func,
};

export default UserNav;
