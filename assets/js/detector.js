// 检测是否为IE浏览器
const isIE = !!window.MSInputMethodContext || !!document.documentMode;
if (isIE) {
    window.location.href = "Internet Explorer.html";
}