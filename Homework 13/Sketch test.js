var myX = [];
var myY = [];
var myDiameter = [];
var myColors = [];
var speed = [];
var playerX = 50
var playerY = 550
var a = 65
var d = 68
var w = 87
var s = 83
var mousex;
var mousey;

function setup() {
    createCanvas(800,600);
    for(var i = 0; i < 6; i++) {
        myX[i] = randomNumber(750);
        myY[i] = randomNumber(550);
        myDiameter[i] = randomNumber(100);
        myColors[i] = [randomColor(), randomColor(), randomColor()];
        speed[i] = Math.floor(random(2,10));
    }
}

function draw() {
    background(255, 252, 211);
    noStroke();
    for(var i = 0; i < myX.length; i++) {
        fill(myColors[i][0], myColors[i][1], myColors[i][2]);
        circle(myX[i],myY[i],myDiameter[i]);
        myY[i] += speed[i];
        myX[i] += speed[i];
        // KEEP VETICALLY ON SCREEN
        if (myY[i] > height) {
            myY[i] = 0;
        } else if (myY[i] < 0) {
            myY[i] = height;
       }
        // KEEP HORIZONTALLY ON SCREEN
        if (myX[i] > width) {
            myX[i] = 0;
        } else if (myX[i] < 0) {
            myX[i] = width;
        }
    }
    // call border function
    createBorder();

    // call player function 
    createPlayer();

    // call move player function
    movePlayer();

    // call create circle function
    createCircle();

    // call exit function
    createExit();

// call check for win function
    checkForWin();

// call player boundaries function
    playerBoundaries();
}

/////////////////////////////////////////////////////////////////// FUNCTIONS

// CREATE RANDOM NUMBER VALUE FOR CIRCLE LOCATION
function randomNumber(number) {
    return Math.floor(Math.random()*number)+10;
}

// CREATE RANDOM COLOR VALUE FOR CIRCLE
function randomColor() {
    return Math.floor(Math.random()*256);
}

// CREATE BORDER FUNCTION
function createBorder(){
    fill(255, 0, 0);
    rect(0, 0, 800, 5);
    rect(0, 0, 5, 600);
    rect(0, 595, 800, 5);
    rect(795, 0, 5, 600);  
}

// CREATE PLAYER FUNCTION
function createPlayer(){
    fill(145, 30, 180);
    circle(playerX, playerY, 40);
}

// MOVE PLAYER FUNCTION
function movePlayer(){
// control down
    if (keyIsDown(s)) { 
        playerY += 5;
    }
//control up
    if(keyIsDown(w)) {
        playerY -= 5;
    }
// control left
    if(keyIsDown(a)) {
        playerX -= 5;
    }
// control right
    if(keyIsDown(d)) {
        playerX += 5;
    }
}

// CREATE CIRCLE FUNCTION 
function createCircle(){
// create circle when mouse is clicked
    fill(255, 0, 0);
    circle(mousex, mousey, 50);
}
 
// CHECK WHERE MOUSE IS
function mouseClicked(){
    mousex = mouseX;
    mousey = mouseY;
}

// CREATE EXIT FUNCTION
function createExit(){
    fill(145, 30, 180);
    square(740, 0, 60);
    fill(255, 255, 255);
    textFont('Bold');
    textSize(16);
    text('EXIT', 755, 35);
}

// CHECK FOR WIN FUNCTION
function checkForWin(){
    if(playerX >= 740 && playerY <= 60) {
        textFont('Verdana');
        textSize(40);
        fill(48, 25, 52);
        text('You Win!', 300, 300);
    }
}

// CREATE PLAYER BOUNDARIES FUNCTION
function playerBoundaries(){
    if(playerX < 20 || playerX > 780 || playerY < 20 || playerY > 580) {
        playerX = 50;
        playerY = 550;
    }
}
