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
});