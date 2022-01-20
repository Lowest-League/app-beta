// InputText test
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import InputText from './component';

let wrapper;
const defaultProps = (helper = null, error = false) => {
	return {
		id: 'jest',
		label: 'Jest label',
		field: {
			onChange: (e) => console.log(e.target.value),
			value: 'Hello, jest',
		},
		helper: helper,
		error: {
			value: error,
			message: 'Error here.',
		},
	};
};

describe('InputText', () => {
	beforeAll(() => (wrapper = (props) => <InputText {...props} />));
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const componentId = 'input-jest';
		const { getByTestId, queryByTestId } = render(wrapper(defaultProps()));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(`${componentId}-label`).textContent).toBe('Jest label');
		expect(getByTestId(`${componentId}-field`)).toBeTruthy();
		expect(queryByTestId(`${componentId}-helper`)).toBeNull();
	});

	it('should render helper', () => {
		const componentId = 'input-jest';
		const { getByTestId } = render(wrapper(defaultProps('Jest helper.')));

		expect(getByTestId(`${componentId}-helper`).textContent).toBe('Jest helper.');
	});

	it('should apply error', () => {
		const componentId = 'input-jest';
		const { getByTestId } = render(wrapper(defaultProps(undefined, true)));

		expect(getByTestId(`${componentId}-field`).className).toContain('InputText__field--error');
		expect(getByTestId(`${componentId}-helper`).className).toContain('InputText__helper--error');
	});

	it('should be disabled', () => {
		const props = {
			...defaultProps(),
			disabled: true,
		};

		const componentId = 'input-jest';
		const { getByTestId } = render(wrapper(props));

		expect(getByTestId(`${componentId}-label`).className).toContain('InputText__label--disabled');
		expect(getByTestId(`${componentId}-field`).className).toContain('InputText__field--disabled');
	});
});
