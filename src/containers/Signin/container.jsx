// Signin template
import React, { useState } from 'react';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography, InputText, Button } from '@components';

const Signin = () => {
	const containerId = 'signin';
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const usernameField = {
		value: username,
		onChange: (e) => setUsername(e.target.value),
	};

	const passwordField = {
		value: password,
		onChange: (e) => setPassword(e.target.value),
	};

	function login(e) {
		e.preventDefault();
		const body = { username, password };
		// sign in request
		console.log(body);
	}

	return (
		<div className="Signin">
			<div className="Signin__header">
				<Typography id={`${containerId}-header`} content="Login into the" type="subtitle" />
				<div className="Signin__title">
					<Typography id={`${containerId}-title`} content="Lowest League" type="subtitle" bold />
				</div>
			</div>
			<form className="Signin__form" onSubmit={login} id="login-form">
				<InputText id={`${containerId}-username`} label="Username" field={usernameField} />
				<InputText id={`${containerId}-password`} label="Password" field={passwordField} />
			</form>
			<div className="Signin__button">
				<Button id={containerId} submit="login-form" label="Enter" />
			</div>
		</div>
	);
};

export default Signin;
