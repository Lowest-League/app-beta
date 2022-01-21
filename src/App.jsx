import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

// STYLE
import './app.scss';

// COMPONENTS
import { Modals } from '@containers';
import { Modal, Button, Typography } from '@components';
import { Login, Register } from '@pages';

const App = () => {
	const navigate = useNavigate();

	// redirect methods
	function redirectToLogin() {
		navigate('/');
	}

	return (
		<>
			<Modals />
			<Routes>
				<Route path="/" element={<Login src="/" />} />
				<Route
					path="/register"
					element={<Register src="/register" cancel={() => redirectToLogin()} />}
				/>

				<Route path="*" element={<Login src="/" />} />
			</Routes>
		</>
	);
};

export default App;
