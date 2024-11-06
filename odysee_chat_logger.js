const WebSocket = require("ws");

const link = "insert wss-url here";

const chat = new WebSocket(link);

chat.on("error", console.error);

chat.addEventListener('open', function (event) {
    console.log("ODYSEE IS CONNECTED")
  });

chat.addEventListener('message', function (event) {
    let comment=JSON.parse(event.data);        
    let msg = comment.data.comment?.comment;
    let channel_name = comment.data.comment?.channel_name;
    let nickname = channel_name?.substring(1);
    let credits = comment.data.comment?.support_amount;

/// VIEWERS COUNT    
if (comment.type === 'viewers') {  
    return console.log(`[Odysee | Current Viewers : ${comment.data.connected} ]`)
}  

/// CHAT LOG
if (comment.type === 'delta') {  
   console.log(`[Odysee | ${nickname}] ${msg}`)

/// SUPPORT EVENT - LBC CREDITS
if (credits > 0) {  
    console.log(`[Odysee]: ${nickname} gives ${credits} LBC`)
    }   
}
});  

chat.on("close", () => {
  console.log("ODYSEE IS DISCONNECTED");
  process.exit(0);
});
