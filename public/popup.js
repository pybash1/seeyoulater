function snoozeTab(time) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.storage.local.set({
      [tabs[0].url]: new Date().getTime() + time,
    });
  });
}

let msd = 1440 * 60000;

document.getElementById("testing").onclick = function () {
  snoozeTab(20000);
};
document.getElementById("oneday").onclick = function () {
  snoozeTab(msd);
};
document.getElementById("twoday").onclick = function () {
  snoozeTab(2 * msd);
};
document.getElementById("threeday").onclick = function () {
  snoozeTab(3 * msd);
};
document.getElementById("fourday").onclick = function () {
  snoozeTab(4 * msd);
};
document.getElementById("fiveday").onclick = function () {
  snoozeTab(5 * msd);
};
document.getElementById("sixday").onclick = function () {
  snoozeTab(6 * msd);
};
document.getElementById("sevenday").onclick = function () {
  snoozeTab(7 * msd);
};
document.getElementById("fifteenday").onclick = function () {
  snoozeTab(15 * msd);
};
document.getElementById("twentyoneday").onclick = function () {
  snoozeTab(21 * msd);
};
document.getElementById("thirtyday").onclick = function () {
  snoozeTab(30 * msd);
};
