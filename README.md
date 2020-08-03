# vue3周边()

## 构建工具
> parcel
> rollup
> webpack

### vite
> 轻量、开箱即用 (开发工具、本地静态服务器)
> 极速模块热更新（利用浏览器内置 ES module 支持）
> 内置 Rollup 用于打包项目
> 适用于简单的项目原型 或 开发组件库
> 本质上是利用C++/Rust/Go重写了依赖分析/模块构建能力，同时充分利用已有生态，极大降低开发成本
> https://www.npmjs.com/package/vite

```
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
$ npm run build
```
或者
```
$ yarn create vite-app <project-name>
$ cd <project-name>
$ yarn
$ yarn dev
$ yarn build
```

### Vue Cli
```
vue create -d <project-name>
cd <project-name>
vue add vue-next
```
> 下个版本将会内建支持Vue3
> 新项目可选基于Vue3的模版
> 自主升级项目：自动检查Vue依赖版本

## 构建工具：二次开发
> https://astexplorer.net/ 新增Vue分类
> 可基于 @vue/compiler-core 或 @vue/compiler-sfc 进行扩展

## JSX

## vueuse
https://vueuse.js.org/?path=/story/docs--read-me
