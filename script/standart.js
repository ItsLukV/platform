/*
preload()
setup()
draw()
*/

function preload() {
  img = loadImage("placeholder.png");
  loadJSON(url, gotData);
}

function setup() {
  sunGet();
  setBackDrop(true);

  //makes the object
  mand = new mand();
  platform = new platform();
  canvasCut();
}

function draw() {
  fill(0);
  setBackDrop(false);
  platform.display();
  movement();
  collision(mand, platform);
  mand.display();

  tyndekraft();
  mand.x += velX;
  mand.y += velY;
  canvasCut();
}
