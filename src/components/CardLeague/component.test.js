import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import CardLeague from './component';

let wrapper = (props) => <CardLeague {...props} />;

const click = jest.fn();
const defaultProps = {
	id: 'jest',
	name: 'Jest CardLeague',
	onClick: () => click(),
};

describe('CardLeague', () => {
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const { getByTestId } = render(wrapper(defaultProps));

		const componentId = 'cardLeague-jest';

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(`typography-${componentId}-name`).textContent).toBe('Jest CardLeague');
		expect(getByTestId(`typography-${componentId}-players`).textContent).toBe('0');
		expect(getByTestId(`typography-${componentId}-players-label`).textContent).toBe('players');
	});

	it('should be clicked', () => {
		const { getByTestId } = render(wrapper(defaultProps));

		const componentId = 'cardLeague-jest';

		fireEvent.click(getByTestId(componentId));
		expect(click).toHaveBeenCalledTimes(1);
	});
});
