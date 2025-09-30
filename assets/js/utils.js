document.addEventListener('DOMContentLoaded', function() {
    function setTime() {
        // Create date (April 6, 2019 12:09:55 UTC)
        var create_time = new Date(Date.UTC(2019, 3, 6, 12, 9, 55));
        var current_time = new Date();
        var diff = Math.floor((current_time - create_time) / 1000);
        var years = current_time.getFullYear() - create_time.getFullYear();
        var month_diff = current_time.getMonth() - create_time.getMonth();
        if (month_diff < 0 || (month_diff === 0 && current_time.getDate() < create_time.getDate())) {
            years--;
        }
        var months = current_time.getMonth() - create_time.getMonth();
        if (months < 0) {
            months += 12;
        }
        if (current_time.getDate() < create_time.getDate()) {
            months--;
        }
        var create_date = new Date(create_time);
        create_date.setFullYear(current_time.getFullYear(), current_time.getMonth(), create_time.getDate());
        var days = Math.floor((current_time - create_date) / (1000 * 60 * 60 * 24));
        if (days < 0) {
            days += new Date(current_time.getFullYear(), current_time.getMonth(), 0).getDate();
        }
        var hours = Math.floor(diff / 3600) % 24;
        var minutes = Math.floor(diff / 60) % 60;
        var seconds = diff % 60;
        var currentTimeHtml = years + '年' + months + '月' + days + '天' + 
                              hours + '时' + minutes + '分' + seconds + '秒';
        
        var timeElement = document.getElementById("htmer_time");
        if (timeElement) {
            timeElement.innerHTML = currentTimeHtml;
        }
    }
    
    setInterval(setTime, 1000);
    setTime(); // Initial call

    function checkNationalDayAndPlayMusic() {
        const today = new Date();
        const currentMonth = today.getMonth() + 1; // 月份从0开始
        const currentDay = today.getDate();
        const qqMusicPlayer = document.getElementById('nationalDayMusicPlayer');
        const regularPlayer1 = document.getElementById('regularPlayer1');
        const regularPlayer2 = document.getElementById('regularPlayer2');
        const springFestivalPlayer = document.getElementById('springFestivalPlayer');
        
        if (currentMonth === 10 && currentDay === 1) {
            if (qqMusicPlayer) {
                qqMusicPlayer.style.display = 'block';
                try {
                    const newIframe = document.createElement('iframe');
                    newIframe.frameBorder = 'no';
                    newIframe.border = '0';
                    newIframe.marginWidth = '0';
                    newIframe.marginHeight = '0';
                    newIframe.width = '320';
                    newIframe.height = '65';
                    newIframe.src = 'https://i.y.qq.com/n2/m/outchain/player/index.html?songid=241176570&songtype=0&autoplay=1';
                    qqMusicPlayer.innerHTML = '';
                    qqMusicPlayer.appendChild(newIframe);
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
            if (regularPlayer1) regularPlayer1.style.display = 'none';
            if (regularPlayer2) regularPlayer2.style.display = 'none';
            if (springFestivalPlayer) springFestivalPlayer.style.display = 'none';
        } else {
            if (qqMusicPlayer) {
                qqMusicPlayer.style.display = 'none';
            }
        }
    }

    function checkOctober7thAndTogglePlayer() {
        const today = new Date();
        const currentMonth = today.getMonth() + 1; // 月份从0开始
        const currentDay = today.getDate();
        const targetPlayer = document.getElementById('october7thPlayer');
        if (currentMonth === 10 && currentDay === 7) {
            if (targetPlayer) {
                targetPlayer.style.display = 'block';
            }
        } else {
            if (targetPlayer) {
                targetPlayer.style.display = 'none';
            }
        }
    }

    checkNationalDayAndPlayMusic();
    checkOctober7thAndTogglePlayer();
    setInterval(checkNationalDayAndPlayMusic, 86400000);
    setInterval(checkOctober7thAndTogglePlayer, 86400000);
});