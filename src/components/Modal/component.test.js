// Modal test
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './component';

let wrapper;
const defaultProps = (props) => {
	return {
		id: 'jest',
		...props,
	};
};

describe('Modal', () => {
	beforeAll(() => (wrapper = (props) => <Modal {...props} />));
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const { getByTestId } = render(wrapper(defaultProps({ visible: true })));

		expect(getByTestId('modal-jest')).toBeTruthy();
	});

	it('should hide', () => {
		const { queryByTestId } = render(wrapper(defaultProps({ visible: false })));

		expect(queryByTestId('modal-jest')).toBeNull();
	});

	it('should render footer', () => {
		const { getByTestId, container } = render(
			wrapper(defaultProps({ visible: true, footer: <span>Footer</span> }))
		);

		expect(getByTestId('modal-jest-footer')).toBeTruthy();
		expect(container.querySelector('span')).toBeTruthy();
	});
});
