---
title: Hexo备份事项
abbrlink: 64769
date: 2023-12-03 21:40:10
---

### 由于每次更新后都要输入大量命令行十分麻烦，遂创建一键部署脚本方便备份部署

在博客根目录下创建deploy.sh文件，写入


```
echo "Start"
git add .
git commit -m backup
git push
hexo g
hexo d
echo "Finish"
echo 按任意键继续
read -n 1
```

保存后，在博客根目录双击执行或用命令./deploy.sh 即可实现博客的一键备份并部署

### 恢复博客
基础环境搭建
Hexo博客基础环境已经搭好：比如安装npm、git、nodejs、hexo安装…

克隆项目到本地
Ctrl+Alt+T打开终端，输入


```
git clone git@gitee.com:stringwind/blog_backup.git
```


git clone 自己的仓库地址

恢复博客
在clone来的文件夹里执行


```
npm install hexo-cli
npm install
npm install hexo-deployer-git
```
==注意由于主题未备份，需要进入站源文件修改主题为默认主题才可恢复==
这样博客源文件就成功移植了，再用hexo clean、hexo g、hexo d即可部署完成