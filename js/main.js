let lessonTime={start:[28800,35400,42e3,50400],end:[34500,41100,47700,56100]};$(document).ready((function(){console.log(lessonTime);var e="";for(let s=0;s<lessonTime.start.length;s++)lessonTimeHours=Math.floor(lessonTime.start[s]/3600),lessonTimeMinutes=lessonTime.start[s]%3600/60,e="",lessonTimeHours<10&&(e+="0"),e+=`${lessonTimeHours}:`,lessonTimeMinutes<10&&(e+="0"),e+=`${lessonTimeMinutes}`,$(".time_"+(s+1)).children(".time__start").text(e),lessonTimeHours=Math.floor(lessonTime.end[s]/3600),lessonTimeMinutes=lessonTime.end[s]%3600/60,e="",lessonTimeHours<10&&(e+="0"),e+=`${lessonTimeHours}:`,lessonTimeMinutes<10&&(e+="0"),e+=`${lessonTimeMinutes}`,$(".time_"+(s+1)).children(".time__end").text(e)}));let monthArray=["января","февраля","марта","апреля","мая","июня","илюя","августа","сентября","октября","ноября","декабря"],dayName=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];$(document).ready((function(){var e=new Date;console.log(e);var s=new Date(16304544e5),n=e.getDay();function t(){var s=`Сегодня: ${(e=new Date).getDate()} ${monthArray[e.getMonth()]} ${e.getFullYear()} года (${dayName[n]})`;$(".week__date").text(s)}function o(){var s="Время: ";e.getHours()<10&&(s+="0"),s+=`${e.getHours()}:`,e.getMinutes()<10&&(s+="0"),s+=`${e.getMinutes()}:`,e.getSeconds()<10&&(s+="0"),s+=`${e.getSeconds()}`,$(".week__time").text(s)}$(".day_"+n).children(".day__name").addClass("active"),$(".day_"+n).children(".day__timetable").delay(200).slideDown(300,(function(){$(this).css("display","grid").toggleClass("active")})),$(document).ready(t()),setInterval(t,1e3),$(document).ready(o()),setInterval(o,1e3);var a=e.getTime()-s.getTime(),d=Math.floor(a/6048e5)+1;d%2==0?(console.log("Чётная"),$(".week__even-odd").addClass("even").text("Чётная неделя"),$(".main").addClass("even"),$(".lesson__odd").hide(),$(".lesson__even").css("display","grid")):(console.log("Нечётная"),$(".week__even-odd").children("span").addClass("odd").text("Нечётная неделя"),$(".main").addClass("odd"),$(".lesson__even").hide(),$(".lesson__odd").css("display","grid")),$(".week__even-odd").click((function(){++d%2==0?(console.log("Чётная"),$(".week__even-odd").removeClass("odd").addClass("even").text("Чётная неделя"),$(".odd").removeClass("odd").addClass("even"),$(".lesson__odd").hide(),$(".lesson__even").css("display","grid")):(console.log("Нечётная"),$(".week__even-odd").removeClass("even").addClass("odd").text("Нечётная неделя"),$(".even").removeClass("even").addClass("odd"),$(".lesson__even").hide(),$(".lesson__odd").css("display","grid"))}));var l=3600*e.getHours()+60*e.getMinutes()+e.getSeconds();if(l>lessonTime.start[0]-1&&l<lessonTime.end[lessonTime.end.length-1]+1)for(let e=0;e<lessonTime.end.length;e++)if(l<lessonTime.end[e]){$(".day_"+n).children().children(".lesson_"+(e+1)).addClass("active");break}})),$(document).ready((function(){$(".nav__tab").click((function(e){0==$(this).hasClass("active")&&($(".nav__tab").not(this).removeClass("active"),$(".main__body").fadeOut(300),$(this).addClass("active"),$(this).hasClass("nav__tab__117")?$(".main__body_117").delay(300).fadeIn(300,(function(){$(this).css("display","grid")})):$(".main__body_217").delay(300).fadeIn(300,(function(){$(this).css("display","grid")})))})),$(".day__name").click((function(e){$(this).next().hasClass("active")?$(this).next().slideUp(300):$(this).next().slideDown(300,(function(){$(this).css("display","grid")})),$(this).next().toggleClass("active")}))}));let lessonName={short:["ФРО на АЯ","АИП и ЧФ","ПАП при ОВД","ПП и ТОВД","ЭО","ОПВД","АП и ПНК","МОМАН"],full:["Фразеология радиообмена на английском языке","Авиационная инженерная психология и ЧФ","Предотвращение АП при обслуживании ВД","Правила, процедуры и технология обслуживания воздушного движения","Экономика отрасли","Организация потоков воздушного движения","Авиационные приборы и ПНК","Метеорологическое обеспечение международной АН"]};$(document).ready((function(){$(".lesson__name").click((function(e){for(let e=0;e<lessonName.short.length;e++)switch($(this).text()){case lessonName.short[e]:$(this).fadeOut(100,(function(){$(this).text(lessonName.full[e]).fadeIn(100)}));break;case lessonName.full[e]:$(this).fadeOut(100,(function(){$(this).text(lessonName.short[e]).fadeIn(100)}))}}))})),$(document).ready((function(){$(".lesson__type").each((function(){"ЛК"==$(this).text()?$(this).parent(".lesson").addClass("lesson_lection"):$(this).parent(".lesson").addClass("lesson_practice")}))}));