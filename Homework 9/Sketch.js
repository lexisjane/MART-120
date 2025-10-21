function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(231, 246, 255); // Background
  textSize(32);
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
  point(210, 370); // Left eye
  point(290, 370); // Right eye

  fill(191, 159, 106); // Hair color
  strokeWeight(0);
  rect(140, 195, 220, 155); // Forehead 
  circle(135, 300, 100); // hair left
  circle(250, 160, 100); // hair top
  circle(170, 210, 100);
  circle(135, 400, 100);
  circle(135, 500, 100);
  circle(330, 210, 100); // hair right top
  circle(365, 300, 100); // hair right
  circle(365, 400, 100);
  circle(365, 500, 100);

  fill(229, 184, 135);
  triangle(245, 395, 250, 385, 255, 395); // Nose

  stroke(255, 182, 193); // Mouth color
  strokeWeight(5);
  line(230, 415, 270, 415); // Mouth
}