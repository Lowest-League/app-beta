// InputText test
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import InputText from './component';

let wrapper;
const defaultProps = {
	id: 'jest',
	label: 'Jest label',
	field: {
		onChange: (e) => console.log(e.target.value),
		value: 'Hello, jest',
	},
};

describe('InputText', () => {
	beforeAll(() => (wrapper = (props) => <InputText {...props} />));
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const componentId = `input-${defaultProps.id}`;
		const { getByTestId, queryByTestId } = render(wrapper(defaultProps));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(`${componentId}-label`).textContent).toBe('Jest label');
		expect(getByTestId(`${componentId}-field`)).toBeTruthy();
		expect(queryByTestId(`${componentId}-helper`)).toBeNull();
	});

	it('should render helper', () => {
		const props = {
			...defaultProps,
			error: true,
			helper: 'Jest helper',
		};

		const componentId = `input-${props.id}`;
		const { getByTestId } = render(wrapper(props));

		expect(getByTestId(`${componentId}-helper`).textContent).toBe('Jest helper');
	});

	it('should apply error', () => {
		const props = {
			...defaultProps,
			error: true,
			helper: 'Jest helper',
		};

		const componentId = `input-${props.id}`;
		const { getByTestId } = render(wrapper(props));

		expect(getByTestId(`${componentId}-field`).className).toContain('InputText__field--error');
		expect(getByTestId(`${componentId}-helper`).className).toContain('InputText__helper--error');
	});

	it('should be disabled', () => {
		const props = {
			...defaultProps,
			disabled: true,
		};

		const componentId = `input-${props.id}`;
		const { getByTestId } = render(wrapper(props));

		expect(getByTestId(`${componentId}-label`).className).toContain('InputText__label--disabled');
		expect(getByTestId(`${componentId}-field`).className).toContain('InputText__field--disabled');
	});
});
