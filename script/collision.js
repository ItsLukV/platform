/*
collision
collisionkl
*/

//Lukas

// player.y + player.size < object.y /*over*/

function collision(player, object) {
  if (
    player.y + player.size > object.y //over
    && player.size + player.y < object.y + object.h  // //under
    && player.x + player.size > object.x //højre
    && player.x < object.x + object.w //venstre
  ) {
    BundCol = true;
    gravty = false;
    player.y = object.y - player.size;
  } else {
    BundCol = false;
    gravty = true;
  }
}
