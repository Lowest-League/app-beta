// Breadcrumb test
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Breadcrumb from './component';

let wrapper = props => <Breadcrumb {...props} />;

describe('Breadcrumb', () => {

	it('should render', () => {
		const { getByText } = render(wrapper());

		expect(getByText('Template component').textContent).toBeTruthy();
	});
});