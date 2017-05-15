// start when the document is loaded
console.log("starting...");
let wordsStartArray = [];
let wordsEndArray = [];
window.addEventListener("load", init);

function init() 
{
  // create data
  let wordsStart = "Dum,Dam,Da,Dum,Da,Da,Da,Dum,Thats,The,Way,You've,Got,To,GO!";
  let wordsEnd = "No,No,No,No,No,No,No,No,No,No,No,No,There's,No,Limit";
  wordsStartArray = wordsStart.split(",");
  wordsEndArray = wordsEnd.split(",");

  buildButtons();
}

// build the row of buttons. each button has one label from the list of words
function buildButtons() 
{
  for (let i = 0; i < wordsStartArray.length; i++) 
  {
    let button = createButton(wordsStartArray[i], wordsEndArray[i]);
  }
}

// build one button that changes its label when clicked
function createButton(startWord, endWord) 
{
  let button = document.createElement("button");
  button.innerHTML = startWord;
  button.endText = endWord;

  button.addEventListener("click", function(e)
  {
    console.log('Deze werkt')
    e.target.innerHTML = e.target.endText;
  });
  
  document.body.appendChild(button);
}