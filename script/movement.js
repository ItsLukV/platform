/*
movement
*/
var x = 0,
  y = 100,
  velY = 0,
  velX = 0,
  speed = 2,
  friction = 0.8,
  gravty = true,
  gravtyacc = 2,
  jumpH = 50,
  BundCol = true,
  moveSpeed = 5;

var mand, platform;

function movement() {
  //inspiration: http://jsfiddle.net/loktar/dMYvG/
  if (keyIsPressed) {
    if (BundCol == true) {
      if (keyIsDown(UP_ARROW)) {
        //32
        //OP
        print(velY);
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
