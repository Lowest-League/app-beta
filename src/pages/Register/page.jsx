import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';
import { Signup } from '@containers';
import { GithubLogo } from '@icons';

const Register = (props) => {
	const { logged, cancel } = props;
	const navigate = useNavigate();
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
				<Typography id="login" content="Follow us at GitHub" size="sm" />
			</a>
		</section>
	);

	useEffect(() => {
		if (logged) navigate('home');
	}, [logged]);

	return logged ? null : page;
};

Register.prototypes = {
	logged: PropTypes.bool,
	cancel: PropTypes.func,
};

export default Register;
