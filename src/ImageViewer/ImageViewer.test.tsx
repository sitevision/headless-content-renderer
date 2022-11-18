import * as React from 'react';
import { ContentNodeProps } from '../ContentNodeRenderer';
import ImageViewer from './ImageViewer';

describe('<ImageViewer />', () => {
  it('should render without throwing an error', () => {
    cy.fixture('contentNodes.json').then(({ contentNodes }) => {
      const imageViewer = contentNodes.find(({ type }: ContentNodeProps) =>
        /images|imageslideshow/.test(type)
      );
      cy.mount(<ImageViewer {...imageViewer} />);
    });
  });
});
