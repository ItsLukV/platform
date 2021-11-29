//a mix of everyones code

/*
preload()
setup()
draw()
*/
var platNum = 10;

function preload() {
  img = loadImage("placeholder.png");
  loadJSON(url, gotData);
}

function setup() {
  sunGet();
  setBackDrop(true);

  //makes the object
  mand = new mand();
  for (var i = 0; i < platNum; i++) {
    platform[i] = new Platform();
  }
  canvasCut();
}

function draw() {
  fill(0);
  setBackDrop(false);
  for (var i = 0; i < platNum; i++) {
    platform[i].display();
    platform[i].move();
    collision(mand, platform[i]);
  }
  movement();
  // for(var i = 0; i < platNum; i++){
  // }
  mand.display();

  tyndekraft();
  mand.x += velX;
  mand.y += velY;
  // canvasCut();
  levelChange()
}
