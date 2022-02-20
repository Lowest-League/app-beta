import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';
import { Signup } from '@containers';
import { GithubLogo } from '@icons';

const Register = (props) => {
	const { logged, cancel } = props;
	const iconSizes = '24px';

	const page = (
		<section className="Register">
			<div className="Register__top" />
			<div className="Register__form">
				<Signup cancel={cancel} />
			</div>
			<div className="Register__mirror" />
			<a
				href="https://github.com/cl4pper/lowest-league-beta"
				target="_blank"
				rel="noopener noreferrer"
				className="Register__github"
			>
				<GithubLogo width={iconSizes} height={iconSizes} />
				<Typography id="login" content="Follow us at GitHub" type="subtext" />
			</a>
		</section>
	);

	return logged ? null : page;
};

Register.prototypes = {
	src: PropTypes.string,
};

export default Register;
