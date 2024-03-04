---
title: 线性表cpp
abbrlink: 27989
date: 2023-12-14 20:00:19
tags:
---

```cpp
/*********************************************************************
    程序名:
    版权:
    作者: 蔡6
    日期: 2023-12-14 15:15
    说明: cai6.love
*********************************************************************/
#include <iostream>
using namespace std;
#define ok 1
#define error 0
#define true 1
#define false 0
#define maxsize 20
typedef int elemtype;


typedef struct {
	elemtype date[maxsize];
	int length;
} SqList;

typedef int Status;//Status为函数返回状态

/* 初始化顺序线性表 */
Status InitList(SqList *L) {
	L->length = 0;
	return ok;
}

Status visit(elemtype c) { //查看数据
	cout << c;
	return ok;
}

Status InstEmpty(SqList L) {
	if (L.length == 0)
		return true;
	else
		return false;

}

Status ClearList(SqList *L) { //需要对其进行修改则使用指针，或者引用&
	L->length = 0;
	return ok;
}

Status GetElen(SqList *L, int i, elemtype *e) { //获取第i位元素，并将其赋值给e
	if (L->length == 0 || i < 1 || i > L->length)
		return error;
	*e = L->date[i - 1];
	return ok;
}

Status  ListInsert(SqList *L, int i, elemtype e) {
	//对线性表的第i位进行插入e
	if (L->length == maxsize )
		return error;
	if ( i < 1 || i > L->length + 1)
		return error;
	if (i <= L->length) {
		for (int k = L->length - 1; k >= i - 1; k--)
			L->date[k + 1] = L->date[k];
	}
	L->date[i - 1] = e;
	L->length++;


	return ok;
}


Status ListDelete(SqList *L, int i) {
	if ( i < 1 || i > L->length + 1)
		return error;
	if (i <= L->length) {
		for (int k = L->length - 2; k >= i - 1; k--)
			L->date[k] = L->date[k + 1];
	}
	L->length--;


	return ok;

}

/* 初始条件：顺序线性表L已存在。操作结果：返回L中数据元素个数 */
int ListLength(SqList L) {
	return L.length;
}

Status ListTraverse(SqList L) { //依次输出全部数据
	for (int i = 0; i < L.length; i++) {
		cout << L.date[i] << endl;
	}
	return ok;
}

int main() {
	Status i;
	SqList L;
	i = InitList(&L);
	printf("初始化L后：L.length=%d\n", L.length);
	int a = 2;
	i = ListInsert(&L, 1, a);
	i = ListInsert(&L, 1, 5);
	i = ListTraverse(L);
	i = ListDelete(&L, 2);
	i = ListTraverse(L);
	return 0;
}

```

