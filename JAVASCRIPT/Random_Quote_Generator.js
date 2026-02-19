let quotes = ["“Kill them with your success <br>and bury them with your smile.”"
  , "“When the time comes, results talk.”", 
  "“Simple outside. Strong inside.”",
   "“I trust the process, not the noise.”", 
   "“Believe in yourself.”"];

let i = 0; 

let button = document.getElementById("Quote_button");
let output = document.getElementById("output_quoet");

button.onclick = function () {
  output.innerHTML = quotes[i];
  i++;              

  if (i == quotes.length) {
    i = 0;          
  }
};
