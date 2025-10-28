var topX = 365;
var lowX = 365;
var yR = 370;
var yL = 370;
var dX = 365
var dY = 500;
var d = 100;
var topHairSpeed = 1;
var lowHairSpeed = 1;
var eyeSpeedL = 1;
var eyeSpeedR = 1;
var dHairSpeed = 1;
var tSize = 32;

function setup() {
  createCanvas(500, 600);
  topHairSpeed = floor(random(1, 10));
  lowHairSpeed = floor(random(1, 10));
  eyeSpeedL = floor(random(1, 10));
  eyeSpeedR = floor(random(1, 10));
  dHairSpeedX = floor(random(1,10));
  dHairSpeedY = floor(random(1,10));
}

function draw() {
  background(231, 246, 255); // Background
 // contol title text size 
  textSize(tSize);
  if (tSize >= 37){
    tSize *= -1;
  }
  tSize += 5

  strokeWeight(0);
  fill(150, 113, 159); // Font color
  textFont('Verdana');
  text('17% Poodle', 160, 30);

  textSize(16);
  text('Alexis Autrey', 370, 580);

  strokeWeight(0);
  fill(255, 224, 189); // Skin tone
  ellipse(250, 300, 230, 280); // Face

  strokeWeight(0);
  rect(227, 430, 46, 80); // Neck

  strokeWeight(0);
  fill(220, 208, 255); // Shirt color
  rect(150, 500, 200, 150); // Shirt
  stroke(78,159,229); // Eye color
  strokeWeight(10);
  // control left eye movement on y axis
  point(210, yL); // Left eye
  if (yL >= 600 || yL <= 0) {
    eyeSpeedL *= -1;
  }
  yL += eyeSpeedL;
// control right eye movement on y axis
  point(290, yR); // Right eye
  if (yR >= 600 || yR <= 0) {
    eyeSpeedR *= -1;
  }
  yR += eyeSpeedR;

  fill(191, 159, 106); // Hair color
  strokeWeight(0);
  rect(140, 195, 220, 155); // Forehead 
  circle(135, 300, 100); // hair left
  circle(250, 160, 100); // hair top
  circle(170, 210, 100);
  circle(135, 400, 100);
  // control bottom hair movement on x axis
  circle(lowX, 500, d);
  if(lowX >= 450 || lowX <= 50) {
    lowHairSpeed *= -1;
  }
  lowX += lowHairSpeed;

  circle(330, 210, 100); // hair right top
  circle(365, 300, 100); // hair right
  circle(topX, 400, d);

// control bottom hair along x and y axis
  circle(dX, dY, d); // hair right bottom
  if(dY >= 550 || dY <= 50) {
    dHairSpeedY *= -1;
  }
  dY += dHairSpeedY;
  if(dX >= 450 || dX <= 50) {
    dHairSpeedX *= -1;
  }
  dX += dHairSpeedX;

// control top hair movement on x axis
  if(topX >= 450 || topX <= 50) {
    topHairSpeed *= -1;
  }
  topX += topHairSpeed;

  fill(229, 184, 135);
  triangle(245, 395, 250, 385, 255, 395); // Nose

  stroke(255, 182, 193); // Mouth color
  strokeWeight(5);
  line(230, 415, 270, 415); // Mouth
}