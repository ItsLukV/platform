/*
movement
*/


function movement() {
  //inspiration: http://jsfiddle.net/loktar/dMYvG/
  if (keyIsPressed) {
    if (BundCol == true) {
      BundCol = !BundCol;
      if (keyIsDown(UP_ARROW)) {
        //32
        //OP
        if (velY > -speed) {
          velY -= jumpH;
        }
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      //Højre
      if (velX < speed) {
        velX += moveSpeed;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      //37
      //Venstre

      if (velX > -speed) {
        velX -= moveSpeed;
      }
    }
  }

  velY *= friction;
  y += velY;
  velX *= friction;
  x += velX;
}
