/*
Open WhatsApp Web on your browser and open a chat with someone
Open Dev tools and then the Console tab
Copy the code below, change the message variable to what you want them the receive and annoy your friends 
*/

const message = "Today is gonna be the day that they're gonna throw it back to you" // Message will be sent on WhatsApp Web
const every = 3600; // Time in seconds

function sendMessage(message) {
  main = document.querySelector("#main");
  textarea = main.querySelector(`div[contenteditable="true"]`);
  textarea.focus();
  document.execCommand('insertText', false, message);
  setTimeout(() => {
    main.querySelector(`[data-icon="send"]`).click();
  }, 100);
}
sendMessage(message);

setInterval(() => {
        sendMessage(message);
    }, every * 1000);
