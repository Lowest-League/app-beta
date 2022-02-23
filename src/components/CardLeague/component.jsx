import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';

const CardLeague = (props) => {
	const { id, name, players, onClick } = props;

	const componentId = `cardLeague-${id}`;

	return (
		<div className="CardLeague" id={componentId} data-testid={componentId} onClick={onClick}>
			<div className="CardLeague__content">
				<div className="CardLeague__left">
					<div className="CardLeague__name">
						<Typography id={`${componentId}-name`} content={name} bold />
					</div>
				</div>
				<div className="CardLeague__right">
					<Typography
						id={`${componentId}-players`}
						content={players ? String(players) : '0'}
						type="subtitle"
					/>
					<span className="CardLeague__players">
						<Typography id={`${componentId}-players-label`} content="players" type="subtext" />
					</span>
				</div>
			</div>
		</div>
	);
};

CardLeague.prototypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string,
	players: PropTypes.number,
	onClick: PropTypes.func,
};

export default CardLeague;
