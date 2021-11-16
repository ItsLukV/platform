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
  for (var i = 0; i < 2; i++) {
    platform[i] = new Platform();
  }
  canvasCut();
}

function draw() {
  fill(0);
  setBackDrop(false);
  for (var i = 0; i < 2; i++) {
    platform[i].display();
  }
  movement();

  // collision(mand, platform[0]);
  // collision(mand, platform[1]);

  mand.display();

  tyndekraft();
  mand.x += velX;
  mand.y += velY;
  canvasCut();
}
