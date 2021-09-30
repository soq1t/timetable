"use strict";import{fillHours,fillPassedHours,fillTotalHours,fillRemainHours}from"./modules/hours/createHelpers.js";import{getDate,getWeekIndex}from"./modules/date.js";import{corrections}from"./modules/hours/corrections.js";let settings;localStorage.timetable_settings&&(settings=JSON.parse(localStorage.timetable_settings));let dayIndex=getDate().dayIndex;0==dayIndex&&(dayIndex=6);const weekIndex=getWeekIndex(getDate().date);let hours={117:fillHours(117,dayIndex,weekIndex),217:fillHours(217,dayIndex,weekIndex)};for(let e in hours)for(let t in hours[e])hours[e][t].lection=hours[e][t].lection+corrections[e][t].lection,hours[e][t].practice=hours[e][t].practice+corrections[e][t].practice;console.log(`Неделя №${weekIndex}, День №${dayIndex}`),console.log(hours),fillPassedHours(117,hours),fillPassedHours(217,hours),fillTotalHours(117),fillTotalHours(217),fillRemainHours(117,hours),fillRemainHours(217,hours),settings.defaultGroup?($(`#target_tab_${settings.defaultGroup}`).css("display","flex"),$(`#tab_${settings.defaultGroup}`).addClass("active")):($("#target_tab_117").css("display","flex"),$("#tab_117").addClass("active")),$(".nav__tab").on("click",(function(){if("Расписание"==$(this).text()||$(this).hasClass("active"))return;let e=$(this).attr("id").split("_")[1];$(".nav__tab").removeClass("active"),$(this).addClass("active"),$(".card").fadeOut(250),$(`#target_tab_${e}`).delay(255).fadeIn(250,(function(){$(this).css("display","flex")}))}));