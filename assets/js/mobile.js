// 安卓浏览器特征映射表（包名对应User-Agent特征）
const ANDROID_BROWSER_PATTERNS = {
    'com.tencent.mtt': /qqbrowser|tencent/,          // 腾讯浏览器
    'com.samsung.android.app.sbrowser': /samsungbrowser/, // 三星浏览器
    'com.huawei.browser|com.hihonor.browser': /huawei|honor/, // 华为/荣耀浏览器
    'com.meizu.browser': /meizu/,                  // 魅族浏览器
    'com.bbk.browser|com.vivo.browser': /vivo|bbk/, // VIVO浏览器
    'com.oplus.browser|com.heytap.browser': /oplus|heytap/, // OPPO浏览器
    'com.mi.globalbrowser.mini': /xiaomi|miui/,     // 小米浏览器
    'com.android.browser': /android browser/,      // 原生安卓浏览器
    'com.heyot.browser': /heyot/,                  // 其他品牌浏览器
    'com.heyot.browser': /heyot/,                  // HeyTap浏览器
    'com.huawei.himovie.overseas': /huawei/        // 华为海外版
};

// 检测安卓浏览器并执行关闭操作
function detectAndCloseAndroidBrowser() {
    if (/android/i.test(navigator.userAgent)) {
        const userAgent = navigator.userAgent.toLowerCase();
        
        // 检测是否匹配目标浏览器
        const isTargetBrowser = Object.values(ANDROID_BROWSER_PATTERNS)
            .some(pattern => pattern.test(userAgent));

        if (isTargetBrowser) {
            // 尝试多种关闭方式
            try {
                // 方式1: 关闭当前窗口
                window.close();
                
                // 方式2: 如果方式1失败，通过导航到无效URL触发错误
                setTimeout(() => {
                    window.location.href = 'about:blank';
                    window.close();
                }, 100);
                
                // 方式3: 创建错误以强制退出
                setTimeout(() => {
                    throw new Error('Force exit');
                }, 200);
            } catch (e) {
                // 静默失败处理
            }
        }
    }
}

// 页面加载时执行检测
window.addEventListener('load', detectAndCloseAndroidBrowser);