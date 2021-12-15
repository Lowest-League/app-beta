import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// STYLE
import './ContentSection.scss';

export const ContentSection = (props) => {
	const { children, light, left, right, spaced, height, vertical } = props;
	return (
		<section
			className={classNames('ContentSection', {
				'ContentSection--light': light,
				'ContentSection--center': !left && !right && !spaced,
				'ContentSection--right': right,
				'ContentSection--left': left,
				'ContentSection--spaced': spaced,
				'ContentSection--vertical': vertical && !left && !right && !spaced,
			})}
			style={{
				height: `${height}`,
			}}
		>
			{children}
		</section>
	);
};

ContentSection.propTypes = {
	children: PropTypes.element.isRequired,
	light: PropTypes.bool,
	left: PropTypes.bool,
	right: PropTypes.bool,
	spaced: PropTypes.bool,
	height: PropTypes.string,
	vertical: PropTypes.bool,
};
