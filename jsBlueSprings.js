/*
 * Lab code rewritten in JavaScript
 */
let LABEL = 'Blue Springs State Park';
let img;

let colors = ['#214F4A', '#9CC0CB', '#56776E', '#CBBBAF', '#312B2B'];
let fontNames = ['assets/GohaTibebZemen.otf', 'assets/SourceSansPro-Regular.otf', 'assets/SyrCOMAntioch.otf', 'assets/SyrCOMEdessa.otf'];
  
let fonts = new Array (fontNames.length);
let ci = 0; // current background color index
let fi = 0; // current font index
let fci = (colors.length - 1); // current font color index

function preload() {
  for (let i = 0; i < fontNames.length; i++) {
    fonts[i] = loadFont(fontNames[i]);
  }
  for (let i = 0; i < 4; i++) {
    fonts[i]
  }
  img = loadImage('assets/Blue_Springs.jpg');
}

function setup() {
  createCanvas(825, 500);
  noFill();
  frameRate(30);
  background (colors[0]);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(48);
  textFont(fonts[++fi]);
  noLoop();
}


function draw() {
  background(colors[ci]);
  set(50, 150, img);
  text('Blue Springs State Park', width/2, 75);
}

function keyReleased() {
  switch (key) {
  case 't':
  case 'T':
    fi = ++fi % colors.length;
    textFont(fonts[fi]);
    break;
  case 'c':
  case 'C': // change the font color
    fci = (fci==0)? colors.length-1 : --fci;    //if 0 change to max index, else substract 1
    if (fci == ci)                          // if font color = background color 
      // indices are the same
      fci = (fci==0)? colors.length-1 : --fci;  // update font color
    fill (colors[fci]);
    break;
  case 'q':
  case 'Q':
    exit();
  default:
    break;
  }
  redraw();
}

function mouseReleased() {
  ci = ++ci % colors.length;
  if (ci == fci)                          // if font color = background color 
      // indices are the same
      ci = (fci==(colors.length-1))? 0 : ++fci;  // update bg color
  console.log ("mouse released");
  redraw();
}
