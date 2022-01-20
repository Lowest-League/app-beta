import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from './component';

let wrapper;
const defaultProps = {
	id: 'jest',
};

describe('Loader', () => {
	beforeAll(() => (wrapper = (props) => <Loader {...props} />));
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const { getByTestId } = render(wrapper(defaultProps));

		expect(getByTestId('loader-jest')).toBeTruthy();
	});
});
