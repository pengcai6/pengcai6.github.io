// Service Worker for Progressive Web App caching
// 提供离线缓存和资源优化

const CACHE_NAME = 'blog-cache-v1';
const STATIC_CACHE = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v1';

// 需要缓存的静态资源
const STATIC_ASSETS = [
    '/',
    '/css/main.css',
    '/js/next-boot.js',
    '/js/utils.js',
    '/images/avatar.png',
    '/images/logo.svg'
];

// 需要缓存的CDN资源
const CDN_ASSETS = [
    'https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js',
    'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css'
];

// 安装Service Worker
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    
    event.waitUntil(
        Promise.all([
            // 缓存静态资源
            caches.open(STATIC_CACHE).then(cache => {
                return cache.addAll(STATIC_ASSETS);
            }),
            // 缓存CDN资源
            caches.open(CDN_ASSETS).then(cache => {
                return cache.addAll(CDN_ASSETS);
            })
        ]).then(() => {
            console.log('Service Worker installed successfully');
            return self.skipWaiting();
        })
    );
});

// 激活Service Worker
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // 删除旧版本缓存
                    if (cacheName !== STATIC_CACHE && 
                        cacheName !== DYNAMIC_CACHE && 
                        cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('Service Worker activated');
            return self.clients.claim();
        })
    );
});

// 拦截网络请求
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    
    // 只处理GET请求
    if (request.method !== 'GET') {
        return;
    }
    
    // 静态资源缓存策略：缓存优先
    if (STATIC_ASSETS.includes(url.pathname) || 
        url.pathname.startsWith('/css/') ||
        url.pathname.startsWith('/js/') ||
        url.pathname.startsWith('/images/')) {
        
        event.respondWith(
            caches.match(request).then(response => {
                return response || fetch(request).then(fetchResponse => {
                    // 缓存新的静态资源
                    const responseClone = fetchResponse.clone();
                    caches.open(STATIC_CACHE).then(cache => {
                        cache.put(request, responseClone);
                    });
                    return fetchResponse;
                });
            })
        );
        return;
    }
    
    // CDN资源缓存策略：缓存优先，长期缓存
    if (url.hostname.includes('cdn.jsdelivr.net') ||
        url.hostname.includes('unpkg.com') ||
        url.hostname.includes('registry.npmmirror.com')) {
        
        event.respondWith(
            caches.match(request).then(response => {
                if (response) {
                    return response;
                }
                
                return fetch(request).then(fetchResponse => {
                    // 只缓存成功的响应
                    if (fetchResponse.status === 200) {
                        const responseClone = fetchResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(request, responseClone);
                        });
                    }
                    return fetchResponse;
                });
            })
        );
        return;
    }
    
    // 页面缓存策略：网络优先，失败时使用缓存
    if (request.headers.get('accept').includes('text/html')) {
        event.respondWith(
            fetch(request).then(response => {
                // 缓存成功的页面响应
                const responseClone = response.clone();
                caches.open(DYNAMIC_CACHE).then(cache => {
                    cache.put(request, responseClone);
                });
                return response;
            }).catch(() => {
                // 网络失败时使用缓存
                return caches.match(request).then(response => {
                    return response || caches.match('/404/');
                });
            })
        );
        return;
    }
    
    // 其他资源：网络优先
    event.respondWith(
        fetch(request).catch(() => {
            return caches.match(request);
        })
    );
});

// 后台同步（如果支持）
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        console.log('Background sync triggered');
        // 这里可以添加后台同步逻辑
    }
});

// 推送通知支持
self.addEventListener('push', event => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/images/avatar.png',
            badge: '/images/favicon-32x32-next.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            }
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});
