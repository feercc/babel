# 配置babel

babel也有自己的配置文件，不同的场景使用不同的配置文件较为合理

首先说明对应的优先级的顺序

babel.config.json < .babelrc < programmatic options from @babel/cli

## babel.config.json（建议）

1. 单一仓库模式（monorepo），也就是许多项目放在一个仓库里面，你可以只配置一个babel.config.json文件
2. 需要编译node_modules

根目录下创建babel.config.json文件

```json
{
  "presets": [...],
  "plugins": [...]
}
```

## babel.config.js/.babelrc.js

v7.8.0以上也支持mjs，7.7.0支持cjs

```javascript
const presets = [ ... ];
const plugins = [ ... ];

if (process.env["ENV"] === "prod") {
  plugins.push(...);
}

module.exports = { presets, plugins };
```

## .babelrc.json

只需配置某个项目的某个部分

```json
{
  "presets": [...],
  "plugins": [...]
}
```

## package.json

你也可以在package.json中配置babel

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```

## 配置合并

对于一些配置的合并问题大家实践的时候可以体会一下，比如

```javascript
{
  sourceType: "script",
  assumptions: {
    setClassFields: true,
    iterableIsArray: false
  },
  env: {
    test: {
      sourceType: "module",
      assumptions: {
        iterableIsArray: true,
      },
    }
  }
};

// 如果NODE_ENV是test，最终的结果是

{
  sourceType: "module", // sourceType: "script" is overwritten
  assumptions: {
    setClassFields: true,
    iterableIsArray: true, // assumptions are merged by Object.assign
  },
}
```

## 配置选项

比如用命令行传递babel的配置

```shell
npx babel --root-mode upward file.js
# equivalent of passing the rootMode config option
```

## 主要选项

这些选项只是作为babel编程选项的一部分，主要供依赖babel的工具使用，或者使用babel.transform的人群，这里不做过多的介绍，简单了解一下有哪些api即可

- cwd 默认为process.cwd()，工作目录
- caller 可以讲caller对象传递给babel标识自身
- filename 当前正在编译的代码关联文件名
- filenameRelative 用作 BabelsourceFileName 选项的默认值
- code 默认返回包括code和map生成的代码的属性
- ast 获取ast本身
- cloneInputAst

## 配置加载项

### root

要处理的目录根节点

### rootMode

类型："root" | "upward" | "upward-optional"

默认："root"

初始路径，三个选项

root：以root配置为准

upward：向上查找babel配置文件，找不到抛出错误

upward-optional：向上找配置文件，找不到就返回到当前

### envName

类型：string

默认：process.env.BABEL_ENV || process.env.NODE_ENV || "development"

可通过api.env()函数在配置函数，插件和预设中使用

### configFile

类型：string | boolean

默认：path.resolve(opts.root, "babel.config.json")

配置文件路径，可以给js或者json路径

### babelrc

类型：boolean

默认：true

### babelrcRoots

允许单个包拥有自己的配置

## 插件和预设选项

### plugins

类型：`Array<PluginEntry | Plugin>( PluginEntry)`

默认值：[]

使用的插件

### presets

类型：`Array<PresetEntry>( PresetEntry )`

默认值：[]

要激活的一组预设

## 输出目标

### targets

类型：`string | Array<string> | { [string]: string }`

默认：{}

```json
{
  "targets": "> 0.25%, not dead"
}
// or
{
  "targets": {
    "chrome": "58",
    "ie": "11"
  }
}
```

支持的环境：android, chrome, edge, electron, firefox, ie, ios, node, opera, rhino, safari, samsung

当没有指定目标时：Babel 会假设你的目标是最旧的浏览器。例如，@babel/preset-env将所有 ES2015-ES2020 代码转换为 ES5 兼容。

```json
{
  "presets": ["@babel/preset-env"]
}
```

- targets.esmodules 是否对支持esmodules的浏览器
- targets.node 指定node版本
- targets.safari 针对safari编译
- targets.browsers 使用[browserslist](https://github.com/ai/browserslist)选择浏览器

### browserslistConfigFile

类型：boolean

默认：true

是否使用browserslist文件或者引用package.json中的browserslist文件

### browserslistEnv

## 配置合并选项

### sourceMaps/sourceMap

类型：boolean | "inline" | "both"

默认值：false

- boolean：为代码生成源映射并将其包含在结果对象中
- inline：生成源映射并将其作为数据 URL 附加到代码末尾
- both

## 杂项选项

### sourceType

## 代码生成器选项

## AMD / UMD / SystemJS 模块选项






