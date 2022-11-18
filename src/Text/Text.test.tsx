import * as React from 'react';
import TextContent from './Text';

describe('<TextContent />', () => {
  it('should render without throwing an error', () => {
    cy.fixture('contentNodes.json').then(({ contentNodes }) => {
      const textContent = contentNodes[1];
      cy.mount(<TextContent {...textContent} />);
    });
  });
});
