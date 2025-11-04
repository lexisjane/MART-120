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
    background(220);

    x1 = floor(random(1, 800));
    y2 = floor(random(1, 600));
    speed1 = floor(random(3,10));
    speed2 = floor(random(5,10));    
}

function draw() 
{
    background(255, 252, 211);
    strokeWeight(0);
    fill(30, 40, 86);
    circle(x1, y1, 20);
    y1 += speed1;
// send circle 1 back to top when it goes off screen
    if (y1 >= 610){
        y1 = 0;
        x1 = floor(random(1,800));
    }
// send circle 2 back to left when it goes off screen
    fill(100, 150, 250);
    circle(x2, y2, 100);
    x2 += speed2;

    if (x2 >= 850){
        x2 = 0;
        y2 = floor(random(1,600));
    }
// player
    fill(145, 30, 180);
    circle(playerX, playerY, 40);
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
// exit
    square(740, 0, 60);
    fill(255, 255, 255);
    textFont('Bold');
    textSize(16);
    text('EXIT', 755, 35);
// check for win condition
    if(playerX >= 740 && playerY <= 60) {
        textFont('Verdana');
        textSize(40);
        fill(48, 25, 52);
        text('You Win!', 300, 300);
    }
// player boundaries
    if(playerX < 20 || playerX > 780 || playerY < 20 || playerY > 580) {
        playerX = 50;
        playerY = 550;
    }
// create border
    strokeWeight(10);
    stroke(255, 0, 0);
    noFill();
    rect(0, 0, 800, 600);   
// create circle when mouse is clicked
    fill(255, 0, 0);
    circle(mousex, mousey, 50);
}
// check where mouse is
function mouseClicked(){
        mousex = mouseX;
        mousey = mouseY;
}
   

 