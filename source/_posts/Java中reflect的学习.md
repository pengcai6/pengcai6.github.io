---
title: Java中reflect的学习
abbrlink: 3792a2b7
date: 2024-05-13 17:52:47
updated: 2024-05-13 17:52:47
tags:
categories:
keywords:
---

```
package reflect;

import reflect.entity.Employee;

public class ClassSample {
    public static void main(String[] args) {
        try {
            Class emplyeeClass = Class.forName("reflect.entity.Employee");//返回具有指定名称的类对象
            System.out.println("已被加载");
            Employee emp = (Employee) emplyeeClass.newInstance();//使用类对象生成对象
            System.out.println(emp);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);//类名与类路径错误
        } catch (InstantiationException e) {
            throw new RuntimeException(e);//实例化异常，例如抽象类无法被实例化
        } catch (IllegalAccessException e) {
            throw new RuntimeException(e);//权限不足，作用域外
             }
        }
    }


```
