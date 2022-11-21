import * as React from 'react';
import { IContentNode } from '../HeadlessContentRenderer';

export interface IImage {
  id: string;
  alt: string;
  URL: string;
  URI: string;
}

export interface ImageProps extends IContentNode {
  properties: {
    image: IImage;
  };
}

const Image: React.FunctionComponent<ImageProps> = ({ properties }) => {
  const { URL, alt } = properties.image;
  return <img src={URL} alt={alt} />;
};

export default Image;
