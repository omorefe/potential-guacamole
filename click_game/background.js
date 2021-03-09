console.log("up");

// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, info => {
//         if (info.url.substring(0, 30) == "https://lme2.azurewebsites.net") {
//             chrome.tabs.executeScript(null, {file: "foreground.js"}, () => {console.log("injected")});
//         }
//     })
// });
// chrome.tabs.onUpdated.addListener((tabID, changeInfo, tab) => {
//     chrome.tabs.get(tabID, info => {
//         if (info.url.substring(0, 30) == "https://lme2.azurewebsites.net" && info.status == 'complete') {
//             chrome.tabs.executeScript(tabID, {file: "foreground.js"}, () => {console.log("injected")});
//         }
//     })
// });
//https://lme2.azurewebsites.net/practice/388