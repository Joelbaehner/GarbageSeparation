<<<<<<< HEAD

/* This is an array of objects. Every object is marked by {}. Every object has two properties (Eigenschaften): item and bin.
   { item: "beans", bin: "bio" } The : devides the name of the property from th value.
    A , (comma) devides the differernt properties within an object*/
const monthlyGarbageList = [
    { item: "beans", bin: "bio" },
    { item: "rice", bin: "bio" },
    { item: "tissue", bin: "restmüll" },
    { item: "condom", bin: "restmüll" },
    { item: "sausage package", bin: "plastic" },
    { item: "empty soap bottle", bin: "plastic",},
    { item: "cardboard box", bin: "paper" },
    { item: "newspaper", bin: "paper" }
];

  /* Garbage Bins Old Array that I commented out, since the information is already defined as one
   of the properties in the former array*/
  const BINS = ['bio', 'restmüll', 'plastic', 'paper']
  
 

  /*Get random garbage item from my monthly garbage list and save it's value in the randomGarbageItem.
  We use the getRandomGarbageItem() function but instead of the placeholder garbageList within the ()
  we put the name of our monthlyGarbageList array*/
  let randomGarbageItem = getRandomGarbageItem(monthlyGarbageList);//saves complete object e.g. { item: "beans", bin: "bio" }; importantfor the checkAnswer
  let randomGarbageItemName = randomGarbageItem["item"];//saves only the name e.g. "beans". This variable is printed. We do't want the user to see the whole object.


 /*Show 1 item randomly from my monthy garbage within the div with the class of "garbage" at the top.
  .inner Text is a property puts the text within the element and allows JS to actually change the html.
  without.inner Text we can't change the html 
  The user sees the randomGarbageItemName we defined as a let variable (not the object we defined as  let randomGarbageItem*/

  document.querySelector('.garbage').innerText = randomGarbageItemName;

// Currently a new item is only displayed once we refresh the page. We need a refresh button

//This funtion get's us a random item from a garbage List. We use the function by replacing the default with monthlyGarbageList and saving it as  let randomGarbageItem
function getRandomGarbageItem(garbageList) {
  
    /*Get a random index from the array.
    Math.floor: round down to an even number
    Math.random: Gives out random (also possibly uneven) number startion from 0 (inclusive) to 1 (exclusive)
    garbageList.length: .length returns the length of the array.
    The length of the array is alsway +1 in comparison to the index, but because its never 1,0 and its rounded down its maximum length-1*/

    const randomIndex = Math.floor(Math.random() * garbageList.length);
    
    // Return the item at the random index
    return garbageList[randomIndex];
  }
  
//We select our button by id
  const submitButton = document.getElementById('submitBtn');




  //Instead of resetting the page I created an onklick button to delete the previous result and to show a new item
  function refreshGarbageItem() {
    // Get a new random garbage item
    randomGarbageItem = getRandomGarbageItem(monthlyGarbageList);
    randomGarbageItemName = randomGarbageItem["item"];
    
    // Print new garbage item name
    document.querySelector('.garbage').innerText = randomGarbageItemName;
    
    // reset the file
    document.getElementById('binsForm').reset();
    
    /* delete the previous result; .inner HTML is a function in JavaScript that can rewrite the HTML,
    but other than .innerText it also recognises and interpretes HTML Tags(so if there is a code it also runs),
    while .innerText only is about text
    let element = document.querySelector('.example');

// Mit innerHTML
element.innerHTML = '<strong>Hallo</strong> <em>Welt</em>!';
// Ergebnis: Hallo (fettgedruckt) Welt (kursiv)!

// Mit innerText
element.innerText = '<strong>Hallo</strong> <em>Welt</em>!';
// Ergebnis: <strong>Hallo</strong> <em>Welt</em>!*/
    document.querySelector('.result').innerHTML = '';
  }
  
  // make it globaly accesssible so also for the html
  window.refreshGarbageItem = refreshGarbageItem;
  
  // initialising when refreshing the page
  refreshGarbageItem();


  

  /* Function to check if the user selected the correct bin
  This function gets activated by clicking the submit button (with onclick)*/
  function checkAnswer() {
    /*Results display container. It's an invisible div at the bottom, it's only visible once filled with javascript.
    document refers to html; with document.querySelector() we can select a specific element within the html,
    in this case the dib with the class of "results"*/
    let resultContainer = document.querySelector('.result');
    
    /* Get the selected bin value
    We select the input element with the name of "bin".
    The :checked pseudoclass selects the input element that's currently checked
    after selecting the element .value gives us the the value of the bin*/
    let selectedBin = document.querySelector('input[name="bin"]:checked').value;

    // Grab my garbage item (randomly displayed) associated bin
    let garbageBin = randomGarbageItem["bin"];

    /*if...else funtion. If the selected bin and the bin that's attached to the selected item in the object of our array match
    and equals to the bolean "true we print 'Welcome to Germany - You are accepted',
    if it equals to "false we print 'WRONG - You suck - Get back to your country'*/
    if (selectedBin === garbageBin) {
        resultContainer.innerHTML = 'Welcome to Germany - You are accepted';
    } else {
        resultContainer.innerHTML = 'WRONG - You suck - Get back to your country';
    }
}
/*The window object is globally accessible so also the html has access to it */
window.checkAnswer = checkAnswer;

=======
// Arrays and global Variables
const monthlyGarbageList = [  //Array of objects
    { item: "", bin: "", image: 'img/intro.jpg', detector: 1},
    { item: "beans", bin: "bio", image: 'img/beans.jpg', detector: 0},
    { item: "rice", bin: "bio", image: 'img/rice.jpg', detector: 0},
    { item: "tissue", bin: "restmüll", image: 'img/tissue.jpg', detector: 0 },
    { item: "condom", bin: "restmüll", image: 'img/condom.jpg', detector: 0 },
    { item: "sausage package", bin: "plastic", image: 'img/sausage.jpg', detector: 0 },
    { item: "empty soap bottle", bin: "plastic", image: 'img/soap.jpg', detector: 0 },
    { item: "cardboard box", bin: "paper", image: 'img/cardboard.jpg', detector: 0 },
    { item: "newspaper", bin: "paper", image: 'img/newspaper.jpg', detector: 0 }
];

const BINS = ['bio', 'restmüll', 'plastic', 'paper'];   // Arrey of the bins  
let score = 0;                                         // initialising score counter,
const scoreElement = document.getElementById('score'); // <---- grabs the SCORE-HTML-ELEMENT

let randomGarbageItem = monthlyGarbageList[0];          //In dieser Variable wird das komplette Array mit dem Index 0 angezeigt (Intro) 
let randomGarbageItemName = randomGarbageItem["item"];  //In dieser Variable wird nur der Name gespeichert  
let imgElement = document.createElement('img');         //creating a new img Element
imgElement.src = randomGarbageItem['image'];            //define the Link informationen of the image
imgElement.alt = randomGarbageItemName;                 //define the alt informationen of the image
document.getElementById('garbageImage').appendChild(imgElement);      //add the image to the div with the id "garbageImage"
document.querySelector('.garbage').innerText = randomGarbageItemName; // In diesem div wird der Name des zufälligen Objekts angezeigt

const submitButton = document.getElementById('submitBtn');  // global var: Diese Variable speichert das Element mit der ID "submitBtn"
let timeLeft = 50;                                          // global var: Starttime setting, 50 sec.
let countdown;                                              // global var: used for c 
const timerElement = document.getElementById('timer');      // global var:
let counter = 1;                                            // var counts the amount of items which got shown so far, us it to end the operation after shown all items


// FUNCTIONS
// created function to manage the get the wanted items from an Array (someGarbageList) 
function getRandomGarbageItem(someGarbageList) {              // Fkt. manages to give back a random item out of an Array
  let randomIndex = Math.floor(Math.random() * someGarbageList.length);   // creates a randome number (for choosing an item of Array)
  
  if (counter < monthlyGarbageList.length){                   // if the counter-var "i" is smaller then the number of Items the Array does include               
    while (someGarbageList[randomIndex].detector === 1){       // as long as the you got an item with detector of 1 (eaning of detector = 1: item was already used for selection)
      randomIndex = Math.floor(Math.random() * someGarbageList.length);   // creates a randome number (for choosing an item of Array)
    }
    return someGarbageList[randomIndex];                      // return a random item of the Array someGarbageList
  } else {
    document.getElementById("refreshBtn").disabled = true;    // deactivate the refreshBtn
    // work to do: break and return "You finished" to the user
  }
}

// managed to refresh the shown item
function refreshGarbageItem() {                                 // Fkt. manages refreshing the shown Items from the Array
  randomGarbageItem = getRandomGarbageItem(monthlyGarbageList); // var randomGarbageItem gets items from Array monthlyGarbageList by the fkt. getRandomGarbageItem
  randomGarbageItemName = randomGarbageItem["item"];            // var randomGarbageItemName gets the value of the randomGarbageItem
  imgElement.src = randomGarbageItem['image'];                  // define the Link information of the image
  imgElement.alt = randomGarbageItemName;                       // define the alt information of the image
  document.getElementById('garbageImage').appendChild(imgElement);    //add the image to the div with the id "garbageImage" (parentelement)

  document.querySelector('.garbage').innerText = randomGarbageItemName;   // name of the randome Item will get handeover to the doc for showing the user  
  document.getElementById('binsForm').reset();                            // the radiobutton(look in html) in the formular get resetted
  document.querySelector('.result').innerHTML = '';                       // the shown string of div 'result' gets cleared

  randomGarbageItem.detector = 1;                    // set detector-value of Array-item to 1, so it will get detected in function and will not be choosen again

  timeLeft = 50;                                    // Timer setting back: 50 sec.
  countdown = setInterval(function () {                     // setInterval starts timer
    timerElement.textContent = `Timer: ${timeLeft} sec.`;   // Gives the Value of String (Timer:) and Number (Time) 
    timeLeft--;                                             // Counts down second by second
  
    if (timeLeft < 0) {                                     // When time is over
      clearInterval(countdown);                             // stopps the function
      timerElement.textContent = "Time is over!";           // Displays: "Time is over!" instead Time
      playfailSound();                                      // Play the failsound mp3
    }
  }, 1000);                                                 // Timer interval set to 1000 milli-second
}

// Fkt.-manages to update the Score: 
function updateScore(isCorrect) {
  if(isCorrect) {                                   // If Answer was right
    score = score + timeLeft +  100;                // 100 will be added to score 
    scoreElement.textContent = `Score: ${score}`;   //hands over String and score-value
  }
}

// fkt. check the answer of the users
function checkAnswer() {
  let resultContainer = document.querySelector('.result'); // Hier wird das Ergebnis-Container-Element ausgewählt
  let selectedBin = document.querySelector('input[name="bin"]:checked').value; // Hier wird der Wert des ausgewählten Bin-Elements ausgewählt
  let garbageBin = randomGarbageItem["bin"];              // Hier wird der Wert des zufälligen Objekts ausgewählt  
  
  if (selectedBin === garbageBin) {               // If var selectedBin has the same value like garbageBin
    resultContainer.innerHTML = 'Welcome to Germany - You are accepted';  // resultContainer gets the string 'Welcome to Germany - You are accepted'
    updateScore(true);                            // Fkt- updateScore will requested
    playwinSound();                               // Winsound
  } else {
    resultContainer.innerHTML = 'WRONG - You suck - Get back to your country'; // Hier wird das Ergebnis angezeigt, wenn die Antwort falsch ist
    updateScore(false);
    playfailSound();
  }
  // function 
}

window.checkAnswer = checkAnswer; // Hier wird die Funktion "checkAnswer" global zugänglich gemacht 

// fkt. to play the sounddate fail.mp3
function playfailSound() {
  const audio = document.getElementById('failSound');
  audio.currentTime = 0;      //Audio starts from the beginning
  audio.play();
}

// fkt. to play the sounddate goodresult.mp3
function playwinSound() {
  const audio = document.getElementById('winSound');
  audio.currentTime = 0;      //Audio starts from the beginning
  audio.play();
}

 
// decl. global Variables: for defining the status of the Button while Loading the page, after clicking "Check Answer" and clicking "Show me a me item" 
var radios = document.querySelectorAll('input[type="radio"]');    //Global Var: detecting Button of Type radio

window.onload = function() {          //define Button status after Loading the page
  radios.forEach(function(radio) {    //for each Button of typ radio
      radio.disabled = true;          //deactivation of radiobutton
  });
  document.getElementById("submitBtn").disabled = true;  //deactiating the "Check Answer"-Button
};

// EVENTLISTENERS
document.getElementById("submitBtn").addEventListener("click", function() {     //Eventlistener for the action of Click-submitBtn
  clearInterval(countdown);            //Stopps Countdown
  radios.forEach(function(radio) {     //for each Button of typ radio
    radio.disabled = true;             //deactivation of radiobutton     
  });// Soll gewählten radio-button blockieren/ einfrieren 
  document.getElementById("refreshBtn").disabled = false;     //activat the refreshBtn
  document.getElementById("submitBtn").disabled = true;       //deactivat the submitBtn
});

document.getElementById("refreshBtn").addEventListener("click", function() {    //Eventlistener for the action of Click-refreshBtn             
  radios.forEach(function(radio) {     //for each Button of typ radio
    radio.disabled = false;            //activation of radiobutton        
  });
  document.getElementById("refreshBtn").disabled = true;    //deactivat the refreshBtn 
  document.getElementById("submitBtn").disabled = false;    //activat the submitBtn
  counter++;          // counter value + 1
});
>>>>>>> 8fe41ba (Chris Version)
