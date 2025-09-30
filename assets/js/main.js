function isMobile() {
    return window.innerWidth < 768;
}
function isDayTime() {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18;
}
function setBackground(isLightMode) {
    const body = document.body;
    const isMobileDevice = isMobile();
    const lightMode = isLightMode !== undefined ? isLightMode : isDayTime();
    let bgImage;
    if (isMobileDevice) {
        bgImage = lightMode ? 'mobile-light.jpg' : 'mobile-dark.jpg';
    } else {
        bgImage = lightMode ? 'desktop-light.jpg' : 'desktop-dark.jpg';
    }
    const mode = lightMode ? 'light' : 'dark';
    body.className = mode;
    body.style.backgroundImage = `url('${bgImage}')`;
    document.querySelector('.sun').style.display = lightMode ? 'inline' : 'none';
    document.querySelector('.moon').style.display = lightMode ? 'none' : 'inline';
}
document.addEventListener('DOMContentLoaded', function() {
    setBackground();
    document.getElementById('themeToggle').addEventListener('click', () => {
        const isLight = document.body.classList.contains('light');
        setBackground(!isLight); // 切换模式
    });
});
window.addEventListener('resize', () => {
    const isLight = document.body.classList.contains('light');
    setBackground(isLight);
});
setInterval(() => {
    const currentIsLight = document.body.classList.contains('light');
    const timeIsLight = isDayTime();
    if (currentIsLight !== timeIsLight) {
        setBackground(timeIsLight);
    }
}, 3600000);
function lazyLoadIframes() {
    const iframes = document.querySelectorAll('iframe[data-src]');
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 100 &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    }
    function loadVisibleIframes() {
        iframes.forEach(iframe => {
            if (isInViewport(iframe) && !iframe.src) {
                iframe.src = iframe.dataset.src;
            }
        });
    }
    setTimeout(loadVisibleIframes, 1000); // 页面加载后1秒开始加载
    window.addEventListener('scroll', loadVisibleIframes);
    window.addEventListener('resize', loadVisibleIframes);
}
document.addEventListener('DOMContentLoaded', lazyLoadIframes);