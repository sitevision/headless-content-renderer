import * as React from 'react';
import { IContentNode } from '../HeadlessContentRenderer';
import ImageNode from './Image';

describe('<ImageNode />', () => {
  it('should render without throwing an error', () => {
    cy.fixture('contentNodes.json').then(({ contentNodes }) => {
      const imageNode = contentNodes.find(
        ({ type }: IContentNode) => type === 'image',
      );
      cy.mount(<ImageNode {...imageNode} />);

      cy.findByRole('img', { name: imageNode.properties.image.alt }).should(
        'exist',
      );
    });
  });
});
