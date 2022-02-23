import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Routes, Route, Outlet } from 'react-router-dom';
import { loadRequest } from '@store/modules/auth/requests';

// STYLE
import './app.scss';

// COMPONENTS
import { Modals, Topbar } from '@containers';
import { Login, Register, Home } from '@pages';

const App = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authStore = useSelector((store) => store.auth);
	const sessionToken = window.sessionStorage.getItem('lowestLeagueToken');
	const token = authStore.token;
	const logged = authStore.user;

	// redirect methods
	function redirectToLogin() {
		navigate('/');
	}

	const layout = (
		<>
			<Modals />
			{logged && <Topbar />}
			<Outlet />
		</>
	);

	const render = () => (
		<Routes>
			<Route path="/" element={layout}>
				<Route index element={<Login logged={logged} />} />
				<Route
					path="register"
					element={<Register logged={logged} cancel={() => redirectToLogin()} />}
				/>
				<Route path="home" element={<Home logged={logged} />} />
				<Route path="match" element={<h1>Match</h1>} />
			</Route>

			<Route path="*" element={<Login logged={logged} />} />
		</Routes>
	);

	useEffect(() => {
		if (sessionToken && !logged) dispatch(loadRequest());
	}, [token]);

	return render();
};

export default App;
