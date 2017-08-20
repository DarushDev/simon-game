$("document").ready(function(){
  var counterText = $("#counter");
  var startButton = $("#start");
  var strictMode = $("#strict");
  var powerButton = $("#power");

  var green = $("#btn1");
  var red =  $("#btn2");
  var yellow = $("#btn3");
  var blue = $("#btn4");

  var isPowerOn = false;
  var isStrict = false;

  var audio = [];
  var sounds = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",        "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",  "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"];
  for(var i=0; i<sounds.length; i++){
    audio[i] = new Audio(sounds[i]);
  }

  var steps = [];
  var stepCounter = 0;


  

});
