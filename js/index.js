window.onload = function() {
   
  window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();
      const shoutInput = document.getElementById("shoutInput").value;
      
    // new line below
  
  
  
  // const caps = function(phrase) {                     
  //   return phrase.toUpperCase();
  // } 
  //     console.log(caps);
    document.querySelector("span#shout").innerText = shoutInput;
  
      document.querySelector("div#allCaps").removeAttribute("class");
      const shout = document.getElementById("shout").string;
 };
  
  };