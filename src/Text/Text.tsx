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

const renderTextNodes = (textNodes: ITextNode[], baseUrl: string) => {
  return textNodes.map((textNode) => {
    const { type } = textNode;
    switch (type) {
      case 'text':
        return textNode.content;
      case 'inline':
      case 'block': {
        const { htmlName: Tag, children, attributes } = textNode;
        return (
          <Tag
            {...attributes}
            className={type === 'block' ? 'env-text' : undefined}
          >
            {renderTextNodes(children, baseUrl)}
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
