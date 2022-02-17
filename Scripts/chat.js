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

 var myElem=document.getElementById("click")
myElem.addEventListener("click", function(){
    let messagE="Show them how much you care with this offer"
    document.getElementById("respo").innerHTML=`<p class="respo"><span>'${messagE}'</span></p>`
    document.getElementById("respo").scrollIntoView(true);

})

var myElem=document.getElementById("click2")
myElem.addEventListener("click", function(){
    let messagE="Lets celebrate our connection this valentine"
    document.getElementById("respo1").innerHTML=`<p class="respo1"><span>'${messagE}'</span></p>`
    document.getElementById("respo1").scrollIntoView(true);
})
var my1=document.getElementById("respo")
my1.addEventListener("click",function(){
    onclick="location.href='https://www.lifehack.org/articles/lifestyle/how-to-enjoy-life-as-a-single-person-on-valentines-day.html'"
})
