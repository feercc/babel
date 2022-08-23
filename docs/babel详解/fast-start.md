# 快速开始

babel工具链比较多，但是这些复杂的工具链还是简化了babel的使用，本片带大家快速入门，展示如何将ES2015+的语法转换成能在老版本浏览器运行的代码，涉及到新语法的转换以及缺失特性的修复

## 安装

所需要的包包含@babel/core、@babel/cli、@babel/preset-env

```shell
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

## 创建配置文件

项目的根目录下创建一个babel.config.json的配置文件（babel版本要大于v7.8.0）

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

上述仅仅是示例，具体的配置信息可看[@babel/preset-env](https://www.babeljs.cn/docs/babel-preset-env)预设

如果你的babel版本低于v7.8.0，则将文件改为babel.config.js

```javascript
const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];

module.exports = { presets };
```

## 运行

这个命令会将src下的所有代码编译到lib目录

```shell
./node_modules/.bin/babel src --out-dir lib
```

我们再来看一下我们安装的这几个包分别是用来做什么的

## @babel/core

作为babel的核心模块和功能，你可以直接使用核心模块

```javascript
const babel = require("@babel/core");

babel.transformSync("code", optionsObject);
```

它的作用是把js代码转换成ast，方便各个插件分析语法进行对应的处理。比如分析箭头函数的语法将其转换成低版本js

## @babel/cli

这个从名字来看就比较好理解了，它是一个能够从命令行使用的工具

```shell
./node_modules/.bin/babel src --out-dir lib
```

这个例子中我们使用了--out-dir参数，你可以通过--help来看命令行工具能够接收的所有参数列表。比较重要的是--plugins和--presets参数

## @babel/preset-env

代码转换的功能是以插件的形式存在，插件其实就是一个js函数，用于指导babel如何进行代码转换。当然，插件你可以用三方的，或者自己写一个也不成问题。比如我们要将箭头函数转换成非箭头函数，你可以使用@babel/plugin-transform-arrow-functions官方插件

```shell
./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

这样代码中的箭头函数就会被变成非箭头函数的形式

```javascript
const fn = () => 1;

// converted to

var fn = function fn() {
  return 1;
};
```

但是这样添加有点复杂，碰到什么再添加什么就会把bug带到线上，所以我们可以使用preset预先设定插件，你可以将自己需要的插件创建一个preset给其他人使用，常见的就有一个env的preset

```shell
./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
```

上述的命令所包含的插件支持所有最新的js特性，当然preset也是支持参数的，另一种方式就是创建配置文件，而不是通过终端的方式，在最开始我们已经创建了对应的配置文件，里面包含了@babel/preset-env

## Polyfill

> 从 Babel 7.4.0 版本开始，这个软件包已经不建议使用了，建议直接包含 core-js/stable （用于模拟 ECMAScript 的功能）:

```javascript
import "core-js/stable";
```

> 如果你想转换generator函数或者async函数为ES5函数，并且你使用的@babel/core 或者 @babel/plugin-transform-regenerator小于7.18.0版本，你必须使用regenerator runtime包，在你使用@babel/preset-env并且配置了useBuiltIns: "usage"或者使用了或者@babel/plugin-transform-runtime包它会自动加载

babel在转译的时候，会将代码分成语法和方法两部分来处理

- syntax：语法，类似展开对象，可选链，let，const等
- api：方法，比如includes函数

```javascript
const array = [1, 2, 3]
array.includes(item => item > 2)

// converted to

var array = [1, 2, 3]
array.includes(function (item) {
  return item > 2
})
```

语法很轻松的转好，但是api不做处理，这样低版本浏览器还是会报错，所以需要polyfill，而useBuiltIns: "usage"就是表示按需引入

polyfill中存在的两个问题

1. 一些实例方法，直接在Array.prototype上添加，修改了全局变量的原型，别的库也修改的话容易造成冲突
2. babel 转译 syntax 时，会用一些辅助函数，辅助函数在每个文件都会写入，没有合理做好公共引入

@babel/plugin-transform-runtime就是解决这种问题

其中

1. api 从之前的直接修改原型改为了从一个统一的模块中引入，避免了对全局变量及其原型的污染，解决了第一个问题
2. helpers 从之前的原地定义改为了从一个统一的模块中引入，使得打包的结果中每个 helper 只会存在一个，解决了第二个问题
