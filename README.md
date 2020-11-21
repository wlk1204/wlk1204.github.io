# [Wanglk Blog](https://wlk1204.github.io)

> 全干工程师 👨‍🍳



### Ruby Environment
```
gem install bundler

rvm install ruby@latest # current latest version is 2.7.0

rvm use 2.7.0
```



### Dev

```bash
bundle install

yarn dev
```



### Prod
```bash
git add .

git commit -m "update"

git push origin master --tag
```



### 目录结构
```bash
.
├── 404.html
├── CNAME
├── Gemfile
├── Gemfile.lock
├── Gruntfile.js
├── README.md
├── Rakefile
├── _config.yml
├── _includes     # 块级 html
├── _layouts      # 页面级 html
├── _posts        # 发布的文章
├── _site
├── about.html    # 关于
├── archive.html  # 档案
├── css           # 样式
├── feed.xml
├── fonts         # 字体
├── img           # 静态资源
├── index.html    # 主页面
├── js            # js 资源
├── less
├── offline.html
├── package.json
├── pwa
├── search.json
└── sw.js
```
