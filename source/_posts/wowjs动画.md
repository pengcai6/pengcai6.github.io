---
title: wowjs动画
abbrlink: 22325
date: 2025-01-18 22:48:39
updated: 2025-01-18 22:48:39
tags:
categories:
keywords:
---
## flip动画效果。
{% wow animate__flip %}
{% note green 'fas fa-fan' modern%}
 `flip`动画效果。
{% endnote %}
{% endwow %}
## zoomIn动画效果，持续5s，延时5s，离底部100距离时启动，重复10次。
{% wow animate__zoomIn,5s,5s,100,10 %}
{% note blue 'fas fa-bullhorn' modern%}
 `zoomIn`动画效果，持续`5s`，延时`5s`，离底部`100`距离时启动，重复`10`次
{% endnote %}
{% endwow %}
## slideInRight动画效果，持续5s，延时5s。
{% wow animate__slideInRight,5s,5s %}
{% note orange 'fas fa-car' modern%}
`slideInRight`动画效果，持续`5s`，延时`5s`。
{% endnote %}
{% endwow %}
## heartBeat动画效果，延时5s，重复10次。此处注意不用的参数位置要留空，用逗号间隔。
{% wow animate__heartBeat,,5s,,10 %}
{% note red 'fas fa-battery-half' modern%}
`heartBeat`动画效果，延时`5s`，重复`10`次。
{% endnote %}
{% endwow %}

```
flip动画效果。
{% wow animate__flip %}
{% note green 'fas fa-fan' modern%}
`flip`动画效果。
{% endnote %}
{% endwow %}
zoomIn动画效果，持续5s，延时5s，离底部100距离时启动，重复10次。
{% wow animate__zoomIn,5s,5s,100,10 %}
{% note blue 'fas fa-bullhorn' modern%}
`zoomIn`动画效果，持续`5s`，延时`5s`，离底部`100`距离时启动，重复`10`次
{% endnote %}
{% endwow %}
slideInRight动画效果，持续5s，延时5s。
{% wow animate__slideInRight,5s,5s %}
{% note orange 'fas fa-car' modern%}
`slideInRight`动画效果，持续`5s`，延时`5s`。
{% endnote %}
{% endwow %}
heartBeat动画效果，延时5s，重复10次。此处注意不用的参数位置要留空，用逗号间隔。
{% wow animate__heartBeat,,5s,,10 %}
{% note red 'fas fa-battery-half' modern%}
`heartBeat`动画效果，延时`5s`，重复`10`次。
{% endnote %}
{% endwow %}


```