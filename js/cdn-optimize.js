// CDN加速配置文件
// 自动选择最优CDN源

(function() {
    'use strict';
    
    // CDN源列表 - 免费的CDN服务
    const cdnSources = {
        // jsDelivr - 免费且稳定
        jsdelivr: {
            js: 'https://cdn.jsdelivr.net/npm/',
            css: 'https://cdn.jsdelivr.net/npm/',
            font: 'https://cdn.jsdelivr.net/npm/'
        },
        // unpkg - 备用CDN
        unpkg: {
            js: 'https://unpkg.com/',
            css: 'https://unpkg.com/',
            font: 'https://unpkg.com/'
        },
        // 中国境内加速
        npmmirror: {
            js: 'https://registry.npmmirror.com/',
            css: 'https://registry.npmmirror.com/',
            font: 'https://registry.npmmirror.com/'
        }
    };
    
    // 检测最优CDN
    function detectBestCDN() {
        const testUrls = [
            'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js',
            'https://unpkg.com/jquery@3.6.0/dist/jquery.min.js',
            'https://registry.npmmirror.com/jquery/latest/files/dist/jquery.min.js'
        ];
        
        return new Promise((resolve) => {
            let fastest = 'jsdelivr';
            let completed = 0;
            
            testUrls.forEach((url, index) => {
                const startTime = Date.now();
                const img = new Image();
                
                img.onload = img.onerror = () => {
                    const loadTime = Date.now() - startTime;
                    if (loadTime < 1000) { // 如果加载时间小于1秒，选择此CDN
                        fastest = Object.keys(cdnSources)[index];
                    }
                    
                    completed++;
                    if (completed === testUrls.length) {
                        resolve(fastest);
                    }
                };
                
                img.src = url + '?_=' + Date.now();
            });
            
            // 3秒超时，默认使用jsdelivr
            setTimeout(() => resolve('jsdelivr'), 3000);
        });
    }
    
    // 应用CDN优化
    async function applyCDNOptimization() {
        const bestCDN = await detectBestCDN();
        console.log('使用CDN源:', bestCDN);
        
        // 存储到localStorage
        localStorage.setItem('preferred_cdn', bestCDN);
        
        // 这里可以动态替换页面中的CDN链接
        // 但通常在构建时就已经确定了CDN源
    }
    
    // 页面加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyCDNOptimization);
    } else {
        applyCDNOptimization();
    }
    
    // 图片懒加载优化
    function optimizeImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // 浏览器不支持IntersectionObserver时的降级处理
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }
    
    // 预加载关键资源
    function preloadCriticalResources() {
        const criticalResources = [
            '/css/main.css',
            '/js/next-boot.js'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.endsWith('.css') ? 'style' : 'script';
            document.head.appendChild(link);
        });
    }
    
    // 初始化所有优化
    document.addEventListener('DOMContentLoaded', () => {
        optimizeImages();
        preloadCriticalResources();
    });
    
})();
