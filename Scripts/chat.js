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
   // document.getElementById("respo").scrollIntoView(true);
   $("#hide").click(function(){
       $("myElem").hide();
   });
   $("#show").click(function(){
       $("myElem")
   })

})

var myElem=document.getElementById("click2")
myElem1.addEventListener("click", function(){
    let messagE1="Lets celebrate our connection this valentine"
    document.getElementById("respo1").innerHTML=`<p class="respo1"><span>'${messagE1}'</span></p>`
    document.getElementById("respo1").scrollIntoView(true);
})

function myFunction() {
    var myElem = document.getElementById("respo");
    if (myElem.style.display === "none") {
      myElem.style.display = "block";
    } else {
      myElem.style.display = "none";
    }
  }