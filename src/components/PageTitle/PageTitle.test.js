import React from 'react';
// import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

// COMPONENTS
import { PageTitle } from './PageTitle';

let pageTitle;
let props;

describe('PageTitle', () => {
  beforeAll(() => {
    pageTitle = (props) => {
      return <PageTitle {...props}>Hello Basic</PageTitle>;
    };
  });

  // it('snapshot renders', () => {
  //   const component = TestRenderer.create(pageTitle(props)); // writes snapshot
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('should render children prop', () => {
    const { getByText } = render(pageTitle(props));

    expect(getByText('Hello Basic').textContent).toBeTruthy();
  });

  it('should render subtitle prop when set', () => {
    const { getByText } = render(pageTitle({ ...props, subtitle: 'subtitle basic'}));

    expect(getByText('subtitle basic').textContent).toBeTruthy();
  });

  it('should NOT render subtitle prop when NOT set', () => {
    const { queryByText } = render(pageTitle(props));

    expect(queryByText('subtitle basic')).toBeNull();
  });

  it('should set light style', () => {
    const { container } = render(pageTitle({ ...props, light: true }));

    expect(container.firstChild.classList.contains('PageTitle--light')).toBeTruthy();
  });
});
