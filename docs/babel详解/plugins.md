# 插件

代码转换是通过启用插件或者预设来进行转换

## 使用插件

```json
{
  "plugins": ["babel-plugin-myPlugin", "@babel/plugin-transform-runtime"]
}
// or
{
  "plugins": ["./node_modules/asdf/plugin"]
}
```

## 转换插件

转换你的代码

## 语法插件

大多数语法都可以被babel转换，少数情况下，假如没有实现转换，你可以使用
@babel/plugin-syntax-bigint之类的插件来允许babel解析特定语法或者保留原代码，仅仅是希望babel能够进行代码分析

或者你可以通过babel解析器传入plugins参数
```json
{
  "parserOpts": {
    "plugins": ["jsx", "flow"]
  }
}
```

## 插件顺序

顺序很重要

1. 插件在presets之前运行
2. 插件顺序从前往后
3. preset顺序是颠倒的，从后往前

## 插件参数

```json
{
  "plugins": [
    [
      "transform-async-to-module-method",
      {
        "module": "bluebird",
        "method": "coroutine"
      }
    ]
  ]
}
// preset类似
{
  "presets": [
    [
      "env",
      {
        "loose": true,
        "modules": false
      }
    ]
  ]
}
```

## 插件开发

```javascript
export default function() {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name
          .split("")
          .reverse()
          .join("");
      },
    },
  };
}
```
