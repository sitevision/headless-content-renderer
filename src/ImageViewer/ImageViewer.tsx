import * as React from 'react';
import { IContentNode } from '../HeadlessContentRenderer';
import { IImage } from '../Image';

export interface ImageViewerProps extends IContentNode {
  properties: {
    images: IImage[];
  };
}

const ImageViewer: React.FunctionComponent<ImageViewerProps> = ({
  properties,
}) => {
  const { images } = properties;
  const firstImage = images[0];

  return (
    <div data-image-viewer className="env-image-viewer">
      <div>
        <a className="env-image-viewer__images" href={firstImage.URL}>
          <img
            className="env-image-viewer__img"
            src={firstImage.URL}
            alt={firstImage.alt}
          />
        </a>
      </div>
      <ol className="env-image-viewer__thumbnails">
        {images.slice(1).map((image) => (
          <li key={image.id}>
            <a className="env-image-viewer__images" href={image.URL}>
              <img
                className="env-image-viewer__img"
                src={image.URL}
                alt={image.alt}
              />
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ImageViewer;
