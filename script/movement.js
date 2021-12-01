//100% lukas code

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

function death() {
  running = false;
  setBackDrop(false);
  Menu = true;
  menu();
  mand.x = 100;
  mand.y = 100;
  level = 0
}
