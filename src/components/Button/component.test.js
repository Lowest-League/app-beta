import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

// COMPONENTS
import Button from './component';

let component;
const defaultProps = {
	id: 'jest',
	label: 'Button label',
};

describe('Button', () => {
	beforeAll(() => (component = (props) => <Button {...props} />));
	afterAll(() => (component = null));

	it('should render', () => {
		const componentId = `button-${defaultProps.id}`;
		const { getByTestId, container } = render(component(defaultProps));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(componentId).textContent).toBe(defaultProps.label);
		expect(container.querySelector('button')).toBeTruthy();
	});

	it('should trigger event', () => {
		const click = jest.fn();
		const props = {
			...defaultProps,
			onClick: () => click(),
		};

		const componentId = `button-${props.id}`;
		const { getByTestId } = render(component(props));

		fireEvent.click(getByTestId(componentId));
		expect(click).toHaveBeenCalledTimes(1);
	});

	it('should been disabled', () => {
		const click = jest.fn();
		const props = {
			...defaultProps,
			disabled: true,
			onClick: () => click(),
		};

		const componentId = `button-${props.id}`;
		const className = 'Button Button--disabled';
		const { getByTestId } = render(component(props));

		fireEvent.click(getByTestId(componentId));
		expect(click).toHaveBeenCalledTimes(0);
		expect(getByTestId(componentId).className).toBe(className);
	});

	it('should apply secondary styling', () => {
		const props = {
			...defaultProps,
			secondary: true,
		};

		const componentId = `button-${props.id}`;
		const className = 'Button Button--secondary';
		const { getByTestId } = render(component(props));

		expect(getByTestId(componentId).className).toBe(className);
	});

	it('should render helper text', () => {
		const props = {
			...defaultProps,
			helper: 'Button helper',
		};

		render(component(props));

		expect(screen.queryByText(props.helper)).toBeTruthy();
	});
});
