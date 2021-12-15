import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// STYLE
import './PageTitle.scss';

export const PageTitle = (props) => {
	const { children, light, subtitle } = props;

	return (
		<div
			className={classNames('PageTitle', {
				'PageTitle--light': light,
			})}
		>
			<h1 className="PageTitle__title">{children}</h1>
			{subtitle ? <p className="PageTitle__subtitle">{subtitle}</p> : null}
		</div>
	);
};

PageTitle.propTypes = {
	children: PropTypes.string.isRequired,
	light: PropTypes.bool,
	subtitle: PropTypes.string,
};
