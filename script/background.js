/*
setBackDrop
canvasCut
scroll
*/

function setBackDrop(isSetup) {
  if (isSetup || windowHeight !== height || windowWidth !== width) {
    createCanvas(windowWidth, windowHeight);
    background(220);
    print("changes");
    if (sunGet) {
      fill(45, 181, 151);
      print("bright");
    } else {
      fill(45 / 2, 181 / 2, 151 / 2);
      print("dark");
    }
  } else {
    if (sunGet) {
      fill(45, 181, 151);
    } else {
      fill(45 / 2, 181 / 2, 151 / 2);
    }
  }
  rect((width - 1600) / 2, (height - 900) / 2, 1600, 900);
}

function canvasCut() {
  fill(150);
  noStroke();
  rect(0, 0, plotx(0), height); //left
  rect(0, 0, width, ploty(0)); //top
  rect(plotx(-5), ploty(900), width + plotx(10)); //bottom
  rect(plotx(1600), ploty(-5), plotx(0), ploty(900) + ploty(10)); // right
  stroke(0);
}

let scrX = 0; // screen ofset from start scene for x
let scrY = 0; //same but y
function scroll() {
  if (mand.x < 50) {
    scrX = scrX - windowWidth + 150;
  } else if (mand.x + 100 > windowWidth - 50) {
    scrX = scrX + windowWidth - 150;
  }

  while (mand.y <= windowHeight / 8) {
    scrY--;
  }
  while (mand.y + 100 >= windowHeight - windowHeight / 8) {
    scrY++;
  }
}