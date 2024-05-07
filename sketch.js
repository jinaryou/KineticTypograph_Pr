let font;
let points = [];
let bbox;

let r = 25;
let angle = 0;


// fonts
function preload(){
  font = loadFont("Roboto-Regular.ttf");
}

function setup() {
  createCanvas(600, 400);

  const fsize = 300;

  textFont(font);
  textSize(fsize);
  // textAlign(CENTER);

  points = font.textToPoints("JR", -170, 100, fsize, {
    samplefactor: 0.1,
  });

  angleMode(DEGREES);
  rectMode(CENTER);

  noStroke();
  noFill();
}

function draw() {
  background(0);
  let distance = dist(mouseX, mouseY, width/2, height/2);
  translate(width/2, height/2);
  if (distance <= 30) {
    angle += 0.1;
  }
  rotate(angle);
  rect(0,0, 50, 50);

  push();
  noFill();

  if (mouseIsPressed) {
    angle += 1;
    size = 50,
    fill(255, 100)
  }
  else {
    size = 30
  }

  for (let i=0; i<points.length; i++) {
    csin = r*sin(angle + i*5);
    ccos = r*cos(angle + i*5);
    stroke(i, 0, 255),
    rect(points[i].x + csin*0, points[i].y + ccos, size, size)
  }
  angle += 0.5;
  pop();

}
