/*
plotx()
plotY()
mand()
xBorder()
yBorder()
platform()
tyndekraft()
*/

function plotx(x /*0-1600*/) {
  x = (width - 1600) / 2 + x;
  return x;
}

function ploty(y /*0-900*/) {
  y = (height - 900) / 2 + y;
  return y;
}

//16:9 spille størlse
//1600 * 900 px

function mand() {
  this.x = 150;
  this.y = 100;
  this.size = 100;
  this.col = color(255);

  this.display = function () {
    //original 462x642
    fill(this.col);
    rect(plotx(this.x), ploty(this.y), this.size, this.size);
    // image(img, plotx(this.x), ploty(this.y), this.size, this.size);
    line(plotx(this.x), 0, plotx(this.x), windowHeight);
    line(0, ploty(this.y), windowWidth, ploty(this.y));
  };
}

platform = [];

function Platform() {
  this.x = random(1, 1600);
  this.y = random(1, 900 - this.h);
  this.w = 200;
  this.h = 50;

  this.display = function () {
    fill(0, 50, 0);
    rect(plotx(this.x), ploty(this.y), this.w, this.h);
  };

  this.move = function () {
    if (moveplatform) {
      if (plotx(this.x) > plotx(0 - this.w)) {
        this.x -= 10;
      } else {
        this.x = 1600;
        this.y = random(1, 900 - this.h);
      }
    }
  };
}

function tyndekraft() {
  if (gravty) {
    velY += gravtyacc;
  }
}
