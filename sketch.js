// let fontBl;
let font, points=[];
let r = 25;
let angle =0;

function preload() {
  // fontBl = loadFont("fonts/Roboto-Black.ttf")
  font = loadFont("Roboto-Regular.ttf")
}

function setup() {
  // frameRate(3)
  createCanvas(700, 400);
  // fill('magenta');
  textSize(50);
  textFont(font);


  points = font.textToPoints("PCC", 50, 300, 300, {
    sampleFactor:0.2,
  simplifyThreshold:0});

  angleMode(DEGREES)
}

function draw() {
  background(0);

  // text("Hello", 20, 50);

  for (let i=0; i<points.length; i++) {
    fill(random(255), random(255), random(255));
    ellipse(points[i].x + r*sin(angle + i*25), points[i].y, 10, 10)
  }
  angle += 10;
}
