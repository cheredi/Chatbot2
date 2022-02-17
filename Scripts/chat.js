//firstMessage
function firstBotMessage(){
    let firstMessage="Hi, I am chatbot!"
    document.getElementById("botStarterMessage").innerHTML = `<p class="botText"><span>${firstMessage}</span></p>`
}
firstBotMessage();
function botMessage(){
    let secondMessage="Its going to be Valentines in a few days, do you have a valentine?"
     document.getElementById("Response").innerHTML = `<p class="response"><span>${secondMessage}</span></p>`
  }
  
  botMessage();