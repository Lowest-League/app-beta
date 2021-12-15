import React from 'react';
// import TestRenderer from 'react-test-renderer';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';

// CONTEXT
import { LangsProvider } from '@context';

// COMPONENTS
import { Footer } from './Footer';

let footer;

describe('Footer', () => {
  // it('snapshot renders', () => {
  //   const component = TestRenderer.create(<Footer />); // writes snapshot
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  beforeAll(() => {
	  footer = () => (<LangsProvider><Footer /></LangsProvider>);
  });

  it('should render each link', () => {
    const { container } = render(footer());

    expect(container.querySelector('#github-link')).toBeTruthy();
    expect(container.querySelector('#linkedin-link')).toBeTruthy();
  });

  it('should render each github MainLink', () => {
    const { getByTestId } = render(footer());

    const { getByText } = within(getByTestId('github-link-testid'));

    expect(getByText('Do you wanna help us?')).toBeInTheDocument();
    expect(screen.queryByTestId('github-link-icon-testid')).toBeTruthy();
  });

  it('should render each linkedin MainLink', () => {
    const { getByTestId } = render(footer());

    const { getByText } = within(getByTestId('linkedin-link-testid'));

    expect(getByText('Contact us')).toBeInTheDocument();
    expect(screen.queryByTestId('linkedin-link-icon-testid')).toBeTruthy();
  });
});
