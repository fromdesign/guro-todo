var today = new Date();
var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
var month = new Array('January','','','','','','','','','','','',);
var today_day = new Date().getDay();

var todayLabel = week[today_day];

$('#btn_today').click( function(){
    $('#testDate').val(formatDate(today));
});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

 //   if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day, todayLabel].join('-');
}