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