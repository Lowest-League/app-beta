import React from 'react';
import { Routes, Route } from 'react-router-dom';

// STYLE
import './app.scss';

// COMPONENTS
import { Login } from '@pages';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Login src="/" />} />
			<Route path="*" element={<Login src="/" />} />
		</Routes>
	);
};

export default App;
