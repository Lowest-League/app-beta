// Signin test
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@store';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from './container';

let wrapper;

describe('Signup', () => {
	beforeAll(
		() =>
			(wrapper = () => (
				<Provider store={store}>
					<Signup />
				</Provider>
			))
	);
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const containerId = 'signup';
		const { getByTestId } = render(wrapper());

		expect(getByTestId(`typography-${containerId}-header`)).toBeTruthy();
		expect(getByTestId(`input-${containerId}-username`)).toBeTruthy();
		expect(getByTestId(`input-${containerId}-email`)).toBeTruthy();
		expect(getByTestId(`input-${containerId}-leagueKey`)).toBeTruthy();
		expect(getByTestId(`input-${containerId}-passwordCheck`)).toBeTruthy();
		expect(getByTestId(`input-${containerId}-password`)).toBeTruthy();
		expect(getByTestId(`button-${containerId}-confirm`)).toBeTruthy();
		expect(getByTestId(`button-${containerId}-cancel`)).toBeTruthy();
	});
});
