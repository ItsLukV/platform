/*
collision
collisionkl
*/

//Lukas

// player.y + player.size < object.y /*over*/
// player.y + player.size > object.y /*under*/ ||

function collision(player, object) {
  if (player.y + player.size < object.y + object.h + player.size) {
    gravty = false;
    BundCol = true;
    player.y = object.y - player.size;
  } else {
    BundCol = false;
    gravty = true;
  }
}

function collisionskl(player, object) {
  if (
    //checker y lvl
    player.y < object.y + object.h / 2 + player.size / 2 &&
    player.y < object.y
  ) {
    if (
      //   checker inde for object
      object.y < player.y + player.size && //y level
      player.x < object.x + object.w / 2 + player.size / 2 &&
      player.x > object.x - object.w / 2 - player.size / 2
      //   (||)
    ) {
      gravty = false;
      BundCol = true;
      player.y = object.y - object.h / 2 - player.size / 2;
    } else {
      gravty = true;
      BundCol = false;
    }
  }
}
