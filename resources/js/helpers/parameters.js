//This file should be used as a configuration file, you can change values here.

//This limits where the balls can travel
var myCanvas = document.getElementById('myCanvas');
//300px is for the condition of the game
var limitX=300;
var limitY=myCanvas.scrollHeight;
//This var controls the speed of canvas check (ms)
var canvasCheckSpeed = 100;
//This var controls how many balls we will have in the canvas
var ballsLimit = 30;
//This var must be used to control where will be start drawing the balls in the X axis
var startXCoords = 50;
//This var must be used to control where will be start drawing the first ball in the Y axis
var startYCoords = 20;
//This var must be used to add to the current xCoord how much will be moved with each iteration
var xCoordAdvance = 30;
//This var must be used as the speed of drawing balls in the setTimeout function (ms)
var speedSpawning = 600;
//This var contain the radius of each ball (size)
var ballRadius = 5;
//This var contains the sAngle of each ball
var ballSAngle = 0*Math.PI;
//This var constains the eAngle of each ball
var ballEAngle = 2*Math.PI;
//This var tells if the balls are counter clock wise
var counterClockWise = true;
//This var shows where the ball will be draw in the Y axis
var moveYPosition = 20;
//This var shows the max number of each ball holds to be prime
var maxNumber = 60;
//Colors
var blueColor="#0000ff";
var redColor="#ff0000";
var greenColor="#00ff00";
var yellowColor="#ffff00";
var orangeColor="#ffa500";
var purpleColor="#800080";
var grayColor ="#808080";
var blackColor = "#000000";
//Wall Limit 
//(pixels)
var sizeWidthWall=3;
//(pixels)
var sizeHeightWall=limitY;
//You should give more than the limitX cause if not, the wall in that X axis will be clear
var xCoordStartWall=limitX+50;
var yCoordStartWall=0;

