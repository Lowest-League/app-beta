// Breadcrumb test
import React from 'react';
import { useDispatch } from 'react-redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@store';
import '@testing-library/jest-dom';
import Breadcrumb from './container';

// STORE
import { setBreadcrumb } from '@store/modules/ui/actions';

const containerId = 'breadcrumb';
let wrapper = () => (
	<Provider store={store}>
		<Breadcrumb />
	</Provider>
);

describe('Breadcrumb', () => {
	afterAll(() => (wrapper = null));

	// it('should render', () => {
	// 	const dispatch = useDispatch();
	// 	dispatch(setBreadcrumb([{ label: 'Home', url: 'home' }]));
	// 	const { getByTestId } = render(wrapper());

	// 	expect(getByTestId(containerId)).toBeTruthy();
	// });

	it('should NOT render without links', () => {
		const { queryByTestId } = render(wrapper());

		expect(queryByTestId(containerId)).toBeNull();
	});
});
