import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import { League } from './cards';

const Card = (props) => {
	const { id, type, data } = props;

	const componentId = `card-${type}-${id}`;

	const render = () => {
		return {
			league: <League league={data} />,
			match: <p>Match</p>,
			default: <p>Default</p>,
		}[type || 'default'];
	};

	return (
		<div id={componentId} data-testid={componentId}>
			{render()}
		</div>
	);
};

Card.prototypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['league', 'match']),
	data: PropTypes.object,
};

export default Card;
