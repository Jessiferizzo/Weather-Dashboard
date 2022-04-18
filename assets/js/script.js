

//const variables//
let btn = document.querySelector(".search")
let cityInputEl = document.querySelector("#cityinput");
let cityFormEl = document.querySelector("#cityform");
let currentWeatherBoxEl = document.querySelector ("#currentCityBox");
let currentCityh2El = document.querySelector(".currentCityh2");
let currentDate= document.querySelector(".date");
let currentTempEl = document.querySelector(".temp");
let currentHumidityEl = document.querySelector(".humidity")
let currentWindEl = document.querySelector(".wind");
let currentUVEl = document.querySelector(".uvindex");
let currentPicEl= document.querySelector("#currentpic")





const APIkey = "7a57fbcfbd1ac395abbe46219d50d833";

//submit button handler
const formSubmitHandler = function (event) {
  // prevent page from refreshing
  event.preventDefault();
  console.log(event);

  //get value from cityInput
  const cityName = cityInputEl.value.trim();
  console.log(cityName);

  if (cityName) {
    //run function to get city API 
    getCityWeather(cityName);

  } else {
    alert("Please enter a city");
  }
};

/*const convertCityName= function(cityname){
  //format API URl for direct geocoding city name
var cityApiUrl= "http://api.openweathermap.org/geo/1.0/direct?q=" + cityname+ "&appid=7a57fbcfbd1ac395abbe46219d50d833";

//make get request to url
fetch(cityApiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          displayCity(data, cityname);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("Unable to connect to Geo API");
    });
};
*/
const getCityWeather = function (cityName) {

  // format the github api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + APIkey;

  // make a get request to url
  fetch(apiUrl).then(function(response) { 
    if (response.ok){
      response.json().then(function (data) {
        console.log(data);
        displayWeather(data);
      });
      }
    });
};


//city search in input city form shows CURRENT weather conditions//
const displayWeather = function (data) {
  console.log(data);

  currentCityh2El.innerHTML=data.name +"     (" + moment().format('MMMM Do YYYY')+ ")"; 
  let weatherPic = data.weather[0].icon;
            currentPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
            currentPicEl.setAttribute("alt", data.weather[0].description);
  currentTempEl.innerHTML="Temp: " + data.main.temp + " F";
  currentHumidityEl.innerHTML ="Humidity: "+ data.main.humidity + "%";
  currentWindEl.innerHTML ="Wind:  "+ data.wind.speed + "  MPH"
  
  //call UV API
  let lat = data.coord.lat;
  let lon = data.coord.lon;
  let UVapiCall = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey + "&cnt=1";
  fetch(UVapiCall).then(function(response) { 
    if (response.ok){
    response.json().then(function (data) {
    currentUVEl.innerHTML="UV Index:  "+ data[0].value;
  });
}
});
};

/*updateUVIndex= function(val){
  let uvEl= $(".uvindex");
  console.log(uvEl);
  uvEl.text(val);
  uvEl.removeClass();
  
  if (val < 3) {
    uvEl.addClass("bg-success text-light p-2 rounded");
  } else if (val < 6) {
    uvEl.addClass("bg-warning text-light p-2 rounded");
  } else {
    uvEl.addClass("bg-danger text-light p-2 rounded");
  };
  }*/


//CURRENT city div shows city name, date, temp, wind, humidity, UV index//


//UV index changes colors to show favorable, moderate, severe//


//city search in input form shows FUTURE weather conditions in 5-day forecast//
//FUTURE forecast displays date, icon representative of weather,temperate, wind speed, and humidity// 


//city search in input form is saved in "search history" using JSON storage//


//clicking on city in SEARCH HISTORY displays all content again for that city//



/*save to local storage - use thisHistory array, populate with local storage history if present
if (JSON.parse(localStorage.getItem("historyArray"))) {
    var thisHistory = JSON.parse(localStorage.getItem("historyArray"));
  } else {
    var thisHistory = [];
  }
  // adds history button given an input city
  var createHistoryButton = function(city) {
    let historySearchBtn = document.createElement("button");
    historySearchBtn.className = "btn btn-secondary btn-secondary history-button";
    historySearchBtn.setAttribute("style","overflow:hidden;resize:none");
    historySearchBtn.setAttribute("type","submit");
    historySearchBtn.textContent = city;
    searchHistoryEl.appendChild(historySearchBtn);
    historySearchBtn.addEventListener("click", getWeather);
  }
  // updates history in local storage
  var addHistory = function(city) {
    createHistoryButton(city); 
    thisHistory.push(city);
    localStorage.setItem("historyArray",JSON.stringify(thisHistory));
  };*/

//updateUVIndex ();
//add event listeners to form
cityFormEl.addEventListener("submit", formSubmitHandler);



