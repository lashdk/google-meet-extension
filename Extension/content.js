console.log("Chrome extentsion ready to go");


function check(){
  try{
  var z=document.getElementsByClassName("wnPUne N0PJ8e");
  var ztext=z[0].innerHTML;
  z=parseInt(ztext)
}
catch(err){
  console.log("script still working")
}
if (z<16){
console.log(" found");
chrome.runtime.sendMessage({refresh:"True"});

}
}

var msg;

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponse){
  if (message.txt==="clicked"){
    msg=message;
    alert("You have been blessed by DK :)");
    setInterval(check,20000);
}
}
