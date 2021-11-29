//95% lukas 5% internet

/*
collision
collisionkl
*/

//Lukas

// player.y + player.size < object.y /*over*/

function collision(player, object) {
  if (
    freedome(object)
    // player.y + player.size > object.y //over
    // && player.size + player.y < object.y + object.h  // //under
    // && player.x + player.size > object.x //højre
    // && player.x < object.x + object.w //venstre
  ) {
    BundCol = true;
    gravty = false;
    player.y = object.y - player.size;
  } else {
    gravty = true;
  }
}

function freedome(object) {
  // for(let i = 0; i < mand.size; i++){
  //   if(freec(object,i)){
  //     return(true)
  //   }else{
  //     return(false)
  //   }
  // }

  if (mandOnBigObject(object) || mandOnSmallObject(object)) {
    if (manOnTopObject(object)) {
      return true;
    }
  }
  return false;
}
function mandOnBigObject(object) {
  return (
    (mand.x >= object.x && mand.x <= object.x + object.w) ||
    (mand.x + mand.size >= object.x &&
      mand.x + mand.size <= object.x + object.w)
  );
}

function mandOnSmallObject(object) {
  return (
    (object.x >= mand.x && object.x <= mand.x + mand.size) ||
    (object.x + object.w >= mand.x && object.x + object.w <= mand.x + mand.size)
  );
}
function manOnTopObject(object) {
  return (
    mand.y + mand.size >= object.y && mand.y + mand.size <= object.y + object.h
  );
}
// function freec(object,ii){
//   for(let i = 0; i> object.w; i++){
//     if(object.x+i == mand.x+ii){
//       return(true)
//     }else{
//       return(false)
//     }
//   }
// }
