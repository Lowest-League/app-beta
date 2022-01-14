// Signin test
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signin from './container';

let wrapper;

describe('Signin', () => {
	beforeAll(() => (wrapper = () => <Signin />));
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const containerId = 'signin';
		const { getByTestId } = render(wrapper());

		expect(getByTestId(`typography-${containerId}-header`)).toBeTruthy();
		expect(getByTestId(`typography-${containerId}-title`)).toBeTruthy();
		expect(getByTestId(`input-${containerId}-username`)).toBeTruthy();
		expect(getByTestId(`input-${containerId}-password`)).toBeTruthy();
		expect(getByTestId(`button-${containerId}`)).toBeTruthy();
	});
});
