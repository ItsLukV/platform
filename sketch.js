let url =
  "https://api.openweathermap.org/data/2.5/weather?id=2618424&appid=2a0853a28b198e2d0fb19c11ce2a044a";
//api.openweathermap.org/data/2.5/weather?id=2618424&appid=3d458e6af50ae07021a3f6fa1af4bc45
var data;

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
  rect((width - 1600) / 2, (height - 900) / 2, 1600, 900);
}

function setup() {
  sunGet();
  setBackDrop();
}

function plotx(x /*0-1600*/) {
  x = (width - 1600) / 2 + x;
  return x;
}
function ploty(y /*0-900*/) {
  y = (height - 900) / 2 + y;
  return y;
}

//16:9 spille størlse
//1600 * 900 px

function draw() {
  fill(0);
  platforme();
  mand(50, 800);
  canvasCut();
}

function mand(x, y) {
  //original 462x642
  image(img, plotx(x), ploty(y - 100), 100, 100);
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
  rect(plotx(0) - 5, ploty(900), width + 10 - plotx(0));
  rect(plotx(1600), ploty(0) - 5, plotx(0), ploty(900) - ploty(0) + 10);
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
