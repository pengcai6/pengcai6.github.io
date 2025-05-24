// 引入CDN优化脚本
document.addEventListener('DOMContentLoaded', function() {
    // 动态加载CDN优化脚本
    const script = document.createElement('script');
    script.src = '/js/cdn-optimize.js';
    script.async = true;
    document.head.appendChild(script);
    
    // 资源预取优化
    const preloadLinks = [
        { href: '/css/main.css', as: 'style' },
        { href: '/js/next-boot.js', as: 'script' },
        { href: '/images/avatar.png', as: 'image' }
    ];
    
    preloadLinks.forEach(link => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = link.href;
        preloadLink.as = link.as;
        document.head.appendChild(preloadLink);
    });
    
    // 防抖优化滚动事件
    let ticking = false;
    function updateOnScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                // 滚动优化逻辑
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // 注册Service Worker进行缓存优化
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker注册成功:', registration.scope);
                    
                    // 检查更新
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                console.log('检测到新版本，建议刷新页面');
                                // 可以在这里显示更新提示
                            }
                        });
                    });
                })
                .catch(error => {
                    console.log('Service Worker注册失败:', error);
                });
        });
    }
    
    // 网络状态监控
    function updateOnlineStatus() {
        const status = navigator.onLine ? 'online' : 'offline';
        document.body.classList.toggle('offline', !navigator.onLine);
        console.log('网络状态:', status);
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
    
    window.addEventListener('scroll', updateOnScroll, { passive: true });
});