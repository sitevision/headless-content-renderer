import * as React from 'react';
import Image, { ImageProps } from '../Image';
import ImageViewer, { ImageViewerProps } from '../ImageViewer';
import Text, { TextProps } from '../Text';

export interface IContentNode {
  type: string;
  properties: Record<string, unknown>;
}

export interface HeadlessContentRenderer {
  contentNodes: IContentNode[];
  baseUrl: string;
}

const HeadlessContentRenderer: React.FunctionComponent<
  HeadlessContentRenderer
> = ({ contentNodes, baseUrl }: HeadlessContentRenderer) => {
  return (
    <>
      {contentNodes.map((contentNode) => {
        switch (contentNode.type) {
          case 'image':
            return <Image {...(contentNode as ImageProps)} />;
          case 'text':
            return <Text baseUrl={baseUrl} {...(contentNode as TextProps)} />;
          case 'images':
          case 'imageslideshow':
            return <ImageViewer {...(contentNode as ImageViewerProps)} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default HeadlessContentRenderer;
