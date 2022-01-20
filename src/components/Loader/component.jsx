// Loader template
import React from 'react';

// STYLE
import './style.scss';

// COMPONENTS
import { FootballLogo } from '@icons';

const Loader = (props) => {
	const { id } = props;
	const sizes = '64';

	const componentId = `loader-${id}`;

	return (
		<div className="Loader" id={componentId} data-testid={componentId}>
			<FootballLogo className="Loader__icon" width={sizes} height={sizes} />
		</div>
	);
};

export default Loader;
