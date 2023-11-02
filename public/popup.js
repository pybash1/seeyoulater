function snoozeTab(time) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.storage.local.set({
      [tabs[0].url]: new Date().getTime() + time,
    });
  });
}

document.getElementById("testing").onclick = function () {
  snoozeTab(20000);
};
