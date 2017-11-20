"use strict";

(function(){
  let xhr = new XMLHttpRequest();

  let queryBox = document.getElementById("guardQuery");
  let searchForm = document.getElementById("searchForm");
  let demoJSON = document.getElementById("demo");

  // get an api key from http://open-platform.theguardian.com/access/
  let baseURL = "https://content.guardianapis.com/search?api-key=<YOUR-API-KEY-HERE>&q=";

  searchForm.addEventListener("submit", function(ev){
    let url = baseURL + queryBox.value;
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');
    xhr.send();
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      gatherData(response);
    }
	  queryBox.value = "";
      ev.preventDefault();
    }, false);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      gatherData(response);
    }
  };

  // GUARDIAN
  function gatherData(data) {
    let key;
    let theData = "";
    let tmp = data.response.results;
    for (key in tmp) {
      theData += `<li><a href="${tmp[key].webUrl}">${tmp[key].webTitle}</a> ${tmp[key].webPublicationDate}</li>`;
    }
    demoJSON.innerHTML = theData;
  }

}());
