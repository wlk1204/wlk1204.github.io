# Leekon Blog

基于 [VitePress](https://vitepress.dev/) 搭建的个人博客，部署在 GitHub Pages。

在线地址：https://leekon.github.io

## 功能

- 首页个人简介 + 最新文章列表
- 标签分类浏览
- 按年月归档
- RSS 订阅（`/feed.rss`）
- 深色/浅色主题切换
- 站内全文搜索

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

开发服务器默认运行在 http://localhost:5173

> RSS 和本地搜索在 `npm run build` 后完整生效，开发模式下可先用 `npm run preview` 验证。

## 写文章

在 `posts/` 目录下创建 `.md` 文件，使用以下 Frontmatter：

```yaml
---
title: 文章标题
date: 2026-07-11
tags: [标签一, 标签二]
description: 文章摘要，显示在列表页
publish: true
---
```

- `publish: false` — 隐藏草稿，不出现在列表和 RSS 中
- `date` 为空时文章也不会被收录

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库 `leekon/leekon.github.io`
2. 推送代码到 `main` 分支
3. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**
4. 等待 Actions 完成后访问 https://leekon.github.io

```bash
git init
git add .
git commit -m "feat: init VitePress blog"
git branch -M main
git remote add origin git@github.com:leekon/leekon.github.io.git
git push -u origin main
```

## 目录结构

```
├── .github/workflows/deploy.yml   # 自动部署
├── .vitepress/
│   ├── config.ts                  # 站点配置
│   ├── posts.data.ts              # 文章数据加载
│   ├── theme/                     # 主题扩展
│   └── utils/                     # 工具函数
├── posts/                         # 博客文章
├── pages/                         # 标签、归档等页面
├── public/                        # 静态资源
└── index.md                       # 首页
```

## 自定义

- 修改 `.vitepress/config.ts` 中的站点标题、导航、社交链接
- 编辑 `index.md` 更新首页 Hero 区域
- 在 `.vitepress/theme/style.css` 中调整样式
