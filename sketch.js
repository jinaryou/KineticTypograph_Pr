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

  points = font.textToPoints("JR", 0, 0, fsize, {
    samplefactor: 0.1,
  });

  bbox = font.textBounds("JR", 0, 0, fsize);

  angleMode(DEGREES)
}

function draw() {
  background(0);

  push();
  translate(width/2 - bbox.w/2, height/2 + bbox.h/3);

  // noFill()
  // stroke(255, 0, 0)
  // rect(bbox.x, bbox.y, bbox.w, bbox.h)

  noFill();
  // stroke(255, 255, 0)
  // points.forEach((pt, i) => {
  //   stroke(i, random(255), 255);
  //   ellipse(pt.x, pt.y, 40, 40);
  // });

  for (let i=0; i<points.length; i++) {
    stroke(i, random(255), 255),
    ellipse(points[i].x + r*cos(angle + i*5) , points[i].y, 50, 50)
  }
  angle += 1;
  pop();

  
  
}
