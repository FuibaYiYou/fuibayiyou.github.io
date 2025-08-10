// 检测是否为移动设备
function isMobile() {
    return window.innerWidth < 768;
}

// 检测当前时间段（6点-18点为白天，否则为晚上）
function isDayTime() {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18;
}

// 设置背景图和颜色模式
function setBackground(isLightMode) {
    const body = document.body;
    const isMobileDevice = isMobile();
    // 如果传入了模式参数则使用，否则根据时间自动判断
    const lightMode = isLightMode !== undefined ? isLightMode : isDayTime();
    
    // 设置背景图
    let bgImage;
    if (isMobileDevice) {
        bgImage = lightMode ? 'mobile-light.jpg' : 'mobile-dark.jpg';
    } else {
        bgImage = lightMode ? 'desktop-light.jpg' : 'desktop-dark.jpg';
    }
    
    // 设置颜色模式
    const mode = lightMode ? 'light' : 'dark';
    body.className = mode;
    body.style.backgroundImage = `url('${bgImage}')`;

    // 更新按钮图标
    document.querySelector('.sun').style.display = lightMode ? 'inline' : 'none';
    document.querySelector('.moon').style.display = lightMode ? 'none' : 'inline';
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化设置
    setBackground();

    // 主题切换按钮事件
    document.getElementById('themeToggle').addEventListener('click', () => {
        const isLight = document.body.classList.contains('light');
        setBackground(!isLight); // 切换模式
    });
});

// 监听窗口大小变化，重新适配
window.addEventListener('resize', () => {
    // 保持当前模式不变，只更新设备类型导致的背景图变化
    const isLight = document.body.classList.contains('light');
    setBackground(isLight);
});

// 每小时检查一次时间，自动更新（如果没有手动切换过）
setInterval(() => {
    // 只有当当前模式与时间模式一致时才自动更新
    const currentIsLight = document.body.classList.contains('light');
    const timeIsLight = isDayTime();
    if (currentIsLight === timeIsLight) {
        setBackground(timeIsLight);
    }
}, 3600000);

// 欢迎提示
window.onload = function() {
    alert('欢迎回来');
};