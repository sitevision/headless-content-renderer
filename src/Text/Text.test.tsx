import * as React from 'react';
import { createYield } from 'typescript';
import TextContent from './Text';

describe('<TextContent />', () => {
  it('should render without throwing an error', () => {
    cy.fixture('contentNodes.json').then(({ contentNodes }) => {
      const textContent = contentNodes[1];
      cy.mount(<TextContent {...textContent} baseUrl="https://example.com" />);

      cy.findByRole('link', { name: 'internal' }).should(
        'have.attr',
        'href',
        'https://example.com/internallink'
      );

      cy.findByRole('link', { name: 'external' }).should(
        'have.attr',
        'href',
        'https://www.sitevision.se'
      );
    });
  });
});
