// InputText template
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';

const InputText = (props) => {
	const { id, label, disabled, field, helper, placeholder, error, type } = props;
	const componentId = `input-${id}`;

	return (
		<div className="InputText" id={componentId} data-testid={componentId}>
			{label && (
				<label
					className={classnames('InputText__label', {
						'InputText__label--disabled': disabled,
					})}
					data-testid={`${componentId}-label`}
					htmlFor={`${componentId}-field`}
				>
					<Typography id={`${componentId}-label`} size="sm" content={label} />
				</label>
			)}
			<input
				className={classnames('InputText__field', {
					'InputText__field--error': error.value && !disabled,
					'InputText__field--disabled': disabled,
				})}
				id={`${componentId}-field`}
				data-testid={`${componentId}-field`}
				disabled={disabled}
				onChange={field.onChange}
				value={field.value}
				placeholder={placeholder}
				type={type}
			/>
			{helper && (
				<span
					className={classnames('InputText__helper', {
						'InputText__helper--error': error.value && !disabled,
					})}
					data-testid={`${componentId}-helper`}
				>
					<Typography id={componentId} content={helper} italic size="sm" />
				</span>
			)}
			{error.value && error.message && (
				<span
					className={classnames('InputText__helper', {
						'InputText__helper--error': error.value && !disabled,
					})}
					data-testid={`${componentId}-helper`}
				>
					<Typography id={componentId} content={error.message} italic size="sm" />
				</span>
			)}
		</div>
	);
};

InputText.prototypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	helper: PropTypes.string,
	error: {
		value: PropTypes.bool,
		message: PropTypes.string,
	},
	placeholder: PropTypes.string,
	type: PropTypes.oneOf(['password', 'text', 'number']),
	field: PropTypes.shape({
		value: PropTypes.string,
		onChange: PropTypes.func,
	}),
};

export default InputText;
