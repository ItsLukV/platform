
var level = 0
var point = 0
var bonusNum = null
var levelStore = null

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
    for(let i= 0; i > platNum; i++){
        if(platform[i].w > 100){
        platform[i].w =- random(0,2)
        platform[i].h
        }
        
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