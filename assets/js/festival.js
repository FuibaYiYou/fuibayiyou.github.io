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

}

document.addEventListener('DOMContentLoaded', function() {
    toggleLanternsByDate();
    setInterval(toggleLanternsByDate, 86400000);
});