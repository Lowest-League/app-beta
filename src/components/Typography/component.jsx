import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// STYLE
import './style.scss';

const Typography = (props) => {
	const { id, content, size, bold, italic } = props;

	const componentId = `typography-${id}`;

	return (
		<p
			className={classnames('Typography', {
				'Typography--bold': bold,
				'Typography--italic': italic,
				'Typography--sm': size === 'sm',
				'Typography--lg': size === 'lg',
				'Typography--xl': size === 'xl',
			})}
			id={componentId}
			data-testid={componentId}
		>
			{content}
		</p>
	);
};

Typography.prototypes = {
	id: PropTypes.string.isRequired,
	content: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'default', 'lg', 'xl']),
	bold: PropTypes.bool,
	italic: PropTypes.bool,
};

export default Typography;
