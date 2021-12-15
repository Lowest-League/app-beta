import React from 'react';
// import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

// COMPONENTS
import { MainLink } from './MainLink';
import { GithubLogo } from '@icons';

let mainLink;
let props;

describe('MainLink', () => {
  beforeAll(() => {
    mainLink = props => {
      return <MainLink {...props}>Link basic</MainLink>;
    };

    props = {
      id: 'mainlink-test',
      href: 'http//:google.com',
      icon: <GithubLogo />
    };
  });

  // test('snapshot renders', () => {
  //   const component = TestRenderer.create(mainLink(props)); // writes snapshot
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('should render children prop', () => {
    const { getByText } = render(mainLink(props));

    expect(getByText('Link basic').textContent).toBeTruthy();
  });

  it('should NOT set light style', () => {
    const { container } = render(mainLink(props));

    expect(container.firstChild.classList.contains('MainLink--light')).toBeFalsy();
  });

  it('should set light style', () => {
    const { container } = render(mainLink({ ...props, light: true }));

    expect(container.firstChild.classList.contains('MainLink--light')).toBeTruthy();
  });

  // render icon
  // renders reverse icon
});
