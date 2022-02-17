// UserNav test
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import UserNav from './component';

const componentId = 'usernav';
const click = jest.fn();
const defaultProps = (props = {}) => {
	return {
		username: 'Jest',
		...props,
	};
};
let wrapper = (props) => <UserNav {...props} />;

describe('UserNav', () => {
	it('should render', () => {
		const props = defaultProps();

		const { getByTestId } = render(wrapper(props));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(`typography-${componentId}-username`).textContent).toBe('Jest');
		expect(getByTestId(`${componentId}-logout`)).toBeTruthy();
		expect(getByTestId(`typography-${componentId}-logout-label`).textContent).toBe('Logout');
		expect(getByTestId(`${componentId}-photo`)).toBeTruthy();
	});

	it('should logout', () => {
		const props = defaultProps({ logout: () => click() });

		const { getByTestId } = render(wrapper(props));
		fireEvent.click(getByTestId(`${componentId}-logout`));

		expect(click).toHaveBeenCalledTimes(1);
	});
});
