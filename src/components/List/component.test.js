// List test
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import List from './component';

let wrapper = props => <List {...props} />;

describe('List', () => {

	it('should render', () => {
		const { getByText } = render(wrapper());

		expect(getByText('Template component').textContent).toBeTruthy();
	});
});