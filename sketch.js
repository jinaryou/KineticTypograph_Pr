let font;
let points = [];

let r = 25;
let angle = 0;
let csin, ccos;
let size = 50;
let planes = [];
let toggle = true;
let depth = 0;
let rows; let cols;

let on = true;

// font
function preload() {
  font = loadFont("Roboto-Regular.ttf");
}

function setup() {
  createCanvas(600, 400, WEBGL);

  const fsize = 300;

  textFont(font);
  textSize(fsize);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;

  points = font.textToPoints("JR", -170, 100, fsize, {
    samplefactor: 0.1,
  });

  for (let i = 0; i<cols; i++) {
    planes[i] = [];
    for (let j =0; j<rows; j++) {
      planes[i][j] = new Plane(size/2 + i*size - (size*cols)/2, size/2 + j*size - (size*rows)/2);
    }
  }

  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {

  background(0);
  if (on) {
    background (0);
  } else (
    background (0, 0, 139)
  )

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      for (let k=0; k<points.length; k++) {
        distance = dist(points[k].x, points[k].y, planes[i][j].x, planes[i][j].y);
        
        if (distance <35) {
            planes[i][j].isLetter = true;
        } 
      }
      
      planes[i][j].display();
    }
  }

 // translate(width/-50, height / -50, depth);
 // box(50);

 // if (toggle) {
 // rotate(angle);
 // } 

  push();
  noFill();

  if (mouseIsPressed) {
    depth += 2*sin(angle);
    angle += 1;
    size = 50;
      fill(255, 100);
  }
  else {
    size = 30
  }

  for (let i = 0; i < points.length; i++) {
    // normalMaterial();
    stroke(i, 50, 255);

    if (toggle) {
      csin = r * sin(angle + i * 5);
      ccos = r * cos(angle + i * 5);
    }
    rect(points[i].x + csin * 0, points[i].y + ccos, size, size) 
  }
  angle += 0.5;
  pop();
}

function mousePressed() {
  if (on) {
    on = false;
  } else {
    on = true;
  }
}