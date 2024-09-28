
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

