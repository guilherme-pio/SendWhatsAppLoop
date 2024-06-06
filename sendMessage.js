const message = "15/06 show iniciando 21:30, no outlet" // Message 
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
