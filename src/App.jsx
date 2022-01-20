import React from 'react';
import { Routes, Route } from 'react-router-dom';

// STYLE
import './app.scss';

// COMPONENTS
import { Login } from '@pages';
import { Modal } from '@components';

const App = () => {
	return (
		<>
			<Modal visible={true} title="Test" />
			<Routes>
				<Route path="/" element={<Login src="/" />} />
				<Route path="*" element={<Login src="/" />} />
			</Routes>
		</>
	);
};

export default App;
