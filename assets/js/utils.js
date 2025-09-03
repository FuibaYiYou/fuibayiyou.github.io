// 时间计算函数
function setTime() {
    // Create date (April 6, 2019 12:09:55 UTC)
    var create_time = new Date(Date.UTC(2019, 3, 6, 12, 9, 55));
    var current_time = new Date();
    
    // Calculate total difference in seconds
    var diff = Math.floor((current_time - create_time) / 1000);
    
    // Calculate years
    var years = current_time.getFullYear() - create_time.getFullYear();
    var month_diff = current_time.getMonth() - create_time.getMonth();
    if (month_diff < 0 || (month_diff === 0 && current_time.getDate() < create_time.getDate())) {
        years--;
    }
    
    // Calculate months
    var months = current_time.getMonth() - create_time.getMonth();
    if (months < 0) {
        months += 12;
    }
    if (current_time.getDate() < create_time.getDate()) {
        months--;
    }
    
    // Calculate days
    var create_date = new Date(create_time);
    create_date.setFullYear(current_time.getFullYear(), current_time.getMonth(), create_time.getDate());
    var days = Math.floor((current_time - create_date) / (1000 * 60 * 60 * 24));
    if (days < 0) {
        days += new Date(current_time.getFullYear(), current_time.getMonth(), 0).getDate();
    }
    
    // Calculate hours, minutes, seconds
    var hours = Math.floor(diff / 3600) % 24;
    var minutes = Math.floor(diff / 60) % 60;
    var seconds = diff % 60;
    
    // Format the output
    var currentTimeHtml = years + '年' + months + '月' + days + '天' + 
                          hours + '时' + minutes + '分' + seconds + '秒';
    
    document.getElementById("htmer_time").innerHTML = currentTimeHtml;
}

setInterval(setTime, 1000);
setTime(); // Initial call

// 检查是否为10月1日并控制QQ音乐播放
function checkNationalDayAndPlayMusic() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // 月份从0开始
    const currentDay = today.getDate();
    
    // QQ音乐播放器元素
    const qqMusicPlayer = document.getElementById('nationalDayMusicPlayer');
    
    // 检查是否为10月1日
    if (currentMonth === 10 && currentDay === 1) {
        // 10月1日，显示播放器并尝试播放
        if (qqMusicPlayer) {
            qqMusicPlayer.style.display = 'block';
            
            // 尝试调整音量（注意：由于浏览器安全限制，可能无法直接设置音量）
            // 这里添加音量控制的逻辑，以Windows电脑参考10%声音大小
            try {
                // 创建一个新的iframe元素替换原有的，确保自动播放
                const newIframe = document.createElement('iframe');
                newIframe.frameBorder = 'no';
                newIframe.border = '0';
                newIframe.marginWidth = '0';
                newIframe.marginHeight = '0';
                newIframe.width = '320';
                newIframe.height = '65';
                
                // 添加autoplay参数到URL
                newIframe.src = 'https://i.y.qq.com/n2/m/outchain/player/index.html?songid=241176570&songtype=0&autoplay=1';
                
                // 替换原有的iframe
                qqMusicPlayer.innerHTML = '';
                qqMusicPlayer.appendChild(newIframe);
                
                // 尝试使用Web Audio API控制系统音量
                // 注意：这只是一个尝试，由于浏览器安全限制，可能无法直接控制系统音量
                try {
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    const gainNode = audioContext.createGain();
                    gainNode.gain.value = 0.1; // 设置为10%音量
                } catch (e) {
                    console.log('无法直接控制系统音量，建议用户手动调整');
                }
            } catch (e) {
                console.error('播放音乐时出错:', e);
            }
        }
    } else {
        // 非10月1日，隐藏播放器
        if (qqMusicPlayer) {
            qqMusicPlayer.style.display = 'none';
        }
    }
}

// 检查是否为10月7日并控制指定的播放器显示/隐藏
function checkOctober7thAndTogglePlayer() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // 月份从0开始
    const currentDay = today.getDate();
    
    // 获取目标播放器元素
    const targetPlayer = document.getElementById('october7thPlayer');
    
    // 检查是否为10月7日
    if (currentMonth === 10 && currentDay === 7) {
        // 10月7日，显示播放器
        if (targetPlayer) {
            targetPlayer.style.display = 'block';
        }
    } else {
        // 非10月7日，隐藏播放器
        if (targetPlayer) {
            targetPlayer.style.display = 'none';
        }
    }
}

// 页面加载完成后执行检查
document.addEventListener('DOMContentLoaded', function() {
    checkNationalDayAndPlayMusic();
    checkOctober7thAndTogglePlayer();
    
    // 每天检查一次
    setInterval(checkNationalDayAndPlayMusic, 86400000);
    setInterval(checkOctober7thAndTogglePlayer, 86400000);
});