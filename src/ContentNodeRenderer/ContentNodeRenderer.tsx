import * as React from 'react';
import Image, { ImageProps } from '../Image';
import ImageViewer, { ImageViewerProps } from '../ImageViewer';
import Text, { TextProps } from '../Text';

export interface ContentNodeProps {
  type: string;
  properties: Record<string, unknown>;
}

export interface ContentNodeRendererProps {
  contentNodes: ContentNodeProps[];
  baseUrl: string;
}

const ContentNodeRenderer: React.FunctionComponent<
  ContentNodeRendererProps
> = ({ contentNodes, baseUrl }: ContentNodeRendererProps) => {
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
        }
      })}
    </>
  );
};

export default ContentNodeRenderer;
