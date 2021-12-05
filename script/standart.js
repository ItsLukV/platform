//a mix of everyones code

/*
preload()
setup()
draw()
*/
var platNum = 10;
var state = "gameStart";
var running = false;

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
  if (running == true) {
    game();
  } else {
    menu();
    screenSelect();
  }
}

function game() {
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
  canvasCut();
  levelChange();
}

function screenSelect() {
  if (state == "gamestart") {
    setBackDrop(false);
  } else if (state == "gameover") {
  }
}
var Menu = true;
function menu() {
  if (Menu) {
    knap = createButton("Start");
    knap.position(plotx(800 - 250), ploty(450 - 125));
    knap.mousePressed(tryk);
    Menu = !Menu;
  }
  function tryk() {
    running = true;
    knap.hide();
    print("Start");
  }
}

function variableFlush(){
  //level_motor
  level = 0;
  point = 0;
  bonusNum = null;
  levelStore = null;
  levlPoint = 0;
  pointModify = 1;
  startTime = 0;
  turtorial = true;
  turtorialTime = 0
  loadedLevels = []
  levelDifficulty = []

  //standard
  platNum = 10;
  state = "gameStart";
  running = false;
  Menu = true;

  //sketch
  x = 0
  y = 100
  velY = 0
  velX = 0
  speed = 100
  friction = 0.8
  gravty = true
  gravtyacc = 2
  jumpH = 130
  BundCol = false
  moveSpeed = 5
  moveplatform = true

  //background
  scrX = 0
  scrY = 0
}