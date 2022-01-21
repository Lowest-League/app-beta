import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// STYLE
import './style.scss';

// STORE
import { signupRequest } from '@store/modules/auth/requests';
import { handleError } from '@store/modules/auth/actions';

// COMPONENTS
import { Typography, InputText, Button, Loader } from '@components';

const Signup = (props) => {
	const { cancel } = props;
	const dispatch = useDispatch();
	const authStore = useSelector((store) => store.auth);
	const loading = authStore.loading;
	const error = authStore.error;
	const message = authStore.message;
	const containerId = 'signup';
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [leagueKey, setLeagueKey] = useState('');
	const [passwordCheck, setPasswordCheck] = useState('');
	const [password, setPassword] = useState('');
	const errorStatus = {
		value: error,
		message,
	};
	const errorCheck = {
		value: password.length > 1 && passwordCheck.length > 1 && password !== passwordCheck,
		message: 'Passwords are different.',
	};

	function handleUsername(value) {
		dispatch(handleError(false));
		setUsername(value);
	}

	function handleEmail(value) {
		dispatch(handleError(false));
		setEmail(value);
	}

	function handleLeagueKey(value) {
		dispatch(handleError(false));
		setLeagueKey(value);
	}

	function handlePassword(value) {
		dispatch(handleError(false));
		setPassword(value);
	}

	function handlePasswordCheck(value) {
		setPasswordCheck(value);
	}

	const usernameField = {
		value: username,
		onChange: (e) => handleUsername(e.target.value),
	};

	const emailField = {
		value: email,
		onChange: (e) => handleEmail(e.target.value),
	};

	const leagueKeyField = {
		value: leagueKey,
		onChange: (e) => handleLeagueKey(e.target.value),
	};

	const passwordField = {
		value: password,
		onChange: (e) => handlePassword(e.target.value),
	};

	const passwordCheckField = {
		value: passwordCheck,
		onChange: (e) => handlePasswordCheck(e.target.value),
	};

	function register(e) {
		e.preventDefault();
		const body = { username, email, leagueKey, password };
		// sign up request
		dispatch(signupRequest(body));
	}

	const loader = <Loader />;

	const form = (
		<div className="Signup">
			<div className="Signup__header">
				<Typography id={`${containerId}-header`} content="Register your account." type="subtitle" />
			</div>
			<form className="Signup__form" onSubmit={register} id="login-form">
				<div className="Signup__input">
					<InputText
						id={`${containerId}-username`}
						label="Username"
						field={usernameField}
						error={errorStatus}
					/>
				</div>
				<div className="Signup__input">
					<InputText
						id={`${containerId}-email`}
						label="Email"
						field={emailField}
						error={errorStatus}
					/>
				</div>
				<div className="Signup__input">
					<InputText
						id={`${containerId}-leagueKey`}
						label="League key"
						field={leagueKeyField}
						error={errorStatus}
					/>
				</div>
				<div className="Signup__input">
					<InputText
						id={`${containerId}-passwordCheck`}
						label="Password"
						field={passwordCheckField}
						error={errorCheck}
						type="password"
					/>
				</div>
				<div className="Signup__input">
					<InputText
						id={`${containerId}-password`}
						label="Retype password"
						field={passwordField}
						error={errorStatus}
						type="password"
					/>
				</div>
			</form>
			<div className="Signup__buttons">
				<Button id={`${containerId}-confirm`} submit="login-form" label="Confirm" />
				<Button id={`${containerId}-cancel`} label="Cancel" secondary onClick={cancel} />
			</div>
		</div>
	);

	return loading ? loader : form;
};

export default Signup;
