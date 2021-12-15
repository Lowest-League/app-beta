import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// STYLE
import './MainLink.scss';

export const MainLink = (props) => {
	const { id, href, icon, light, reverse, children } = props;
	return (
		<a
			id={id}
			data-testid={`${id}-testid`}
			href={href}
			target="_blank"
			className={classNames('MainLink', {
				'MainLink--light': light,
			})}
		>
			{icon && !reverse && <span className="MainLink__icon">{icon}</span>}
			<span className="MainLink__label">{children}</span>
			{icon && reverse && <span className="MainLink__icon MainLink__icon--reverse">{icon}</span>}
		</a>
	);
};

MainLink.propTypes = {
	id: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	light: PropTypes.bool,
	reverse: PropTypes.bool,
	icon: PropTypes.element,
};
