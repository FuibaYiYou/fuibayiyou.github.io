// 时间计算函数
function setTime() {
    // Create date (May 16, 2022 12:09:55 UTC)
    var create_time = new Date(Date.UTC(2022, 4, 16, 12, 9, 55));
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