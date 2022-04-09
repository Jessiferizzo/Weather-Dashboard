



/*use thisHistory array, populate with local storage history if present
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