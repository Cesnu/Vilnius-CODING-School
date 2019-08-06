"use strict";

console.log('JS Working');
// SETTING CURRENT WEATHER VARIABLES
var apiWeather = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Vilnius';
var cityId = '593116';
var units = '&units=metric';
var apiKey = '&APPID=2e4d6f38b9b90b3f67b577c7d82af3e6';

var url = apiWeather + city + units + apiKey;
// console.log(url);
var link = 'https://openweathermap.org/city/' + cityId;
document.getElementById('openWeather').setAttribute('href', link);
// TAKING JSON DATA
fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(jsonData){
		console.log(jsonData);
// ADDING DATA TO HTML
	document.getElementById('city').innerHTML = jsonData.name;
	document.getElementById('current-icon').src = 'http://openweathermap.org/img/wn/' + jsonData.weather[0].icon + "@2x.png";
	document.getElementById('current-temp').innerHTML = jsonData.main.temp.toFixed() + "&deg;C";
	document.getElementById('current-desc').innerHTML = jsonData.weather[0].description.charAt(0).toUpperCase() +
	jsonData.weather[0].description.substring(1);
	})

// SETTING 5 DAY/3 HOUR FORECAST VARIABLES
var apiForecast = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var url = apiForecast + city + units + apiKey;

fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(jsonData){
		console.log(jsonData);

	var weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var weekD = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	// var date = new Date();
	// console.log(date);
	// var dayName = weekDays[date.getDay()];
	// console.log(dayName);
	var date = new Date(jsonData.list[0].dt_txt);
	document.getElementById('day').innerHTML = weekDays[date.getDay()];
	document.getElementById('d').innerHTML = weekD[date.getDay()];
	document.getElementById('icon').src = 'http://openweathermap.org/img/wn/' + jsonData.list[0].weather[0].icon + ".png";
	var arr_max = [jsonData.list[0].main.temp_max,jsonData.list[1].main.temp_max,jsonData.list[2].main.temp_max,jsonData.list[3].main.temp_max,
	jsonData.list[4].main.temp_max,jsonData.list[5].main.temp_max,jsonData.list[6].main.temp_max,jsonData.list[7].main.temp_max];
	var arr_min = [jsonData.list[0].main.temp_min,jsonData.list[1].main.temp_min,jsonData.list[2].main.temp_min,jsonData.list[3].main.temp_min,
	jsonData.list[4].main.temp_min,jsonData.list[5].main.temp_min,jsonData.list[6].main.temp_min,jsonData.list[7].main.temp_min,];
	document.getElementById('temp-day').innerHTML = Math.max(...arr_max).toFixed() + "&deg;C";
	document.getElementById('temp-night').innerHTML = Math.min(...arr_min).toFixed() + "&deg;C";

	var date = new Date(jsonData.list[8].dt_txt);
	document.getElementById('day-1').innerHTML = weekDays[date.getDay()];
	document.getElementById('d-1').innerHTML = weekD[date.getDay()];
	document.getElementById('icon-1').src = 'http://openweathermap.org/img/wn/' + jsonData.list[8].weather[0].icon + ".png";
	var arr_max = [jsonData.list[8].main.temp_max,jsonData.list[9].main.temp_max,jsonData.list[10].main.temp_max,jsonData.list[11].main.temp_max,
	jsonData.list[12].main.temp_max,jsonData.list[13].main.temp_max,jsonData.list[14].main.temp_max,jsonData.list[15].main.temp_max];
	var arr_min = [jsonData.list[8].main.temp_min,jsonData.list[9].main.temp_min,jsonData.list[10].main.temp_min,jsonData.list[11].main.temp_min,
	jsonData.list[12].main.temp_min,jsonData.list[13].main.temp_min,jsonData.list[14].main.temp_min,jsonData.list[15].main.temp_min,];
	document.getElementById('temp-day-1').innerHTML = Math.max(...arr_max).toFixed() + "&deg;C";
	document.getElementById('temp-night-1').innerHTML = Math.min(...arr_min).toFixed() + "&deg;C";

	var date = new Date(jsonData.list[16].dt_txt);
	document.getElementById('day-2').innerHTML = weekDays[date.getDay()];
	document.getElementById('d-2').innerHTML = weekD[date.getDay()];
	document.getElementById('icon-2').src = 'http://openweathermap.org/img/wn/' + jsonData.list[16].weather[0].icon + ".png";
	var arr_max = [jsonData.list[16].main.temp_max,jsonData.list[17].main.temp_max,jsonData.list[18].main.temp_max,jsonData.list[19].main.temp_max,
	jsonData.list[20].main.temp_max,jsonData.list[21].main.temp_max,jsonData.list[22].main.temp_max,jsonData.list[23].main.temp_max];
	var arr_min = [jsonData.list[16].main.temp_min,jsonData.list[17].main.temp_min,jsonData.list[18].main.temp_min,jsonData.list[19].main.temp_min,
	jsonData.list[20].main.temp_min,jsonData.list[21].main.temp_min,jsonData.list[22].main.temp_min,jsonData.list[23].main.temp_min,];
	document.getElementById('temp-day-2').innerHTML = Math.max(...arr_max).toFixed() + "&deg;C";
	document.getElementById('temp-night-2').innerHTML = Math.min(...arr_min).toFixed() + "&deg;C";

	var date = new Date(jsonData.list[24].dt_txt);
	document.getElementById('day-3').innerHTML = weekDays[date.getDay()];
	document.getElementById('d-3').innerHTML = weekD[date.getDay()];
	document.getElementById('icon-3').src = 'http://openweathermap.org/img/wn/' + jsonData.list[24].weather[0].icon + ".png";
	var arr_max = [jsonData.list[24].main.temp_max,jsonData.list[25].main.temp_max,jsonData.list[26].main.temp_max,jsonData.list[27].main.temp_max,
	jsonData.list[28].main.temp_max,jsonData.list[29].main.temp_max,jsonData.list[30].main.temp_max,jsonData.list[31].main.temp_max];
	var arr_min = [jsonData.list[24].main.temp_min,jsonData.list[25].main.temp_min,jsonData.list[26].main.temp_min,jsonData.list[27].main.temp_min,
	jsonData.list[28].main.temp_min,jsonData.list[29].main.temp_min,jsonData.list[30].main.temp_min,jsonData.list[31].main.temp_min,];
	document.getElementById('temp-day-3').innerHTML = Math.max(...arr_max).toFixed() + "&deg;C";
	document.getElementById('temp-night-3').innerHTML = Math.min(...arr_min).toFixed() + "&deg;C";;

	var date = new Date(jsonData.list[32].dt_txt);
	document.getElementById('day-4').innerHTML = weekDays[date.getDay()];
	document.getElementById('d-4').innerHTML = weekD[date.getDay()];
	document.getElementById('icon-4').src = 'http://openweathermap.org/img/wn/' + jsonData.list[32].weather[0].icon + ".png";
	var arr_max = [jsonData.list[32].main.temp_max,jsonData.list[33].main.temp_max,jsonData.list[34].main.temp_max,jsonData.list[35].main.temp_max,
	jsonData.list[36].main.temp_max,jsonData.list[37].main.temp_max,jsonData.list[38].main.temp_max,jsonData.list[39].main.temp_max];
	var arr_min = [jsonData.list[32].main.temp_min,jsonData.list[33].main.temp_min,jsonData.list[34].main.temp_min,jsonData.list[35].main.temp_min,
	jsonData.list[36].main.temp_min,jsonData.list[37].main.temp_min,jsonData.list[38].main.temp_min,jsonData.list[39].main.temp_min,];
	document.getElementById('temp-day-4').innerHTML = Math.max(...arr_max).toFixed() + "&deg;C";
	document.getElementById('temp-night-4').innerHTML = Math.min(...arr_min).toFixed() + "&deg;C";
	})