var result = {}
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (tab.url.indexOf("https://trailhead.salesforce.com") != -1) {
            chrome.pageAction.show(tabId);
        }
    }
);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        result.hasQuiz = request.hasQuiz;
        result.questions = request.questions;
    }
);
