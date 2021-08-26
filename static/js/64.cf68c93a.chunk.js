(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[64],{913:function(n,e,t){"use strict";t.r(e),e.default="Text \u6587\u672c\u6807\u6ce8\n===\n\n\u70b9\u6807\u8bb0\u662f\u7528\u6765\u6807\u793a\u67d0\u4e2a\u4f4d\u7f6e\u70b9\u4fe1\u606f\u7684\u4e00\u79cd\u5730\u56fe\u8981\u7d20\uff0c\u672c\u7ae0\u4ecb\u7ecd\u5982\u4f55\u5728\u5730\u56fe\u56fe\u9762\u4f7f\u7528\u70b9\u6807\u8bb0\u3002\n\n```jsx\nimport { Text } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { Text } from '@uiw/react-amap-text';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&noScroll=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, Text } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Map zoom={13} center={[116.4, 39.92]}>\n          <Text\n            text=\"\u7eaf\u6587\u672c\u6807\u8bb0\"\n            anchor=\"center\"\n            draggable={true}\n            cursor=\"pointer\"\n            angle={10}\n            visiable={show}\n            style={{\n              'padding': '.75rem 1.25rem',\n              'margin-bottom': '1rem',\n              'border-radius': '.25rem',\n              'background-color': 'white',\n              'width': '15rem',\n              'border-width': 0,\n              'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',\n              'text-align': 'center',\n              'font-size': '20px',\n              'color': 'blue'\n            }}\n            // title=\"\u5317\u4eac\u5e02\"\n            position={new AMap.LngLat(116.396923,39.918203)}\n          />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\n### TypeScript \u4e2d Ref \u7c7b\u578b\u5b9a\u4e49\n\n\u7531\u4e8e text \u53c2\u6570\u4e0e\u8fd4\u56de\u7684 text \u51b2\u7a81\uff0c\u5b9a\u4e49\u7c7b\u578b\u53c2\u8003\u5982\u4e0b\u5b9e\u4f8b\n\n```tsx\nimport ReactDOM from 'react-dom';\nimport React, { useEffect, useRef } from 'react';\nimport { Text, TextProps } from './index';\n\nfunction Demo() {\n  const textRef = useRef<Omit<TextProps, 'text'> & { text?: AMap.Text }>(null);\n  useEffect(() => {\n    if (textRef.current && textRef.current.text) {\n      textRef.current.text.setStyle({});\n    }\n  }, []);\n  return (\n    <>\n      <Text ref={textRef} text=\"test\" />\n      <Text\n        ref={(instance) => {\n          if (instance && instance.map && instance.text) {\n            const bounds = instance.map?.getBounds()\n            const txt = instance.text.getBounds();\n          }\n        }}\n        text=\"test\"\n      />\n    </>\n  );\n}\n```\n\n### Props\n\n[\u66f4\u591a\u53c2\u6570\u8bbe\u7f6e](https://github.com/uiwjs/react-amap/blob/04f9f50f89500f8025b0211e38f43376f243e3bc/src/types/overlay.d.ts#L1147-L1181)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| text | \u6807\u8bb0\u663e\u793a\u7684\u6587\u672c\u5185\u5bb9\u3002 | `string` | - |\n\n### \u4e8b\u4ef6\n\n[\u4e8b\u4ef6\u7c7b\u578b\u6587\u6863](https://github.com/uiwjs/react-amap/blob/04f9f50f89500f8025b0211e38f43376f243e3bc/src/types/overlay.d.ts#L1128-L1145)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onDblClick | \u9f20\u6807\u5de6\u952e\u53cc\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onRightClick | \u9f20\u6807\u53f3\u952e\u5355\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onMouseMove | \u9f20\u6807\u79fb\u52a8 | `(event: MapsEvent): void;` |\n| onMouseOver | \u9f20\u6807\u79fb\u8fd1\u70b9\u6807\u8bb0\u65f6\u89e6\u53d1\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onMouseOut | \u9f20\u6807\u79fb\u51fa\u70b9\u6807\u8bb0\u65f6\u89e6\u53d1\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onMouseDown | \u9f20\u6807\u5728\u70b9\u6807\u8bb0\u4e0a\u6309\u4e0b\u65f6\u89e6\u53d1\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onMouseUp | \u9f20\u6807\u5728\u70b9\u6807\u8bb0\u4e0a\u6309\u4e0b\u540e\u62ac\u8d77\u65f6\u89e6\u53d1\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onDragStart | \u5f00\u59cb\u62d6\u62fd\u70b9\u6807\u8bb0\u65f6\u89e6\u53d1\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onDragging | \u9f20\u6807\u62d6\u62fd\u79fb\u52a8\u70b9\u6807\u8bb0\u65f6\u89e6\u53d1\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onDragEnd | \u70b9\u6807\u8bb0\u62d6\u62fd\u79fb\u52a8\u7ed3\u675f\u89e6\u53d1\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onClick | \u9f20\u6807\u5de6\u952e\u5355\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onMoving | \u70b9\u6807\u8bb0\u5728\u6267\u884c | `(obj: { passedPath:Array<LngLat> }): void;` |\n| onMoveEnd | \u70b9\u6807\u8bb0\u6267\u884cmoveTo\u52a8\u753b\u7ed3\u675f\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u7531moveAlong\u65b9\u6cd5\u89e6\u53d1 | `(): void;` |\n| onMoveAlong | \u70b9\u6807\u8bb0\u6267\u884cmoveAlong\u52a8\u753b\u4e00\u6b21\u540e\u89e6\u53d1\u4e8b\u4ef6 | `(): void;` |\n| onTouchStart | \u89e6\u6478\u5f00\u59cb\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onTouchMove | \u89e6\u6478\u79fb\u52a8\u8fdb\u884c\u4e2d\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onTouchEnd | \u89e6\u6478\u7ed3\u675f\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n"}}]);
//# sourceMappingURL=64.cf68c93a.chunk.js.map