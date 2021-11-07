let url =
"https://api.openweathermap.org/data/2.5/weather?id=2618424&appid=2a0853a28b198e2d0fb19c11ce2a044a";
//api.openweathermap.org/data/2.5/weather?id=2618424&appid=3d458e6af50ae07021a3f6fa1af4bc45
var data;
let gravit8
let xX = 50 //charector x
let yY = 800 // same but y


function preload() {
  img = loadImage("placeholder.png");
  loadJSON(url, gotData);
}
function gotData(info) {
  data = info;
  if (data) {
    print(data);
  }
}

function setBackDrop() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  if (sunGet) {
    fill(45, 181, 151);
    print("bright");
  } else {
    fill(45 / 2, 181 / 2, 151 / 2);
    print("dark");
  }
  rect(plotx(0), ploty(0), plotx(1600), ploty(900));
}

function setup() {
  sunGet();
  setBackDrop();
}

function plotx(x /*0-1600*/) {
  if(width<1600){
    x = ((width - 1600) / 2 + x)/2;
  }else if(height<900){
    x = ((width - 1600) / 2 + x)/2;
  }else{
    x = (width - 1600) / 2 + x
  }
  print (x)
  return x;
}
function ploty(y /*0-900*/) {
  if(width<1600){
    y = ((height - 900) / 2 + y)/2;
  }else if(height < 900){
    y = ((height - 900) / 2 + y)/2;
  }else{
    y = (height - 900) / 2 + y;
  }
  print (y)
  return y;
}

//16:9 spille størlse
//1600 * 900 px 

function draw() {
  fill(0);
  platforme();
  mand(xX, yY);
  canvasCut();
  yY=gravity(xX,yY)
}

function mand(x, y) {
  //original 462x642
  image(img, plotx(x), ploty(y - 100), imgSize(), imgSize());
}

function platforme() {
  fill(0, 50, 0);
  rect(plotx(50), ploty(800), 600, 60);
}

function canvasCut() {
  fill(150);
  noStroke();
  rect(0, 0, plotx(0), height);
  rect(0, 0, width, ploty(0));
  rect(plotx(-5), ploty(900), width - plotx(10));
  rect(plotx(1600), ploty(-5), plotx(0), ploty(900) - ploty(10));
  stroke(0);
}

//data.sys.sunrise
//data.sys.sunset
function sunGet(/*checks if sun is up*/) {
  if (
    new Date().getTime() / 1000 > data.sys.sunrise &&
    new Date().getTime() / 1000 < data.sys.sunset
  ) {
    light = true;
  } else {
    light = false;
  }
  print("lighting is currently " + light);
  return light;
}
function imgSize(){
  let v
  if(width<1600){
    v=50
  }else if(height < 900){
    v=50
  }else{
    v=100
  }
  return v;
}

//physics math shit made by david, higly inefficient but hopefully works
const collision =[]
function gravity(x,y){
  if(collisionTest(x,y)){}else{
    y++
    print (true)
    return y
  }
  print(false)
  return y
}
function collisionTest(x,y){
  for(let i; i < imgSize(); i++){
    /* checks collision in img
    if img has platform 1 pixel beneath, do nothing
    if not move one down
    const collision goes x then y meaning const collision mod 1600 = y
    const collision - (const collision mod 1600) = x
    this way a grid can be searched up for only the necesary parts */
    v = y*1600+i+x
    if(collision[v]){
    return(true)
    }
  }
  return(false)
}
