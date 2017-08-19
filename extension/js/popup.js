/*chrome.storage.sync.get({
  'apiKey': ''
}, function(settings) {
  if (!chrome.runtime.error) {
    apiKey = settings.apiKey;
    getSettings();
  } else {
    console.log("ERROR: REPORT TO HYDRA");
  }
});

function getSettings() {

}

var APIKEY;

function requestPM() {
  console.log("Requesting PM...");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://hackforums.net/apicall.php?key=" + APIKEY + "&inbox=1&page=1");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var object = JSON.parse(xhr.responseText);
      console.log(xhr.status);
      console.log(xhr.statusText);
      console.log(object);
      for(var key1 in object) {
        for(var key2 in object[key1]) {
          //console.log(object[key1][key2]);
          if (object[key1][key2]["status"] == "0") {
            console.log("UNREAD PM FOUND");
          }
        }
      }
    }
  }
  xhr.send();
}

document.querySelector('#apiCall').addEventListener('click', requestPM);
*/
