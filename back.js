console.log("hello");
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  console.log("button clicked");
  let msg={
    txt:"clicked",
    num: "1"
  }
  chrome.tabs.sendMessage(tab.id,msg);
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if(message.refresh==="True") chrome.tabs.remove(sender.tab.id);
});
