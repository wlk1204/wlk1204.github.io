---
title: VitePress 博客搭建笔记
date: 2026-07-10
tags:
  - 技术
  - VitePress
description: 记录使用 VitePress 搭建个人博客并部署到 GitHub Pages 的过程。
---

# VitePress 博客搭建笔记

VitePress 是 Vue 团队推出的静态站点生成器，基于 Vite 构建，速度快、配置简洁。

## 为什么选择 VitePress

1. **开发体验好** — 热更新迅速，Markdown 开箱即用
2. **主题灵活** — 可扩展默认主题，不必绑定特定博客主题
3. **内置功能** — 本地搜索、深色模式、RSS 插件生态完善
4. **部署简单** — 配合 GitHub Actions 一键发布

## 部署到 GitHub Pages

仓库名设为 `username.github.io` 时，站点会发布到根路径。关键配置：

```ts
// .vitepress/config.ts
export default defineConfig({
  base: '/',
})
```

配合 GitHub Actions 工作流，每次 push 到 `main` 分支即可自动构建部署。

## 下一步

- 持续发布技术文章
- 根据需要自定义主题样式
- 可选添加评论、统计等功能
