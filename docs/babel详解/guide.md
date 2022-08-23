# 指南

本教程包含基础以及高级，有需要的同学按需食用。

## Babel是什么

它是一个javascript编译器，什么是编译器，通常来讲就是将一种语言（通常为高级语言）转换成另一种语言（通常为低级语言）的程序

现代编译器的主要工作流程：源代码->预处理器->编译器->目标代码->链接器->可执行程序

通俗易懂来讲Babel就是能够将你项目中的高版本的语法向下兼容，运行在一些旧版本的浏览器当中，它可以做以下事情：

1. 语法转换
2. 通过polyfill添加目标环境缺失特性，引入三方polyfill模块，如core-js
3. 源码转换

```javascript
// Babel 输入： ES2015 箭头函数
[1, 2, 3].map(n => n + 1);

// Babel 输出： ES5 语法实现的同等功能
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

[编译器教程](https://github.com/jamiebuilds/the-super-tiny-compiler)：[https://github.com/jamiebuilds/the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)

Babel通过语法转换器来支持最新的js语法，插件的目的就是能够让你立刻用上最新的语法不用等待浏览器的支持

## 还能做什么

### JSX与React

Babel也能够转换JSX语法，JSX语法浏览器是没有办法直接理解的，所以大多数React用户都会依靠Babel的工具将JSX转换成普通的js代码，这里需要用到Babel的预设@babel/preset-react，将其添加到Babel配置文件

详细见预设

### 类型注释 (Flow 和 TypeScript)

Babel可以删除类型注释，可以使用@babel/preset-flow，如果你用了flow，需要使用这个预设。

那什么是？flow就是js代码的静态类型检查器，能够检测你的代码是否存在错误。

```javascript
// @flow
function square(n: number): number {
  return n * n;
}

square("2"); // Error!
```

看到这里，你是不是觉得它和TS很像，检查错误，我们相对来对比一下这两个区别

- Flow：// @flow向文件顶部添加注释，或者给你对应的需要检查的位置添加，flow会结合上下文推断
  
- TS：将文件名从.js变成.ts，需要有类型覆盖，不然不起作用。类型覆盖就是需要给变量写上n: number

###### <center>两者覆盖率差异图</center>

![Flow和TS比较](./images/adopting-flow-and-typescript-graph.png "这是一张两者差异图")

使用Flow，你就会有更高以及更快的覆盖类型

当然你也可以使用TypeScript，对应的预设是@babel/preset-typescript

## 插件

Babel构建在插件之上，可以使用现有插件或者自己编写一个插件，然后通过使用或者创建一个preset就可以使用插件

[点击这里](https://astexplorer.net/#/KJ8AjD6maa)可以立即创建一个插件，或者使用[generator-babel-plugin](https://github.com/babel/generator-babel-plugin)生成插件模版

这是一个简易插件，一个插件就是一个函数

```javascript
// 反转字符串插件
export default function({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name; // 反转字符串： JavaScript -> tpircSavaJ
        path.node.name = name
          .split("")
          .reverse()
          .join("");
      },
    },
  };
}
```

## 可调式

Babel支持Source Map，可以轻松调试源码
