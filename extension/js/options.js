var themeColor, quoteColor, showLogo, enableSFW, hideMenu, showTime, enableBadge, confirmClear, saveClear, resetClear;

function init_options() {
  var script = document.createElement('script');
  script.src = '/js/jscolor.min.js';
  script.type = 'text/javascript';
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
  console.log('function: init_options');
  chrome.storage.sync.get({
    'themeColor': '393939',
    'quoteColor': '00ffd2',
    'prefixColor': '046def',
    'showLogo': false,
    'enableSFW': false,
    'hideMenu': false,
    'showTime': false,
    'enableBadge': false,
    'apiKey': ''
  }, function(settings) {
    if (!chrome.runtime.error) {
      document.getElementById('themeColor').value = settings.themeColor;
      document.getElementById('quoteColor').value = settings.quoteColor;
      document.getElementById('prefixColor').value = settings.prefixColor;
      document.getElementById('showLogo').checked = settings.showLogo;
      document.getElementById('enableSFW').checked = settings.enableSFW;
      document.getElementById('hideMenu').checked = settings.hideMenu;
      document.getElementById('showTime').checked = settings.showTime;
      document.getElementById('enableBadge').checked = settings.enableBadge;
      document.getElementById('apiKey').value = settings.apiKey;
    } else {
      console.log('ERROR: REPORT TO HYDRA');
    }
  });
}

function save_options() {
  console.log('function: save_options');
  themeColor = document.getElementById('themeColor').value;
  quoteColor = document.getElementById('quoteColor').value;
  prefixColor = document.getElementById('prefixColor').value;
  showLogo = document.getElementById('showLogo').checked;
  enableSFW = document.getElementById('enableSFW').checked;
  hideMenu = document.getElementById('hideMenu').checked;
  showTime = document.getElementById('showTime').checked;
  enableBadge = document.getElementById('enableBadge').checked;
  apiKey = document.getElementById('apiKey').value;
  chrome.storage.sync.set({
    'themeColor': themeColor,
    'quoteColor': quoteColor,
    'prefixColor': prefixColor,
    'showLogo': showLogo,
    'enableSFW': enableSFW,
    'hideMenu': hideMenu,
    'showTime': showTime,
    'enableBadge': enableBadge,
    'apiKey': apiKey
  }, function() {});
  document.getElementById('message').innerHTML = '<span class="greenText">Settings Saved</span>';
  clearTimeout(confirmClear);
  clearTimeout(saveClear);
  clearTimeout(resetClear);
  saveClear = setTimeout(function() {
    document.getElementById('message').innerHTML = '';
  }, 1500);
}

function confirm_reset() {
  document.getElementById('message').innerHTML = '<a id="confirmDefault">Click to confirm reset</a>';
  clearTimeout(confirmClear);
  clearTimeout(saveClear);
  clearTimeout(resetClear);
  confirmClear = setTimeout(function() {
    document.getElementById('message').innerHTML = '';
  }, 5000);
  document.querySelector('#confirmDefault').addEventListener('click', reset_options);
}

function reset_options() {
  console.log('function: reset_options');
  document.getElementById('themeColor').value = '393939';
  document.getElementById('themeColor').style.backgroundColor = '#393939';
  document.getElementById('themeColor').style.color = 'white';
  document.getElementById('quoteColor').value = '00FFD2';
  document.getElementById('quoteColor').style.backgroundColor = '#00FFD2';
  document.getElementById('quoteColor').style.color = 'black';
  document.getElementById('prefixColor').value = '046DEF';
  document.getElementById('prefixColor').style.backgroundColor = '#046DEF';
  document.getElementById('prefixColor').style.color = 'white';
  document.getElementById('showLogo').checked = false;
  document.getElementById('enableSFW').checked = false;
  document.getElementById('hideMenu').checked = false;
  document.getElementById('showTime').checked = false;
  document.getElementById('enableBadge').checked = false;
  document.getElementById('apiKey').value = '';
  chrome.storage.sync.set({
    'themeColor': '393939',
    'quoteColor': '00FFD2',
    'prefixColor': '046DEF',
    'showLogo': false,
    'enableSFW': false,
    'hideMenu': false,
    'showTime': false,
    'enableBadge': false,
    'apiKey': ''
  }, function() {});
  document.getElementById('message').innerHTML = '<span class="redText">Settings Reset</span>';
  clearTimeout(confirmClear);
  clearTimeout(saveClear);
  clearTimeout(resetClear);
  resetClear = setTimeout(function() {
    document.getElementById('message').innerHTML = '';
  }, 1500);
}

document.addEventListener('DOMContentLoaded', init_options);
document.querySelector('#saveSettings').addEventListener('click', save_options);
document.querySelector('#defaultSettings').addEventListener('click', confirm_reset);
