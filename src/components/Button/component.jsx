import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';

const Button = (props) => {
	const { id, label, secondary, disabled, onClick, helper, submit } = props;

	const componentId = `button-${id}`;

	const renderHelper = () => {
		return helper ? (
			<Typography id={`${componentId}-helper`} content={helper} size="sm" italic />
		) : null;
	};

	return (
		<>
			<button
				className={classnames('Button', {
					'Button--secondary': secondary && !disabled,
					'Button--disabled': disabled,
				})}
				id={componentId}
				data-testid={componentId}
				onClick={disabled ? null : onClick}
				type={submit ? 'submit' : 'button'}
				form={submit || null}
			>
				<Typography id={componentId} content={label} bold />
			</button>
			{renderHelper()}
		</>
	);
};

Button.prototypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	secondary: PropTypes.bool,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	helper: PropTypes.string,
	submit: PropTypes.string,
};

export default Button;
