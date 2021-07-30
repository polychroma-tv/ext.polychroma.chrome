(function (window) {
  var appWindow = chrome.app.window.current();
  var webview = window.document.querySelector('webview');
  var offline = window.document.querySelector('.offline');

  window.addEventListener('load', function () {
    // cache buster
    webview.src = 'http://live.polychroma.tv/?' + Date.now();
  });

  window.addEventListener('online', function yay() {
    webview.reload();
  });

  window.addEventListener('offline', function nay() {
    offline.classList.remove('hide');
  });

  webview.addEventListener('permissionrequest', function(e) {
    if (e.permission === 'fullscreen') {
      e.request.allow();
    }
  });

  webview.addEventListener('contentload', function () {
    offline.classList.add('hide');
  });

  webview.addEventListener('loadstop', function (ev) {
    webview.contentWindow.postMessage({ from: 'polychromatv' }, '*');
  });

  webview.addEventListener('newwindow', function (ev) {
    ev.preventDefault();
    window.open(ev.targetUrl);
  });

}(this));
