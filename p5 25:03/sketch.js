//creating a variable to contain the model
let rnnModel;
//creating a variable for a button to generate a random text
let bttn;
//creating the variable to display the text
let displaytext;

function preload(){
  //loading the text model into our global variable 
  rnnModel = ml5.charRNN("https://raw.githubusercontent.com/ml5js/ml5-data-and-models/main/models/charRNN/hemingway");
}
function setup() {
  //createCanvas(400, 400);
  bttn = createButton("GENERATE");
  bttn.mousePressed(generateText);
}

function generateText(){
  let options = {
    seed: "The meaning of life is ",
    temperature: 0.5, 
    length: 200
  }
  rnnModel.generate(options, gotText);
}

//if there is any error
function gotText(err, result){
  console.log(err);
  console.log(result);
  displaytext = "The meaning of life is " + result.sample;
  //making the text cut out at . or !?
  let periodIndex = displaytext.indexOf(".");
  if (periodIndex !== -1){
    displaytext = displaytext.substring(0, periodIndex+1);
  }
  createP(displaytext);
}

function draw() {
  background(blue);
}
