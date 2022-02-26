import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';
import { Signin } from '@containers';
import { GithubLogo } from '@icons';

const Login = (props) => {
	const { logged } = props;
	const navigate = useNavigate();
	const iconSizes = '24px';

	const page = (
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

	useEffect(() => {
		if (logged) navigate('home');
	}, [logged]);

	return logged ? null : page;
};

Login.prototypes = {
	logged: PropTypes.bool,
};

export default Login;
