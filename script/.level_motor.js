
var level = 0
var point = 0
var bonusNum = null
var levelStore = null
var levlPoint = 0
platformChange = []

//0 = turtorial
function levelChange() {
    if (level == "bonus"){
        bonusLevel()
    }else{
        if (mand.y < 5){
            level -= 5
            if(level < 0){
                endGame()
                return
            }else{
                levelLogic()
                return
            }
        } 
        if (mand.x > 1550){
            level ++
            levelLogic()
            return
        } else if(mand.x < 30){
            level --
            levelLogic()
            return
        }
    }
}

function levelLogic() {
    //player stuff
    mand.x = 150
    mand.y = 100
    mand.col =- 5
    
    //platform stuff
    for(let i = 0; i > platNum; i++){
        if(platform[i].w > 100){
        platformChange [i] = math.floor(random(0,2))
        platformChange [i+100] = math.floor(random(0,2))
        platform[i].w =- platformChange [i]
        platform[i].h =- platformChange [i+100]
        }
    }
    
    //score prep
    if(levelPoint > level){

    }
}

function pointMultiplier() {
    
}

function scoreboard() {
    
}

function gameOver() {
    
}

function bonusLevel(){
    
}