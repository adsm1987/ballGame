/**
 * Constructor for Ball objects to hold data for all drawn objects.
 * @param {number} x 
 * @param {number} y 
 * @param {number} r 
 * @param {number} sAngle 
 * @param {number} eAngle 
 * @param {boolean} counterClockWise 
 */
function Ball(x, y, r, sAngle, eAngle, counterClockWise) {

    this.x = x;
    this.y = y;
    this.r = r;
    this.sAngle = sAngle;
    this.eAngle = eAngle;
    this.counterClockWise = counterClockWise;
    this.fill = null;
    this.number = null;
    this.ready = true;
    this.finished = false;
  }
  
  // Draws this ball to a given context
  Ball.prototype.draw = function(ctx) {
    var _this = this;
    var xCoord = this.x;
    var yCoord = this.y;
    var ballRadius = this.r;
    var ballSAngle = this.sAngle;
    var ballEAngle = this.eAngle;
    var ballCounterClockWise = this.counterClockWise;
    var e = this.fill
    this.ready = false;

    //This setTimeout will ensure that the balls could start with a variation of speed
    setTimeout(
      
      function()
      { 
        //formula to use the clear rect just to the element instead of the whole canvas
        ctx.clearRect(startXCoords-ballRadius, yCoord-ballRadius, limitX, ballRadius*2);
        ctx.beginPath();
        ctx.fillStyle = e;
        ctx.arc(xCoord,yCoord, ballRadius, ballSAngle, ballEAngle, ballCounterClockWise);
        ctx.closePath();
        ctx.fill();
        _this.ready = true;
        
      }, Math.floor(Math.random() * speedSpawning) + 1
    
    );

  }