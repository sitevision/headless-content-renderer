import * as React from 'react';
import { IContentNode } from '../HeadlessContentRenderer';
import ImageViewer from './ImageViewer';

describe('<ImageViewer />', () => {
  it('should render without throwing an error', () => {
    cy.fixture('contentNodes.json').then(({ contentNodes }) => {
      const imageViewer = contentNodes.find(({ type }: IContentNode) =>
        /images|imageslideshow/.test(type)
      );
      cy.mount(<ImageViewer {...imageViewer} />);
    });
  });
});
