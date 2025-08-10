// 检测所有IE版本（包括IE6-11）
const isIE = /*@cc_on!@*/false || !!document.documentMode;

if (isIE) {
  window.location.href = "ie.html"; // 确保路径正确
}