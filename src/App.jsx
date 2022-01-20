import React from 'react';
import { Routes, Route } from 'react-router-dom';

// STYLE
import './app.scss';

// COMPONENTS
import { Modals } from '@containers';
import { Login } from '@pages';

const App = () => {
	return (
		<>
			<Modals />
			<Routes>
				<Route path="/" element={<Login src="/" />} />
				<Route path="*" element={<Login src="/" />} />
			</Routes>
		</>
	);
};

export default App;
