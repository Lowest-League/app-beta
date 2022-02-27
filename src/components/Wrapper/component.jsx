import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';

const Wrapper = (props) => {
	const { id, title, header, content, height } = props;

	const componentId = `wrapper-${id}`;

	return (
		<div className="Wrapper" id={componentId} data-testid={componentId}>
			<div className="Wrapper__wrapper">
				<div className="Wrapper__title">
					<Typography id={`${componentId}-title`} content={title} size="lg" bold />
					{header}
				</div>
				<div
					className="Wrapper__content"
					id={`${componentId}-content`}
					style={{ maxHeight: `${height}px` }}
				>
					{content}
				</div>
			</div>
		</div>
	);
};

Wrapper.prototypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string,
	header: PropTypes.element,
	content: PropTypes.element,
	height: PropTypes.number,
};

export default Wrapper;
