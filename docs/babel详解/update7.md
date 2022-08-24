# 升级babel7

- node支持LTS v8版本以上
- babel-preset-es2015、babel-preset-es2016、babel-preset-es2017、babel-preset-latest以上组合预设应该替换为env预设
- 阶段预设弃用，stage-0这种，可以执行npx babel-upgrade自动处理
- 删除@babel/polyfill，可以使用新版core-js
- 范围包babel-cli-> @babel/cli
- 包名称删除年份@babel/plugin-transform-es2015-classes变成了@babel/plugin-transform-classes
- React 和 Flow 预设的分离

