# @sitevision/headless-content-renderer

This is a component that renders content nodes from a [Sitevision Headless API](https://help.sitevision.se/65656565657593.html).

## How to use

```
npm install react @sitevision/headless-content-renderer
yarn add react @sitevision/headless-content-renderer
```

```javascript
import * as React from 'react';
import { HeadlessContentRenderer } from '@sitevision/headless-content-renderer';

const App = ({ contentNodes, baseUrl }) => {
  return (
    <HeadlessContentRenderer contentNodes={contentNodes} baseUrl={baseUrl} />
  );
};
```

## API

| Option         | Type     | Description                                                                      |
| -------------- | -------- | -------------------------------------------------------------------------------- |
| `contentNodes` | `array`  | An array of content nodes as they are delivered from the Sitevision Headless API |
| `baseUrl`      | `string` | The origin of the headless page that you want to render                          |
