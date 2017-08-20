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


  function turnOffButtons(){
    for(var i=1; i<=4; i++){
      $("#btn"+i).off();
      $("#btn"+i).removeClass("btn"+i);
    }
    $(".button").css("pointer-events","none");
  }

  function clickButton(btn){
    switch (btn) {
      case "#btn1":
        $(btn).css("background-color","#00e676");
        audio[0].play();
        break;
      case "#btn2":
        $(btn).css("background-color","#ff1744");
        audio[1].play();
        break;
      case "#btn3":
        $(btn).css("background-color","#ffeb3b");
        audio[2].play();
        break;
      case "#btn4":
        $(btn).css("background-color","#448aff");
        audio[3].play();
        break;
      default:
        break;
    }
  }

  function releaseButton(btn){
    switch(btn){
      case "#btn1":
        $(btn).css("background-color","#1b5e20");
        break;
      case "#btn2":
        $(btn).css("background-color","#b71c1c");
        break;
      case "#btn3":
        $(btn).css("background-color","#f9a825");
        break;
      case "#btn4":
        $(btn).css("background-color","#0d47a1");
        break;
      default:
        break;
    }
  }

  function releaseButtons(){
    for(var i=1; i<=4; i++){
        releaseButton("#btn"+i);
    }
  }

  function getRandom(){
    var random = Math.floor(Math.random() * 4) + 1;
    while(random === steps[steps.length - 1]){
      random = Math.floor(Math.random() * 4) + 1;
    }
    return random;
  }

});
