setInterval(() => {
  const rn = new Date().getTime();

  chrome.storage.local.get(null, (urls) => {
    Object.keys(urls).forEach((url) => {
      console.log(urls, url, urls[url]);
      if (urls[url] < rn) {
        chrome.tabs.create({
          url: url,
        });
        chrome.storage.local.remove(url);
      }
    });
  });
}, 1000);
