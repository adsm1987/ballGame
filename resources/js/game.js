//This vars will check the button clicks 
var clicked = false;
var oneTime = true;
//This var will be used to use the canvas globally
var canvasGlobal = null;


  //This function will initialize the canvas and start adding balls
  function init() {
    //This var will check how many balls can fit in the canvas
    var currentBalls = 0;  
    this.canvasGlobal = new CanvasState(myCanvas);
    this.canvasGlobal.createVisualLimit();
    
    for(i=0;i<ballsLimit;i++) {
      if(startYCoords<limitY){
        currentBalls++;
        canvasGlobal.addBall(new Ball(startXCoords, startYCoords=startYCoords+moveYPosition, ballRadius, ballSAngle, ballEAngle, counterClockWise));
      }
    }
    ballsLimit = currentBalls;
    clicked = true;
    oneTime = false;    
  }
  
  //This function handle the button click
  function start() {
    if(oneTime) {
      init();
    } 
    if(clicked) {
        canvasGlobal.valid = false;
        clicked = false;
    }    
    else {
        canvasGlobal.valid = true;
        clicked = true;
    }
  }