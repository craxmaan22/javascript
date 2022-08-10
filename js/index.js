window.onload = function() {
    // first we set up an event handler for the form submission
    console.log("Script executing!");
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
      // then we print values to the story area;
      // we're hardcoding these values for now
      document.querySelector("span#person1a").innerText = "person 1";
      document.querySelector("span#person1b").innerText = "person 1";
      document.querySelector("span#person1c").innerText = "person 1";
      document.querySelector("span#person2a").innerText = "person 2";
      document.querySelector("span#person2b").innerText = "person 2";
      document.querySelector("span#animal").innerText = "an animal";
      document.querySelector("span#verb").innerText = "verb";
      document.querySelector("span#noun").innerText = "noun";
      document.querySelector("span#exclamation").innerText = "exclamation";
  
      // then we show the story by removing the class attribute
      document.querySelector("div#story").removeAttribute("class");
    };
  };

  window.onload = function() {
    console.log("Script executing!");
    let form = document.querySelector("form");
    form.onsubmit = function(event) {  // there's a new parameter
      document.querySelector("span#person1a").innerText = "person 1";
      document.querySelector("span#person1b").innerText = "person 1";
      document.querySelector("span#person1c").innerText = "person 1";
      document.querySelector("span#person2a").innerText = "person 2";
      document.querySelector("span#person2b").innerText = "person 2";
      document.querySelector("span#animal").innerText = "an animal";
      document.querySelector("span#verb").innerText = "verb";
      document.querySelector("span#noun").innerText = "noun";
      document.querySelector("span#exclamation").innerText = "exclamation";
  
      document.querySelector("div#story").removeAttribute("class");
  
      // we prevent the default refresh action for the submit event
      event.preventDefault();
    };
  };

  window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {  
      // in this section we get the value for each form input
      event.preventDefault();
      console.log("Submit form successfully reached.");
      const person1Input = document.getElementById("person1Input").value;
      const person2Input = document.getElementById("person2Input").value;
      const animalInput= document.getElementById("animalInput").value;
      const exclamationInput = document.getElementById("exclamationInput").value;
      const verbInput = document.getElementById("verbInput").value;
      const nounInput = document.getElementById("nounInput").value;
  
      // then we set the story variables to the values we got from the form
      document.querySelector("span#person1a").innerText = person1Input;
      document.querySelector("span#person1b").innerText = person1Input;
      document.querySelector("span#person1c").innerText = person1Input;
      document.querySelector("span#person2a").innerText = person2Input;
      document.querySelector("span#person2b").innerText = person2Input;
      document.querySelector("span#animal").innerText = animalInput;
      document.querySelector("span#verb").innerText = verbInput;
      document.querySelector("span#noun").innerText = nounInput;
      document.querySelector("span#exclamation").innerText = exclamationInput;
  
      document.querySelector("div#story").removeAttribute("class");
  
      event.preventDefault();
    };
  };