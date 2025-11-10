var x1 = 50
var y1 = 50
var x2 = 600
var y2 = 450
var speed1 = 2
var speed2 = 2
var playerX = 50
var playerY = 550
var a = 65
var d = 68
var w = 87
var s = 83
var mousex;
var mousey;

function setup() 
{
    createCanvas(800, 600);

    x1 = floor(random(1, 800));
    y2 = floor(random(1, 600));
    speed1 = floor(random(3,10));
    speed2 = floor(random(5,10));    
}

function draw() 
{
// set background color
    background(255, 252, 211);

// call border function
    createBorder();

// call player function 
    createPlayer();

// call move player function
    movePlayer();

// call create circle function
    createCircle();

// call create obstacles function
    createObstacles();

// call exit function
    createExit();

// call check for win function
    checkForWin();

// call player boundaries function
    playerBoundaries();
}

/////////////////////////////////////////////////////////////////// FUNCTIONS

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

// CREATE OBJECTS FUNCTION
function createObstacles(){
    strokeWeight(0);
    fill(30, 40, 86);
    circle(x1, y1, 20);
    y1 += speed1;
// call move circle 1 function
    moveCircle1();
// create circle 2
    fill(100, 150, 250);
    circle(x2, y2, 100);
    x2 += speed2;
// call move circle 2 function
    moveCircle2();
}

// MOVEMENT FOR CIRCLE 1 FUNCTION
function moveCircle1(){
// send circle 1 back to top when it goes off screen
    if (y1 >= 610){
        y1 = 0;
        x1 = floor(random(1,800));
    }
}

// MOVEMENT FOR CIRCLE 2 FUNCTION
function moveCircle2(){
// send circle 2 back to left when it goes off screen
    if (x2 >= 850){
        x2 = 0;
        y2 = floor(random(1,600));
    }
}

// CREATE BORDER FUNCTION
function createBorder(){
    fill(255, 0, 0);
    rect(0, 0, 800, 5);
    rect(0, 0, 5, 600);
    rect(0, 595, 800, 5);
    rect(795, 0, 5, 600);  
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
