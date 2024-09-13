const reels = 'https://www.instagram.com/reels'
const shorts = 'https://www.youtube.com/shorts'
const tiktok = 'https://www.tiktok.com'

async function toggleMuteState(tabId,mute) {
    await chrome.tabs.update(tabId, {muted: mute});
}

//On changes to page
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    // inject instagram script file
    if (tab.url.startsWith(reels)){
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['instaScript.js']
        }).then(() => console.log("injected instagram script file"));
        toggleMuteState(tab.id,true)
    }// inject instagram script file
    else if (tab.url.startsWith(shorts)){
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['ytScript.js']
        }).then(() => console.log("injected youtube script file"));
        toggleMuteState(tab.id,true)
    } else if (tab.url.startsWith(tiktok)){
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['tiktokScript.js']
        }).then(() => console.log("injected tiktok script file"));
        toggleMuteState(tab.id,true)
    } else {
        toggleMuteState(tab.id,false)
    }
})