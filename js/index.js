window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    
    let upperCase = document.getElementById("shoutInput").value;
    let result = upperCase.toUpperCase();
    document.getElementById("shout").innerHTML = result;
    console.log(result);

    function upperCase() {
      let upperCase text = "Hello world";
     
        }
    


  // new line below

// const caps = function(phrase) {                     
//   return phrase.toUpperCase();
// } 
//     console.log(caps);
  document.querySelector("span#shout").innerText = shoutInput;
  document.querySelector("div#allCaps").removeAttribute("class");

  };

};
