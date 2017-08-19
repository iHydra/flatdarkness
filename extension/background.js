// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.runtime.openOptionsPage();
});

chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason == "install") {
    var Title = "Welcome!",
      Comment = "Thanks for your interest. If you have any suggestions or feedback, please click here to send them my way. I'm constantly looking for ways to improve this theme.",
      Link = "https://hackforums.net/showthread.php?tid=4756966";
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(function() {
        if (Notification.permission !== "granted") {
          window.alert("FLAT DARKNESS: Please allow desktop notifications!");
        } else {
          notififyMe("", Comment, Link);
        }
      });
    } else {
      var notification = new Notification(Title, {
        icon: 'http://i.imgur.com/RJO15Ll.png',
        requireInteraction: false,
        body: Comment,
      });

      notification.onclick = function() {
        var Link = "https://hackforums.net/showthread.php?tid=4756966";
        chrome.tabs.create({url:Link});
        notification.close();
      };
    }
  } else if (details.reason == "update") {
    var Title = "New Update!",
      Comment = "We've got a hot new update. Click me to view the changelog.";
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(function() {
        if (Notification.permission !== "granted") {
          window.alert("FLAT DARKNESS: Please allow desktop notifications!");
        } else {
          notififyMe("", Comment, Link);
        }
      });
    } else {
      var notification = new Notification(Title, {
        icon: 'http://i.imgur.com/RJO15Ll.png',
        requireInteraction: false,
        body: Comment,
      });

      notification.onclick = function() {
        var Link = "https://hackforums.net/showthread.php?tid=4756966&pid=55655553#pid55655553"; //CHANGELOG POST LINK
        chrome.tabs.create({url:Link});
        notification.close();
      };
    }
  }
});
