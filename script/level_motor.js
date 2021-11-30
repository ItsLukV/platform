//95% david kode 5% lukas code

var level = 0;
var point = 0;
var bonusNum = null;
var levelStore = null;
var levlPoint = 0;
var pointModify = 1;
var startTime = 0;
var turtorial = true;
var turtorialTime = 0
var loadedLevels
// var scoreboard = JSON.Parse(scoreboardJSON);
// var scoreboardJSON = //the way to get a JSON from a server

//0 = turtorial
function levelChange() {
  if (level == 0) {//chacks if you are in level 0
    turtorial = true;
    timer("start");
  } else {
    if (turtorial = true){
      turtorial = false
      turtorialTime = timer("end")//sets turtorial penalty
    }
    if (mand.y < 5) { //decrease level if man is leaving level (bottom)
      level -= 5;
      if (level < 0) {
        gameOver(); // ends game if below level 0
        return;
      } else {
        levelLogic(false); // loads level if above level 0
        return;
      }
    }
    if (mand.x > 1550) { //increases level if on right side of screen
      level++;
      levelLogic(true);
      saveDifficulty()
      return;
    } else if (mand.x < 30) { //decrease level if man is leaving level (left side)
      levelStore = level;
      level--;
      if (level < 0) {
        gameOver(); // ends game if below level 0
        return;
      } else {
        levelLogic(false); // loads level if above level 0
        return;
      }
    }
  }
}

function levelLogic(increase) {
  //player stuff
  mand.x = 150; // makes sure player is in starting possition for the level
  mand.y = 100;
  mand.col = -5; // cahnges player color to differentiate number of level changes
  
  //platform stuff
  if(increase){ // if level increased
    if (!loadedLevels[level]){
      for (let i = 0; i > platNum; i++) {
        let platformChange = 0; // 
        if (platform[i].w > 100) { //changes the size of each platform individually
          platformChange[i] = math.floor(random(0, 2));
          platformChange[i + 256] = math.floor(random(0, 2));
          platform[i].w = -platformChange[i];
          platform[i].h = -platformChange[i + 256]; //Ikke for små
          pointMultiplier(platformChange[i], null); // gives more points for smaller plaforms
          pointMultiplier(platformChange[i + 256], null);
        } else {
          (pointModify += 0.03); // if the platform is already at minimum size give extra multiplier
        }
      }
      if (level != levelStore) { //checks if the level has changed
        pointMultiplier(null, level - levelStore);// sets a level multiplier
      }
    }
  }else{ // if level didn't increase
    platNum = levelDifficulty[level].platforms //loads the number of platforms for this level
    pointModify = levelDifficulty[level].multi//loads the multiplier for the level
    for(let i = 0; i < platNum; i++){ //loads the size of all the platfroms 
    levelDifficulty[level].specPlatH[i]
    levelDifficulty[level].specPlatw[i]
    }
  }
}

function pointMultiplier(platformMulti, levelMulti) {
  if (platformMulti != null) { //checks if platform math
    (pointModify +=platformMulti * 1.01);
    return;
  }
  if (levelMulti != null) {//checks if level math
    (pointModify +=levelMulti * 1.3);
  }
}

function timer(go) {//makes a timer to calculate points at the end
  if (go == "start") {//gets a start time for the program
    startTime = new Date().getTime();
    return (startTime)
  } else if (go == "end") {//gets the time between start and 'end'
    return startTime - new Date().getTime();
  }
}

function score() {
  return (//gives a score based on time and multiplier
    (timer("end") - startTime - ((timer("end") - startTime) % 1000))-((turtorialTime-((turtorial%1000)/1000) / 1000)/2) *
    pointModify
    )
  }

function scoreboard(score) {
  //will use json on HTX.mtdm.dk
  //still need to figure out how
  //DOES NOT FUNCTION
}

function gameOver() {//will end game
  
  scoreboard(score());//generates a score 
}


const levelDifficulty = [] // stores levels
function saveDifficulty(){ // creates a saved level
  if(levelDifficulty[level] != null){
    levelDifficulty[level] = new DifficultyStorage()
  }
}

function DifficultyStorage(){ //contains level info
  this.platforms = platNum //number of platform
  this.multi = pointModify // poin modifier
  for(let i = 0; i<this.platforms; i++){ //platform sizes
    this.specPlatH[i] = platform[i].h //højden
    this.specPlatW[i] = platform[i].w //breden
  }
}