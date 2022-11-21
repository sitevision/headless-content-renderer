import * as React from 'react';
import { IContentNode } from '../HeadlessContentRenderer';

export interface ITextNode {
  type: string;
  htmlName?: keyof JSX.IntrinsicElements;
  attributes?: Record<string, unknown>;
  content?: string;
  children?: ITextNode[];
}

export interface TextProps extends IContentNode {
  baseUrl: string;
  properties: {
    textContent: ITextNode[];
  };
}

const renderTextNodes = (
  textNodes: ITextNode[],
  baseUrl: string,
  key = 'textNode'
) => {
  return textNodes.map((textNode, i) => {
    const id = `${key}-${i}`;
    const { type } = textNode;
    switch (type) {
      case 'text':
        return textNode.content;
      case 'inline':
      case 'block': {
        const { htmlName: Tag, children, attributes } = textNode;
        const clonedAttributes = { ...attributes };

        if (
          Tag === 'a' &&
          clonedAttributes.href &&
          /^\//.test(clonedAttributes.href as string)
        ) {
          clonedAttributes.href = baseUrl + clonedAttributes.href;
        }

        return (
          <Tag
            key={id}
            {...clonedAttributes}
            className={type === 'block' ? 'env-text' : undefined}
          >
            {renderTextNodes(children, baseUrl, id)}
          </Tag>
        );
      }
    }
  });
};

const TextContent: React.FunctionComponent<TextProps> = ({
  properties,
  baseUrl,
}: TextProps) => {
  const { textContent } = properties;
  return <>{renderTextNodes(textContent, baseUrl)}</>;
};

export default TextContent;
