import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Item from './component';

let wrapper = (props) => <Item {...props} />;

describe('Item', () => {
	it('should render', () => {
		const props = {
			id: 'jest-item',
			content: 'Hello',
		};
		const { getByTestId } = render(wrapper(props));

		expect(getByTestId('jest-item').textContent).toBe('Hello');
	});
});
