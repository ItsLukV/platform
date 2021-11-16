/*
collision
collisionkl
*/

//Lukas

// player.y + player.size < object.y /*over*/

function collision(player, object) {
  if (freedome(object)
    // player.y + player.size > object.y //over
    // && player.size + player.y < object.y + object.h  // //under
    // && player.x + player.size > object.x //højre
    // && player.x < object.x + object.w //venstre
  ) {
    BundCol = true;
    gravty = false;
    player.y = object.y - player.size;
  } else {
    BundCol = false;
    gravty = true;
  }
}

function freedome(object){
  if(mand.y == object.y + mand.size){
    for(let i = 0; i < mand.size; i++){
      if(freec(object,i)){
        return(true)
      }else{
        return(false)
      }
    }
  }
}

function freec(object,ii){
  for(let i = 0; i> object.w; i++){
    if(object.x+i == mand.x+ii){
      return(true)
    }else{
      return(false)
    }
  }
}