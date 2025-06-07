const openedTabs = new Set();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    openedTabs.add(tab.url);
  }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'check-tab') {
    const isOpened = openedTabs.has(msg.url);
    sendResponse({ isOpened });
  }
});