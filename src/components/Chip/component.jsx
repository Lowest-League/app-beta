// Chip template
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';

const Chip = (props) => {
	const { id, label, active, small, onClick } = props;

	const componentId = `chip-${id}`;

	return (
		<div
			className={classnames('Chip', { 'Chip--active': active })}
			onClick={onClick ? onClick : null}
			id={componentId}
			data-testid={componentId}
		>
			<div
				className={classnames('Chip__content', { 'Chip__content--active': active })}
				data-testid={`${componentId}-content`}
			>
				<Typography id={componentId} content={label} type={small ? 'subtext' : 'text'} />
			</div>
		</div>
	);
};

Chip.prototypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	active: PropTypes.bool,
	small: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Chip;
