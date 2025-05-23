// 动态背景壁纸加载
document.addEventListener('DOMContentLoaded', function () {
    // 判断设备类型
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // 根据设备类型选择不同的壁纸尺寸和API
    const apiUrl = isMobile
        ? 'https://api.btstu.cn/sjbz/api.php?lx=m_dongman&format=json' // 手机动漫壁纸
        : 'https://api.btstu.cn/sjbz/api.php?lx=dongman&format=json';   // 电脑动漫壁纸

    // 获取壁纸
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.imgurl) {
                // 应用壁纸作为背景
                applyWallpaper(data.imgurl);
            } else {
                console.error('Failed to load wallpaper from API');
                // 使用默认背景
                useDefaultWallpaper();
            }
        })
        .catch(error => {
            console.error('Error fetching wallpaper:', error);
            // 获取失败时使用默认背景
            useDefaultWallpaper();
        });
});

// 应用壁纸作为背景
function applyWallpaper(imgUrl) {
    const imgElement = document.createElement('div');
    imgElement.id = 'dynamic-background';
    imgElement.style.backgroundImage = `url(${imgUrl})`;
    imgElement.style.position = 'fixed';
    imgElement.style.top = '0';
    imgElement.style.left = '0';
    imgElement.style.width = '100%';
    imgElement.style.height = '100%';
    imgElement.style.zIndex = '-2';
    imgElement.style.backgroundSize = 'cover';
    imgElement.style.backgroundPosition = 'center';
    imgElement.style.backgroundRepeat = 'no-repeat';
    imgElement.style.opacity = '0.3'; // 设置透明度避免影响内容可读性
    imgElement.style.transition = 'opacity 1s ease';

    document.body.prepend(imgElement);

    // 添加图片载入动画
    setTimeout(() => {
        imgElement.style.opacity = '0.5';
    }, 100);
}

// 使用默认背景
function useDefaultWallpaper() {
    const defaultImageUrl = '/img/bg/bg.jpg';
    applyWallpaper(defaultImageUrl);
}
