title: dfs
author: cai6
abbrlink: 63534
date: 2024-01-31 09:38:02
tags:
---
# 2024-2-1dfs
```cpp
#include <iostream>
#include <cstdio>
#include <cstring>
#include <algorithm>
using namespace std;
const int N = 25;
int n, m, cnt;
int st[999];

void dfs(int u) {
    if (cnt == m) {
        for (int i = 1; i <= n; i++) {

            if (st[i] == 1)
                printf("%d", i);
        }
        puts("");
        return;
    }

    if (u == n + 1)
        return;

    st[u] = 1;
    cnt++;
    dfs(u + 1);
    cnt--;
    st[u] = 0;
    st[u] = 2;
    dfs(u + 1);

}

int main() {
    scanf("%d%d", &n, &m);
    dfs(1);
    return 0;
}

```
第二个
```cpp

#include <bits/stdc++.h>
#include <cstdio>
using namespace std;

const int N=10;
int n,digt,ans=0;
int st[N];
bool used[N];
void dfs(int u)//输入为已使用个数；
    {
        if(u>9)
            {int x=0;
                for(int i=1;i<=7;i++){
            x=x*10+st[i];
            int y=0;
            for(int j=i+1;j<=8;j++){//枚举断点
                y=y*10+st[j];
                int z=0;
                for(int k=j+1;k<=9;k++){
                    z=z*10+st[k];
                }
                if(y%z==0&&x+y/z==n){//判断是否满足条件
                    ans++;//满足则答案+1
                }
            }}
                return ;}
    for(int i=1;i<=9;i++)
        {if(!used[i])
            {used[i]=true;
            st[u]=i;
            dfs(u+1);
            st[u]=0;used[i]=false;//恢复现场；
            }
        }
    }

int main(){

scanf("%d",&n);
dfs(1);
printf("%d",ans);
    return 0;
}

```