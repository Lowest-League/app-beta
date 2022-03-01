// Breadcrumb test
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumb from './container';

const containerId = 'breadcrumb';
let wrapper = (props) => <Breadcrumb {...props} />;
const defaultProps = {
	links: [
		{
			label: 'Home',
			url: '',
		},
		{
			label: 'Leagues',
			url: 'leagues',
		},
	],
};

describe('Breadcrumb', () => {
	it('should render', () => {
		const { getByTestId } = render(wrapper(defaultProps));

		expect(getByTestId(containerId)).toBeTruthy();
	});

	it('should NOT render without links', () => {
		const { queryByTestId } = render(wrapper());

		expect(queryByTestId(containerId)).toBeNull();
	});
});
