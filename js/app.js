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


  powerButton.change(function(){
    if($(this).is(":checked")){
      counterText.text("--");

      startButton.click(function(){
        clearInterval(interval);
        releaseButtons();
        $(this).css("background-color","red");
        steps = [];
        steps.push(getRandom());//push a random step into the steps array
        play();//play the random sounds
      });

      strictMode.attr("disabled",false);
      strictMode.change(function(){
        if($(this).is(":checked")){
          isStrict = true;
        } else {
          isStrict = false;
        }
      });

    } else {
      counterText.text("");
      startButton.css("background-color","#990000");
      startButton.off();
      strictMode.attr("disabled",true);
      strictMode.prop('checked', false);
      strictMode.off();
      clearTheGame();
    }

  });

  function clearTheGame(){
      steps = [];
      turnOffButtons();
      releaseButtons();
      clearInterval(interval);
  }

  function turnOnButtons(){
    var userClicks = 0;

    for(var i=1; i<=4; i++){
      $("#btn"+i).addClass("btn"+i);//activate buttons
      (function(i){

        $("#btn"+i).mousedown(function(){//mouse goes down
          audio[i-1].play();  // play the audio
        });

        $("#btn"+i).mouseup(function(){//mouse goes up
          if(steps[userClicks] === i) {//to check if the current key matches the steps
            userClicks++;//increase the click counter
            if (userClicks === steps.length){ // if last click
              if(steps.length === 20){ // Won the game
                turnOffButtons();
                clearTheGame();
                alert("Congratulations You Win!");
              }
              steps.push(getRandom());//push a random step into the steps array
              play(); // replay the steps with an additional step
            }
          } else {//if wrong key pressed
            turnOffButtons();
            if (isStrict) { // if strict mode is on
              steps = []; //clear all the steps
              steps.push(getRandom());//push one random step
            }
            counterText.text("!!").fadeTo(250, 0).fadeTo(250,1).fadeTo(250,0).fadeTo(250,1);
            setTimeout(function(){
              play();// replay the game
            }, 1000);

          }
        });

      }(i));
    }

    $(".button").css("pointer-events","all");//enable pointer events
  }

  var interval;
  function play(){
    counterText.text(("0"+steps.length).slice(-2)).fadeTo(250, 0).fadeTo(250,1);
    turnOffButtons();//prevent user clicks while playing
    stepCounter = 0; //start the steps from 0 up to the steps length
    interval = setInterval(function(){//repeat this every 1000 ms
      releaseButton("#btn" + steps[stepCounter - 1]);// Release the previous button
      clickButton("#btn" + steps[stepCounter]);// click the current button

      if(stepCounter === steps.length){// if last step reached
        clearInterval(interval);// stop the interval clock
        turnOnButtons(); //let the user click buttons
        stepCounter = 0;//reset steps
      }

      stepCounter++;// increase step counter
    }, 1000);
  }

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
