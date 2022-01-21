// Signin template
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// STYLE
import './style.scss';

// STORE
import { signinRequest } from '@store/modules/auth/requests';
import { handleError } from '@store/modules/auth/actions';

// COMPONENTS
import { Typography, InputText, Button, Loader } from '@components';

const Signin = () => {
	const dispatch = useDispatch();
	const authStore = useSelector((store) => store.auth);
	const loading = authStore.loading;
	const error = authStore.error;
	const message = authStore.message;
	const containerId = 'signin';
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const errorStatus = {
		value: error,
		message,
	};

	function handleUsername(value) {
		dispatch(handleError(false));
		setUsername(value);
	}

	function handlePassword(value) {
		dispatch(handleError(false));
		setPassword(value);
	}

	const usernameField = {
		value: username,
		onChange: (e) => handleUsername(e.target.value),
	};

	const passwordField = {
		value: password,
		onChange: (e) => handlePassword(e.target.value),
	};

	function login(e) {
		e.preventDefault();
		const body = { username, password };
		// sign in request
		dispatch(signinRequest(body));
	}

	const loader = <Loader />;

	const form = (
		<div className="Signin">
			<div className="Signin__header">
				<Typography id={`${containerId}-header`} content="Login into the" type="subtitle" />
				<div className="Signin__title">
					<Typography id={`${containerId}-title`} content="Lowest League" type="subtitle" bold />
				</div>
			</div>
			<form className="Signin__form" onSubmit={login} id="login-form">
				<div className="Signin__input">
					<InputText
						id={`${containerId}-username`}
						label="Username"
						field={usernameField}
						error={errorStatus}
					/>
				</div>
				<div className="Signin__input">
					<InputText
						id={`${containerId}-password`}
						label="Password"
						field={passwordField}
						error={errorStatus}
						type="password"
					/>
				</div>
			</form>
			<div className="Signin__button">
				<Button id={containerId} submit="login-form" label="Enter" />
			</div>
			<div className="Signin__helper">
				<Typography id={`${containerId}-helper`} content="Wanna join us?" type="subtext" />
				<a href="register" className="Signin__link">
					<Typography id={`${containerId}-link`} content="Sign up" type="subtext" />
				</a>
			</div>
		</div>
	);

	return loading ? loader : form;
};

export default Signin;
