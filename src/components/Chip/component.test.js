// Chip test
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Chip from './component';

let wrapper = (props) => <Chip {...props} />;
const defaultProps = (props) => ({
	id: 'jest',
	label: 'Jest Label',
	...props,
});

describe('Chip', () => {
	it('should render', () => {
		const { getByTestId } = render(wrapper(defaultProps()));

		const componentId = 'chip-jest';

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(`${componentId}-content`).textContent).toBe('Jest Label');
	});

	it('should be active', () => {
		const { getByTestId } = render(wrapper(defaultProps({ active: true })));

		const componentId = 'chip-jest';

		expect(getByTestId(componentId).className).toContain('Chip--active');
		expect(getByTestId(`${componentId}-content`).className).toContain('Chip__content--active');
	});
});
