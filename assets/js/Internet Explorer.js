// 检测Internet Explorer浏览器
if (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.indexOf('Trident') !== -1) {
    // 显示不支持提示
    alert('不支持Internet Explorer浏览器。');
    // 关闭当前窗口(IE进程)
    window.close();
}
