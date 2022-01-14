// Login template
import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';
import { Signin } from '@containers';
import { GithubLogo } from '@icons';

const Login = (props) => {
	const { src } = props;
	const iconSizes = '24px';

	return (
		<section className="Login">
			<div className="Login__top" />
			<div className="Login__form">
				<Signin />
			</div>
			<div className="Login__mirror" />
			<a
				href="https://github.com/cl4pper/lowest-league-beta"
				target="_blank"
				rel="noopener noreferrer"
				className="Login__github"
			>
				<GithubLogo width={iconSizes} height={iconSizes} />
				<Typography id="login" content="Follow us at GitHub" type="subtext" />
			</a>
		</section>
	);
};

Login.prototypes = {
	src: PropTypes.string,
};

export default Login;
