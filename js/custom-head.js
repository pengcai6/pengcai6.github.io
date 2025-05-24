// 头部优化脚本
(function() {
    'use strict';
    
    // DNS预解析 - 提前解析CDN域名
    const dnsPrefetch = [
        'https://cdn.jsdelivr.net',
        'https://unpkg.com',
        'https://registry.npmmirror.com',
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
    ];
    
    dnsPrefetch.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
    });
    
    // 预连接关键资源
    const preconnect = [
        'https://cdn.jsdelivr.net',
        'https://fonts.googleapis.com'
    ];
    
    preconnect.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    });
    
    // 关键CSS内联优化标记
    document.documentElement.classList.add('js-enabled');
    
    // 设置性能监控
    if ('performance' in window && 'mark' in performance) {
        performance.mark('head-script-start');
    }
    
})();