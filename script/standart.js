//a mix of everyones code

/*
preload()
setup()
draw()
*/
var platNum = 10;
var state = "gameStart";
var running = false;
var myFont;

function preload() {
  myFont = loadFont("Font.ttf");
  img = loadImage("placeholder.png");
  loadJSON(url, gotData);
}
var div;

function setup() {
  sunGet();
  setBackDrop(true);

  //makes the object
  mand = new manden(); //burde hede mand men alt går i stykker hvis ske() heder mand()
  for (var i = 0; i < platNum; i++) {
    platform[i] = new platformen(); //skeen istedet for platform af samme grund
  }
  div = select(`#dashbord`);
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
function menu(death) {
  if (death) {
    push();
    // font(myFont);
    fill(0);
    textSize(100);
    text("GAME OVER", plotx(100), ploty(100));
    pop();
  }
  if (Menu) {
    knap = createButton("Start");
    knap.position(plotx(800 - 250), ploty(450 - 125));
    knap.mousePressed(tryk);
    Menu = !Menu;
  }
  function tryk() {
    timer("start");
    running = true;
    knap.hide();
    print("Start");
  }
}

function variableFlush() {
  //level_motor
  level = 0;
  point = 0;
  bonusNum = null;
  levelStore = null;
  levlPoint = 0;
  pointModify = 1;
  startTime = 0;
  turtorial = true;
  turtorialTime = 0;
  for (let i = 0; (loadedLevels.length = 0); i++) {
    loadedLevels[i] = undefined;
  }
  for (let i = 0; (levelDifficulty.lenght = 0); i++) {
    levelDifficulty[i] = undefined;
  }
  maxLevel = 0;
  finish = false;

  //standard
  platNum = 10;
  state = "gameStart";
  running = false;
  Menu = true;
  kanp = undefined;
  knap.hide();

  //sketch
  x = 0;
  y = 100;
  velY = 0;
  velX = 0;
  friction = 0.8;
  speed = 100;
  gravty = true;
  gravtyacc = 2;
  jumpH = 80;
  BundCol = false;
  moveSpeed = 3;
  moveplatform = true;
  mand = undefined;
  for (let i = 0; (platform.lenght = 0); i++) {
    platform[i] = undefined;
  }

  //background
  scrX = 0;
  scrY = 0;
  setup();
}

function dashboard() {
  console.log(score());
  div.html(`Level: ${level}. Score: ${score()}`);
  div.style("height", "auto");
  div.style("font-size", "100px");
  div.style("background-color", "220");
  div.style("text-align", "center");
  div.style("width", "100%");
  div.position(0, 0);
}
