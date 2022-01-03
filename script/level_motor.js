//95% david kode 5% lukas code

var level = 0;
var point = 0;
var bonusNum = null;
var levelStore = null;
var levlPoint = 0;
var pointModify = 1;
var startTime = 0;
var turtorial = true;
var turtorialTime = 0;
const loadedLevels = [];
var maxLevel = 0

// var scoreboard = JSON.Parse(scoreboardJSON);
// var scoreboardJSON = //the way to get a JSON from a server

//level = 0 = turtorial
function levelChange() {
  if (level < 0) {
    print("uncaught below 0 level= " + level);
    running = false
    print ("set running = true to contenue")
    for (let i = 0; j;i++){
      let j = false
      wait(100)
      if(running == true){
        j = true
      }
    }
    death();
    return;
  }
  if (level == 0) {
    //chacks if you are in level 0
    turtorial = true;
    timer("start");
  } else if (turtorial == true) {
    turtorial = false;
    turtorialTime = timer("end"); //sets turtorial penalty
    print("stop turtorial" + turtorialTime);
  }
  if (mand.y >= 900-50) {
    //decrease level if man is leaving level (bottom)
    bottomLevel();
    return;
  } else if (mand.x > 1550) {
    //increases level if on right side of screen
    rightLevel();
    return;
  } else if (mand.x < 30) {
    //decrease level if man is leaving level (left side)
    behindLevel();
    return;
  }
}

function bottomLevel() {
  level -= 2;
  gameEnd()
  levelLogic(false); // loads level if above level 0
  print(level)
}

function rightLevel() {
  level++;
  levelLogic(true);
  saveDifficulty();
  gameEnd()
}

function behindLevel() {
  level--;
  gameEnd()
  levelLogic(false); // loads level if above level 0
}

function levelLogic(increase) {
  //player stuff
  mand.x = 150; // makes sure player is in starting possition for the level
  mand.y = 100;

  //platform stuff
  console.log("level logic");
  if (increase) {
    // if level increased
    console.log("increased level");
    if (!loadedLevels[level]) {
      console.log("level not loaded");
      mand.col -= 5; // changes player color to differentiate number of level changes
      if (platNum > 5 && random(0,2)>1) {
        platNum -= 1;
      } else {
        for (let i = 0; i > platNum; i++) {
          let platformChange = 0; //
          if (platform[i].w > 100) {
            //changes the size of each platform individually
            platformChangeW[i] = math.floor(random(0, 2));
            platformChangeH[i] = math.floor(random(0, 2));
            platform[i].w -= platformChange[i];
            if (platform[i].h >= 10) {
              platform[i].h -= platformChangeH[i]; //Ikke for små
            }
            pointMultiplier(platformChangeW[i], null); // gives more points for smaller plaforms
            pointMultiplier(platformChangeH[256], null);
          } else {
            pointModify += 0.03; // if the platform is already at minimum size give extra multiplier
          }
        }
      }
      for (let i = 0; i > platNum; i++) {
        let platformChange = 0; //
        if (platform[i].w > 100) {
          //changes the size of each platform individually
          console.log("size running");
          platformChangeW[i] = math.floor(random(0, 2));
          platformChangeH[i] = math.floor(random(0, 2));
          platform[i].w -= platformChangeW[i];
          platform[i].h -= platformChangeH[i]; //Ikke for små
          pointMultiplier(platformChangeW[i], null); // gives more points for smaller plaforms
          pointMultiplier(platformChangeH[i], null);
        } else {
          pointModify += 0.03; // if the platform is already at minimum size give extra multiplier
        }
      }
      if (level != levelStore) {
        //checks if the level has changed
        pointMultiplier(null, level - levelStore); // sets a level multiplier
      }
    }
  } else {
    // if level didn't increase
    console.log("level didn't increase");
    mand.col += 5; // changes player color to differentiate number of level changes
    platNum = levelDifficulty[level].platforms; //loads the number of platforms for this level
    pointModify = levelDifficulty[level].multi; //loads the multiplier for the level
    for (let i = 0; i < platNum; i++) {
      //loads the size of all the platfroms
      platform[i].w = levelDifficulty[level].specPlat[i].specPlatW;
      platform[i].h = levelDifficulty[level].specPlat[i].specPlatH;
    }
  }
}

function pointMultiplier(platformMulti, levelMulti) {
  if (platformMulti != null) {
    //checks if platform math
    pointModify += platformMulti * 1.01;
    return;
  }
  if (levelMulti != null) {
    //checks if level math
    pointModify += levelMulti * 1.3;
  }
}

function timer(go) {
  //makes a timer to calculate points at the end
  if (go == "start") {
    //gets a start time for the program
    startTime = new Date().getTime();
    return startTime;
  } else if (go == "end") {
    //gets the time between start and 'end'
    return new Date().getTime() - startTime;
  }
}

function score() {
  return (
    //gives a score based on time and multiplier
    timer("end") -
    startTime /*5332*/ -
    ((timer("end") - startTime) % 1000) -
    ((turtorialTime - (turtorialTime % 1000) / 1000 / 1000) / 2) * pointModify
  );
  console.log("score running");
}

function scoreboard(score) {
  console.log("scoreboard running");
  return score; //temp until server works
  //will use json on HTX.mtdm.dk
  //still need to figure out how
  //DOES NOT FUNCTION
}

function gameOver() {
  //will end game
  console.log(scoreboard(score())); //generates a score
  death();
}

const levelDifficulty = []; // stores levels
function saveDifficulty() {
  // creates a saved level
  if (levelDifficulty[level] == undefined) {
    levelDifficulty[level] = new DifficultyStorage();
  }
}

function DifficultyStorage() {
  //contains level info
  console.log("difficulty storage runnning");
  this.platforms = platNum; //number of platform
  this.multi = pointModify; // point modifier
  this.specPlat = [];
  for (let i = 0; i < platNum; i++) {
    //Store the size of all the platfroms
    this.specPlat[i] = new DifficultyPlatformStorage(i);
  }
}

function DifficultyPlatformStorage(j) {
  //contains level info
  console.log("size storage running");
  this.specPlatH = platform[j].h; //high
  this.specPlatW = platform[j].w; //breden
}

function gameEnd(){
  if(level>maxLevel){
    maxLevel = level
  } else if ((maxLevel-4) <= level){
    gameOver()
  }
}