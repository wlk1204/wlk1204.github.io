---
title: "webpack && gulp 使用场景"
subtitle: "工程化中的打包利器"
layout: post
author: "Wanglk"
header-style: text
tags:
  - FE
  - webpack
  - gulp
  - 工程化
---

**gulp 最核心的功能：**

1. **任务定义和组织；**
2. **基于文件 stream 的构建；**
3. **插件体系；**

**webpack 最核心的功能：**

1. **按照模块的依赖构建目标文件；**
2. **loader 体系支持不同的模块；**
3. **插件体系提供更多额外的功能；**

比如 `Webpack` 将模块的、互相依赖的分散的代码打包成数个文件，然后再使用 `gulp` 任务去做压缩，加版本号，替换等等其他工作。
