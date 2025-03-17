chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "explain-code",
      title: "Explain Code with AI",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "explain-code") {
      chrome.storage.local.set({ selectedCode: info.selectionText }, () => {
        chrome.action.openPopup();
      });
    }
  });
  