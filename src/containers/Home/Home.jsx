import React from 'react';

// STYLE
import './Home.scss';

// COMPONENTS
import { ReactLogo } from '@icons';
import { PageTitle } from '@components';

export const Home = () => {
	return (
		<div className="Home">
			<PageTitle subtitle="by cl4pper" light>
				React Boilerplate
			</PageTitle>
			<ReactLogo className="Home__logo" />
		</div>
	);
};
