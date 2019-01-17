var today = new Date();
var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
var month = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var year = today.getFullYear();
var today_year = today.getYear();
var today_day = today.getDay();
var today_date = today.getDate();
var month_day = today.getMonth();
var todayLabel = week[today_day];
var monthLabel = month[month_day];
var todayMonth = new Date(year, month_day, 1).getDay(); //이번달 1일의 시작요일
var lastday = new Date(year, month_day+1, 0); //다음달 1일의 전일 이번달 마지막 날의 시간
var lastDate = new Date(lastday).getDate(); //이번달 마지막 날의 날짜 ex 31 30 
var head = year + '-' + monthLabel;


function prevCalendar() {//이전 달
         $('td').text('');
         today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
         year = today.getFullYear();
         month_day = today.getMonth();
         todayMonth = new Date(year, month_day, 1).getDay();
         lastDate = new Date(lastday).getDate();
         monthLabel = month[month_day];
         if(month_day == '-1'){
             month_day = 11;
             todayMonth = new Date(year, month_day, 1).getDay();
             lastDate = new Date(lastday).getDate();
             monthLabel = month[month_day];
             head = year + '-' + monthLabel;
             $('h1').text(head);
             setCalendar ()
         }else {
             todayMonth = new Date(year, month_day, 1).getDay();
             lastDate = new Date(lastday).getDate();
             monthLabel = month[month_day];
             head = year + '-' + monthLabel;
             $('h1').text(head);
             setCalendar ()
         }
        
        }

function nextCalendar() {//다음 달
         $('td').text('');
         today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
         year = today.getFullYear();
         month_day = today.getMonth();
         todayMonth = new Date(year, month_day, 1).getDay();
         lastDate = new Date(lastday).getDate();
         monthLabel = month[month_day];
         if(month_day == '13'){
             month_day = 0;
             todayMonth = new Date(year, month_day, 1).getDay();
             lastDate = new Date(lastday).getDate();
             monthLabel = month[month_day];
             head = year + '-' + monthLabel;             
             $('h1').text(head);
             $('#todatD').val(year + '-' + (month_day + 1));
             setCalendar ();
         }else {
             todayMonth = new Date(year, month_day, 1).getDay();
             lastDate = new Date(lastday).getDate();
             monthLabel = month[month_day];
             head = year + '-' + monthLabel;
             $('h1').text(head);
             $('#todatD').val(year + '-' + (month_day + 1));
             setCalendar ()
         }
        }

function setCalendar () {
    var x = todayMonth;
    $('#todatD').val(year + '-' + (month_day + 1));
    for (var i = 1; i <= lastDate; i++  ) {
        $('td').eq(x).text(i);
        x = x+1;
    }
}

setCalendar();

$('h1').text(head);

$('td').eq(today_date+1).addClass('on');

$('td').click(function(){
    $('td').removeClass('on');
    $(this).addClass('on');
    var todayDate = $(this).text();
    var todayD = $('#todatD').val();
    var todayName = todayD + '-' + todayDate ;
    alert(todayName);
})



$('#prev').click( function(){
    prevCalendar()
});

$('#next').click( function(){
    nextCalendar()
});


