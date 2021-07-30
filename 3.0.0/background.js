var runApp = function () {
  chrome.app.window.create('window.html', {
    bounds: {
      width: 960,
      height: 600
    },
    minWidth: 960,
    minHeight: 600
  }, function (appWindow) {
    window.document.bgcolor = '#000';
  });
};

chrome.app.runtime.onLaunched.addListener(runApp);
chrome.app.runtime.onRestarted.addListener(runApp);
