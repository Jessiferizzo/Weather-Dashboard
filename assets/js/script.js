//const variables//


const APIkey ="7a57fbcfbd1ac395abbe46219d50d833";



//city search in input city form shows CURRENT weather conditions//
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