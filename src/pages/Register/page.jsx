import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';
import { Signin } from '@containers';
import { GithubLogo } from '@icons';

const Register = (props) => {
	const { src } = props;
	const iconSizes = '24px';

	return (
		<section className="Register">
			<div className="Register__top" />
			<div className="Register__form">{/* <Signin /> */}</div>
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
};

Register.prototypes = {
	src: PropTypes.string,
};

export default Register;
