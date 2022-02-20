import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { loadRequest } from '@store/modules/auth/requests';

// STYLE
import './app.scss';

// COMPONENTS
import { Modals, Topbar } from '@containers';
import { Login, Register } from '@pages';

const App = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = window.sessionStorage.getItem('lowestLeagueToken');
	const authStore = useSelector((store) => store.auth);
	const logged = authStore.user;

	// redirect methods
	function redirectToLogin() {
		navigate('/');
	}

	useEffect(() => {
		if (token) dispatch(loadRequest());
	}, []);

	return (
		<>
			<Modals />
			{logged && <Topbar />}
			<Routes>
				<Route path="/" element={<Login logged={logged} />} />
				<Route
					path="/register"
					element={<Register logged={logged} cancel={() => redirectToLogin()} />}
				/>
				<Route path="/home" element={<h1>Home</h1>} />
				<Route path="/match" element={<h1>Match</h1>} />

				<Route path="*" element={<Login src="/" />} />
			</Routes>
		</>
	);
};

export default App;
