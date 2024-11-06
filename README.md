## About
A very simple CJS script for connecting to Odysee stream chat.
In addition to messages, you can also catch donations with “LBC credits” (the internal currency of the site, such as bits on Twitch), as well as the current number of viewers.
“Follow”-events is not coming.

## How to use
Since this is javascript, you need `nodejs` and `npm` installed.
Create a folder and copy <a href="https://github.com/Mikulskii/Odysee-simplest-chat-logger/blob/main/odysee_chat_logger.js">`odysee_chat_logger.js`</a> to it.<p>
Being inside the newly created directory, you need to install the `ws` package:<p> 
```npm i ws```
<p>Unfortunately, I have not been able to find an automated way to get the correct wss link with the required ids.
  
Therefore, you will have to extract it manually through the browser inspector (it looks like `'wss://sockety.odysee.tv/ws/commentron?id=xxxxxxxx`):

<p>

```Open the page with the stream in the browser -> open the inspector (F12) -> Network tab -> WS -> Refresh the page (F5 or Ctrl+R) -> click on the line where there is the word "commentron" -> Headers -> there will be a Request URL line with with the link, copy it.```

<p>

The resulting link must be substituted in the script with the line `const link = ""` and enclosed in quotation marks.

Run `node odysee_chat_logger.js`

<a href="https://mikulski.rocks/lofi-stream-24-7guide/"><img src="https://mikulski.rocks/wp-content/uploads/2024/11/odyseeChatLog.webp"></a>
