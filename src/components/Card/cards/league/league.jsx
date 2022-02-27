import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';

const League = (props) => {
	const { league } = props;
	const { id, name, players } = league;

	return (
		<div className="League">
			<div className="League__content">
				<div className="League__left">
					<div className="League__name">
						<Typography id={`${id}-name`} content={name} />
					</div>
					<Typography id={`${id}-id`} content={`ID: ${id}`} size="sm" />
				</div>
				<div className="League__right">
					<Typography id={`${id}-players-value`} content={String(players)} size="lg" bold />
					<Typography id={`${id}-players-label`} content="players" size="sm" />
				</div>
			</div>
		</div>
	);
};

League.prototypes = {
	league: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		players: PropTypes.number,
	}),
};

export default League;
