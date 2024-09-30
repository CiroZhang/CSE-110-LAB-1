window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
  };

function doStuff() {
    const formElement = document.getElementById("subscribe-form");
    const emailValue = formElement.querySelector("#email").value;
    
    window.alert("Subscriber \"added\": " + emailValue);
    
  }