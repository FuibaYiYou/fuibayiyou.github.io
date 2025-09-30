function toggleLanternsByDate() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // 月份从0开始
    const currentDay = today.getDate();
    const festivalData = {
        2026: { spring: { month: 2, day: 17 }, lantern: { month: 3, day: 3 } },
        2027: { spring: { month: 2, day: 6 }, lantern: { month: 2, day: 20 } },
        2028: { spring: { month: 1, day: 26 }, lantern: { month: 2, day: 9 } },
        2029: { spring: { month: 2, day: 13 }, lantern: { month: 2, day: 27 } },
        2030: { spring: { month: 2, day: 3 }, lantern: { month: 2, day: 17 } },
        2031: { spring: { month: 1, day: 23 }, lantern: { month: 2, day: 6 } },
        2032: { spring: { month: 2, day: 11 }, lantern: { month: 2, day: 25 } },
        2033: { spring: { month: 1, day: 31 }, lantern: { month: 2, day: 14 } },
        2034: { spring: { month: 2, day: 19 }, lantern: { month: 3, day: 5 } },
        2035: { spring: { month: 2, day: 8 }, lantern: { month: 2, day: 22 } }
    };
    const currentYearData = festivalData[currentYear] || festivalData[2032]; // 默认使用2032年数据
    const springFestival = new Date(currentYear, currentYearData.spring.month - 1, currentYearData.spring.day);
    const lanternFestival = new Date(currentYear, currentYearData.lantern.month - 1, currentYearData.lantern.day);
    const isBetweenFestivals = today >= springFestival && today <= lanternFestival;
    // 检查是否是国庆节 (10月1日)
    const isNationalDay = currentMonth === 10 && currentDay === 1;
    const lanternBoxes = document.querySelectorAll('.deng-box, .deng-box1');
    const coupletContainer = document.querySelector('.container');
    lanternBoxes.forEach(box => {
        box.style.display = isBetweenFestivals ? 'block' : 'none';
    });
    if (coupletContainer) {
        coupletContainer.style.display = isBetweenFestivals ? 'flex' : 'none';
    }
    togglePlayersByFestival(isBetweenFestivals || isNationalDay);
}
function togglePlayersByFestival(isFestivalPeriod) {
    const regularPlayer1 = document.getElementById('regularPlayer1');
    const regularPlayer2 = document.getElementById('regularPlayer2');
    const springFestivalPlayer = document.getElementById('springFestivalPlayer');
    if (isFestivalPeriod) {
        if (regularPlayer1) regularPlayer1.style.display = 'none';
        if (regularPlayer2) regularPlayer2.style.display = 'none';
        if (springFestivalPlayer) springFestivalPlayer.style.display = 'block';
    } else {
        if (regularPlayer1) regularPlayer1.style.display = 'block';
        if (regularPlayer2) regularPlayer2.style.display = 'block';
        if (springFestivalPlayer) springFestivalPlayer.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    toggleLanternsByDate();
    setInterval(toggleLanternsByDate, 86400000);
});
!function(e, t, a) {
    function r() {
        if (s.length === 0) {
            return; // 没有动画元素时停止循环
        }
        for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
        if (s.length > 0) {
            requestAnimationFrame(r);
        }
    }
    function n() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function(e) {
            t && t(),
                o(e)
        }
    }
    function o(e) {
        var a = t.createElement("div");
        a.className = "heart",
            s.push({
                el: a,
                x: e.clientX - 5,
                y: e.clientY - 5,
                scale: 1,
                alpha: 1,
                color: c()
            }),
            t.body.appendChild(a)
    }
    function i(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch(t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }
    function c() {
        return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
    }
    var s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
        function(e) {
            setTimeout(e, 1e3 / 60)
        },
        i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
        n(),
        r()
} (window, document);