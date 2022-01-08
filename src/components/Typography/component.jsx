import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// STYLE
import './style.scss';

const Typography = (props) => {
	const { id, content, type, bold, italic } = props;

	const componentId = `typography-${id}`;

	const component = {
		title: (
			<h1
				className={classnames('Typography__title', {
					'Typography--bold': bold,
					'Typography--italic': italic,
				})}
				id={componentId}
				data-testid={componentId}
			>
				{content}
			</h1>
		),
		subtitle: (
			<h2
				className={classnames('Typography__subtitle', {
					'Typography--bold': bold,
					'Typography--italic': italic,
				})}
				id={componentId}
				data-testid={componentId}
			>
				{content}
			</h2>
		),
		text: (
			<p
				className={classnames('Typography', {
					'Typography--bold': bold,
					'Typography--italic': italic,
				})}
				id={componentId}
				data-testid={componentId}
			>
				{content}
			</p>
		),
		subtext: (
			<p
				className={classnames('Typography__subtext', {
					'Typography--bold': bold,
					'Typography--italic': italic,
				})}
				id={componentId}
				data-testid={componentId}
			>
				{content}
			</p>
		),
	}[type || 'text'];

	return component;
};

Typography.prototypes = {
	id: PropTypes.string.isRequired,
	content: PropTypes.string,
	type: PropTypes.oneOf(['title', 'subtitle', 'text', 'subtext']),
	bold: PropTypes.bool,
	italic: PropTypes.bool,
};

export default Typography;
