//This var will check how many balls arrived with a prime number
var prime=0;
//This var will check how many balls arrived
var ballsArrived = 0;

/**
 * This function will deal with everything inside of the canvas
 * @param {object} canvas 
 */
function CanvasState(canvas) {
    
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');
    this.valid = false;
    this.balls = [];
    _this = this;
    this.interval = canvasCheckSpeed;
    setInterval(function() { _this.draw(); }, _this.interval);
  }
  
  //This function will add balls 
  CanvasState.prototype.addBall = function(ball) {
    this.balls.push(ball);
    this.generateBallNumber(ball);
    this.giveColor(ball);
    this.valid = false;
  }
  
  //This function will check the balls and call the draw function
  CanvasState.prototype.draw = function() {
    // if the state is invalid we can draw
    if (!this.valid) {
      var balls = this.balls;
      var l = balls.length;
      for (var i = 0; i < l; i++) {
        var ball = balls[i];
        if(ball.ready && !ball.finished){
          ball.x = ball.x + xCoordAdvance;
          this.checkLimits(ball);
        }
      }
    }
  }

  //This function will check when the balls reach the limits specified
  CanvasState.prototype.checkLimits = function(ball) {
    if(ball.x >= limitX) {
      this.playSound(ball);
      ballsArrived++;
      ball.finished = true;
      ball.x = 0;
    } else {
      ball.draw(this.ctx);
    }
    this.checkGame();
  }

  //This function will generate a numer for each ball and if is repeated will generate again
  CanvasState.prototype.generateBallNumber = function(ball) {
    var number = Math.floor(Math.random() * maxNumber) + 1;
    var balls = this.balls;
    var repeated = false;
    for (let i = 0; i < balls.length; i++) {
      var currentBall = balls[i];
      if(currentBall.number===number) {
          console.log("There is a ball with that number I will generate another number!");
          this.generateBallNumber(ball);
          repeated = true;
          break;
      }
    }
    if(!repeated) {
      ball.number = number;
      console.log("My number is: "+ number);   
    }
  }

  //This function will give a color for each ball
  CanvasState.prototype.giveColor = function(ball) {
    var value = ball.number;
    //Have less performance than if, kind of a surprise!
    //https://stackoverflow.com/questions/5619832/switch-on-ranges-of-integers-in-javascript
    switch (true) {
      case (value>0 && value<=10):
        ball.fill=blueColor;
        break;
      case (value>10 && value<=20):
        ball.fill=redColor;
        break;
      case (value>20 && value<=30): 
        ball.fill=greenColor;
        break;
      case (value>30 && value<=40): 
        ball.fill=yellowColor;
        break;
      case (value>40 && value<=50): 
        ball.fill=orangeColor;
        break;
      case (value>50 && value<=60): 
        ball.fill=purpleColor;
        break;      
      default:
        ball.fill=grayColor;
        break;   
    }
  }

  //This function will play a sound when the balls arrive.
  CanvasState.prototype.playSound = function(ball) {
    if(isPrime(ball.number)) {
      soundCoin.play();
      prime++;
    } else {
      soundKick.play();
    }
  }

  //This function will check if the game is finished and show the results.
  CanvasState.prototype.checkGame = function() {
    if(ballsArrived===ballsLimit) {
      document.getElementById("gameInfo").innerHTML += prime + ' balls arrived with a prime number!';
      ballsArrived = 0;
    }
  }

  //This will create the visual effect of the wall to the balls reach.
  CanvasState.prototype.createVisualLimit = function() {
    this.ctx.fillStyle = blackColor;
    this.ctx.fillRect(xCoordStartWall,yCoordStartWall,sizeWidthWall,sizeHeightWall);
  }