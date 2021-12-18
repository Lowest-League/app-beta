import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

// COMPONENTS
import Button from './component';

let component;

describe('Button', () => {
	beforeEach(() => (component = (props) => <Button {...props} />));
	afterEach(() => (component = null));

	it('should render', () => {
		const props = {
			id: 'jest',
			label: 'Button label',
		};

		const componentId = `button-${props.id}`;
		const { getByTestId, container } = render(component(props));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(componentId).textContent).toBe(props.label);
		expect(container.querySelector('button')).toBeTruthy();
	});

	it('should trigger event', () => {
		const click = jest.fn();
		const props = {
			id: 'jest',
			label: 'Button label',
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
			id: 'jest',
			label: 'Button label',
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
			id: 'jest',
			label: 'Button label',
			secondary: true,
		};

		const componentId = `button-${props.id}`;
		const className = 'Button Button--secondary';
		const { getByTestId } = render(component(props));

		expect(getByTestId(componentId).className).toBe(className);
	});

	it('should render helper text', () => {
		const props = {
			id: 'jest',
			label: 'Button label',
			helper: 'Button helper',
		};

		render(component(props));

		expect(screen.queryByText(props.helper)).toBeTruthy();
	});
});
