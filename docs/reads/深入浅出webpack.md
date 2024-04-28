---
title: 深入浅出webpack
date: 2022-01-02
cover: /reads/深入浅出webpack.jpg
---

# Webpack

# 入门

## 模块化

### CommonJS

##### 写法：

```javascript
// export
modules.export = moduleA

// import
const moduleA = require('./moduleA')
```

##### 优点：

1. 复用性
2. 直接运行在`node`环境，很多npm包都采用CommonJS规范

##### 缺点：

1. 无法直接运行在浏览器环境，需要`Babel`转换成ES5
2. 同步加载

##### summary：

1. 同步加载，更适合服务端或npm插件的选择

### AMD

##### 写法：

```javascript
// export
define('moduleA', ['dep'], function () {
  return {}
})

// import
require(['moduleA'], function (module) {
......
})
```

##### 优点：

1. 可在浏览器环境和`node`环境直接运行
2. 异步加载依赖
3. 并行加载依赖

##### 缺点：

1. 写法繁琐

##### summary：

1. 异步加载，适合前端使用

### ES Module

#### 写法：

```javascript
// export
export function func() {
}

export default {}

// import
import { func } from './func'
import utils from './utils'
```

#### 优点：

1. 写法简单
2. 可直接在`node`环境运行
3. 支持同步加载，也支持异步加载
4. 支持全部导出和局部导出，天然对`tree shaking`和`code splitting`友好

#### 缺点：

1. 无法直接运行在浏览器环境，需要`Babel`转换成ES5

#### summary：

1. 支持同异步加载，既适合服务端也适合前端

## “构建”

> “构建其实是工程化、自动化思想在前端开发中的体现，把一系列流程用代码去实现，让代码自动化地执行这一系列复杂的流程。”

- 代码转换：ts => js、less => css
- 文件优化：压缩代码、压缩文件
- 代码分割：首屏异步加载不需要的模块
- 模块合并：项目开发时模块化，构建后要合并成一个文件
- 自动刷新：热更新
- 代码校验：code lint、commit lint、ci case校验
- 自动发布：cd

## 使用

### 安装

```shell
npm i -g webpack”
```

### loader

> “文件转换功能的翻译员”

- loader执行顺序由后到前

### plugin

> 构建流程里注入钩子

### devServer

#### 安装

```shell
npm i -D webpack-dev-server”
```

#### 作用

1. 提供http服务
2. 热更新
4. source map

### 核心概念

- entry：入口
- module：模块
- chunk：代码块，由多个module组成，用于代码合并与切割
- loader：模块转换器，翻译员
- plugin：构建中注入钩子完成自定义事件
- output：输出

# 配置

## entry

- 配置模块的入口
- 必填项，不填webpack则报错退出
- webpack以`context`为根目录，默认为项目启动的路径

### 类型

1. string `scr/main.js`
2. array `['src/main.js', 'src/index.js']`
3. object `{a: 'scr/main.js', b: ['src/main.js', 'src/index.js']}`

### chunk

- 如果`entry`是`string`或`array`，则只生成一个chunk，名称为`main`
- 如果`entry`是`object`，则会出现多个chunk，名称为`object`的key值

### 动态entry

```javascript
// 同步函数
entry: () => {
  return {
    a: './pages/a',
    b: './pages/b'
  }
}

// 异步函数
entry: () => {
  return new Promise((resolve) => {
    resolve({
      a: './pages/a',
      b: './pages/b'
    })
  }
}
```


