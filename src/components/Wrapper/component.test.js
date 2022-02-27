import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wrapper from './component';

let wrapper = (props) => <Wrapper {...props} />;
const componentId = `wrapper-jest`;

const defaultProps = {
	id: 'jest',
	title: 'Jest wrapper',
	content: <span>Hello</span>,
	height: 100,
};

describe('Wrapper', () => {
	it('should render', () => {
		const { getByTestId, container } = render(wrapper(defaultProps));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(`typography-${componentId}-title`).textContent).toBe('Jest wrapper');
		expect(container.querySelector('span').textContent).toBe('Hello');
	});
});
