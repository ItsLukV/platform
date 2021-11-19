
var level = 0
var point = 0
var bonusNum = null
var levelStore = null
var levlPoint = 0
var pointModify = 1

//0 = turtorial
function levelChange() {
    if (level == "bonus"){
        bonusLevel()
    }else{
        if (mand.y < 5){
            level -= 5
            if(level < 0){
                gameOver()
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
            levelStore = level
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
        let platformChange = 0
        if(platform[i].w > 100){
            platformChange [i] = math.floor(random(0,2))
            platformChange [i+256] = math.floor(random(0,2))
            platform[i].w =- platformChange [i]
            platform[i].h =- platformChange [i+256]
            pointMultiplier(platformChange[i],null)
            pointMultiplier(platformChange[i+256],null)
        }else{
            pointModify =+ 0,03
        }
        if(level != levelStore){
            pointMultiplier(null,(level-levelStore))
        }
    }
}

function pointMultiplier(platformMulti,levelMulti) {
    if(platformMulti==!null){
        pointModify =+ platformMulti * 1,01
        return
    }
    if(levelMulti==!null) {
        pointModify =+ levelMulti *1,3
    }
}

function scoreboard() {
    
}

function gameOver() {
    
}

function bonusLevel(){
    
}