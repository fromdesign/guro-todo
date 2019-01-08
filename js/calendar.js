var today = new Date();
var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
var month = new Array('January','February','March','April','May','June','July','August','September','October','November','December',);
var year = today.getFullYear();
var today_day = today.getDay();
var month_day = today.getMonth();
var todayLabel = week[today_day];
var monthLabel = month[month_day];

var head = year + monthLabel;
$('h1').text(head);

$('#btn_today').click( function(){
    $('#testDate').val(formatDate(today));
});

$('#btn_yesterday').click( function(){
    $('#testDate').val(yesterdayDate(today));
});

$('#btn_tomorrow').click( function(){
    $('#testDate').val(tomorrowDate(today));
});

function formatDate(date) {
    var d = new Date(date),
//        month = '' + (d.getMonth() + 1),
        
        day = '' + d.getDate(),
        year = d.getFullYear();
var todayLabel = week[today_day];
var monthLabel = month[month_day];
 //   if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, monthLabel, day, todayLabel].join('-');
}

function yesterdayDate(date) {
    var d = new Date(date),
//        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() - 1),
        year = d.getFullYear();
var todayLabel = week[today_day - 1];
var monthLabel = month[month_day];
 //   if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, monthLabel, day, todayLabel].join('-');
}

function tomorrowDate(date) {
    var d = new Date(date),
//        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + 1),
        year = d.getFullYear();
var todayLabel = week[today_day + 1];
var monthLabel = month[month_day];
 //   if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, monthLabel, day, todayLabel].join('-');
}