---
title: 404 - 页面走丢了
date: 2023-12-03 19:47:26
layout: page
comments: false
---

<link rel="stylesheet" href="/css/404.css">

<div class="error-404">
  <div class="stars" id="starsContainer"></div>
  
  <div class="cute-character">
    <div class="character-body"></div>
    <div class="character-eyes">
      <div class="eye"></div>
      <div class="eye"></div>
    </div>
    <div class="character-mouth"></div>
  </div>
  
  <div class="error-number">404</div>
  
  <div class="error-message">
    <h2 id="errorText">哎呀！页面去火星旅行了 🚀</h2>
    <p>别担心，我们的小机器人正在努力寻找<span class="loading-dots"></span></p>
  </div>
  
  <div class="search-box">
    <input type="text" class="search-input" placeholder="试试搜索你想要的内容..." id="search404">
  </div>
  
  <div class="button-group">
    <a href="/" class="home-btn">🏠 回到首页</a>
    <a href="/archives" class="home-btn">📚 查看归档</a>
    <a href="/tags" class="home-btn">🏷️ 浏览标签</a>
    <a href="/categories" class="home-btn">📁 分类</a>
  </div>
  
  <div class="fun-facts">
    <div class="fun-fact">💡 趣味小知识：HTTP 404错误最初来自CERN实验室</div>
    <div class="fun-fact">🎵 来听首歌放松一下吧~</div>
    <div class="fun-fact">🌟 每个迷路的页面都有自己的故事</div>
  </div>
</div>

<script>
(function() {
    'use strict';

    // 搜索功能
    const searchInput = document.getElementById('search404');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    // 根据你的博客搜索功能调整这个URL
                    window.location.href = '/search/?q=' + encodeURIComponent(query);
                }
            }
        });
    }

    // 动态创建星星
    function createStars() {
        const starsContainer = document.getElementById('starsContainer');
        if (!starsContainer) return;

        const starCount = window.innerWidth < 768 ? 15 : 25;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            const size = Math.random() * 3 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (Math.random() * 2 + 2) + 's';

            starsContainer.appendChild(star);
        }
    }

    // 可爱的错误消息轮换
    const messages = [
        "页面去火星旅行了 🚀",
        "内容被小猫咪叼走了 🐱",
        "这个页面在和你玩捉迷藏 👻",
        "页面去喝咖啡了，马上回来 ☕",
        "内容正在充电中... ⚡",
        "页面搭错了传送门 🌀",
        "内容去找朋友玩了 🎮",
        "页面在宇宙中迷路了 🌌"
    ];

    let messageIndex = 0;
    function rotateMessage() {
        const messageElement = document.getElementById('errorText');
        if (messageElement) {
            messageIndex = (messageIndex + 1) % messages.length;
            messageElement.style.opacity = '0';

            setTimeout(() => {
                messageElement.textContent = `哎呀！${messages[messageIndex]}`;
                messageElement.style.opacity = '1';
            }, 300);
        }
    }

    // 页面加载完成后初始化
    document.addEventListener('DOMContentLoaded', function() {
        createStars();

        // 每5秒轮换一次消息
        setInterval(rotateMessage, 5000);

        // 添加键盘快捷键
        document.addEventListener('keydown', function(e) {
            // 按ESC键回首页
            if (e.key === 'Escape') {
                window.location.href = '/';
            }
            // 按F键聚焦搜索框
            if (e.key === 'f' || e.key === 'F') {
                e.preventDefault();
                searchInput.focus();
                showKeyboardTips('已聚焦搜索框');
            }
            // 按R键切换彩虹模式
            if (e.key === 'r' || e.key === 'R') {
                document.querySelector('.error-404').classList.toggle('rainbow-mode');
                showKeyboardTips('🌈 彩虹模式已切换');
            }
        });

        // 鼠标跟随粒子
        document.addEventListener('mousemove', function(e) {
            const particle = document.createElement('div');
            particle.className = 'mouse-particle';
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 800);
        });

        // 点击波纹效果
        document.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'click-ripple';
            ripple.style.left = (e.clientX - 20) + 'px';
            ripple.style.top = (e.clientY - 20) + 'px';
            ripple.style.width = ripple.style.height = '40px';
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });

        // 404数字点击彩蛋
        const errorNumber = document.querySelector('.error-number');
        let shakeCount = 0;
        errorNumber.addEventListener('click', function() {
            errorNumber.classList.add('shake');
            shakeCount++;
            setTimeout(() => errorNumber.classList.remove('shake'), 500);
            if (shakeCount === 5) {
                document.querySelector('.error-404').classList.add('rainbow-mode');
                showKeyboardTips('🌈 你发现了隐藏彩蛋！');
            }
        });

        // 可爱角色点击彩蛋
        const cuteCharacter = document.querySelector('.cute-character');
        let dizzyCount = 0;
        cuteCharacter.addEventListener('click', function() {
            cuteCharacter.classList.add('dizzy');
            dizzyCount++;
            setTimeout(() => cuteCharacter.classList.remove('dizzy'), 1000);
            if (dizzyCount === 3) {
                document.querySelector('.character-body').classList.add('happy');
                showKeyboardTips('😊 角色变开心啦！');
            }
        });

        // 键盘提示
        function showKeyboardTips(msg) {
            let tips = document.querySelector('.keyboard-tips');
            if (!tips) {
                tips = document.createElement('div');
                tips.className = 'keyboard-tips';
                document.body.appendChild(tips);
            }
            tips.innerHTML = msg + '<br><kbd>ESC</kbd>回首页 <kbd>F</kbd>搜索 <kbd>R</kbd>彩虹';
            tips.classList.add('show');
            clearTimeout(tips._timer);
            tips._timer = setTimeout(() => tips.classList.remove('show'), 3000);
        }
        // 初始提示
        showKeyboardTips('试试 <kbd>ESC</kbd>回首页 <kbd>F</kbd>搜索 <kbd>R</kbd>彩虹');
    });

    // 窗口大小改变时重新创建星星
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const starsContainer = document.getElementById('starsContainer');
            if (starsContainer) {
                starsContainer.innerHTML = '';
                createStars();
            }
        }, 250);
    });
})();
</script>

{% meting "1438820072" "netease" "song" %}
