/*
plotx()
plotY()
mand()
xBorder()
yBorder()
platform()
tyndekraft()
*/

var x = 0, //Dette er players x start postion
  y = 100, //Dette er players y start postion
  velY = 0, //Dette er players y start hastighed
  velX = 0, //Dette er players x start hastighed
  speed = 100, //Dette er max hastighed (hvis jeg husker rigtig)
  friction = 0.8, //Dette friction player har
  gravty = true, //Dette bestemer om tyndekrafen skal være til eller fra
  gravtyacc = 2, //Dette er tyndekraft acceleration
  jumpH = 80, //Dette er, hvor højt playen hopper
  BundCol = false, //Hvis denne er true er der collstion på bund af player
  moveSpeed = 3; //Dette bestemmer platform hastighed
moveplatform = true; //Dette bestemmer om platform skal bevæge sig //Dette caller player og platform

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
var mand = new manden(); //Dette er bare til visel, hvordan man skaber et object

function manden() {
  this.x = 150; //start position
  this.y = 100; //start position
  this.size = 100; //størrelsen på spilleren
  this.col = 255; //start farve

  this.display = function () {
    if (this.col > 0) {
      //dette er for at checke at farven ikke er i minus.
      fill(color(this.col, this.col, this.col));
    }
    rect(plotx(this.x), ploty(this.y), this.size, this.size); // dette tegner spilleren
  };
}

platform = [];

function platformen() {
  this.w = 200; //breden på spilleren
  this.h = 50; //højden på spilleren
  this.x = random(1, 1600); //start position
  this.y = random(1, 900 - this.h); //start position
  this.colR = 0; //hvor meget rød, platformen skal have
  this.colG = 50 + random(0, 190); // hvor meget grøn, platformen skal have
  this.colB = 0; // hvor meget grøn, platformen skal have

  this.display = function () {
    //dette tegner platformen
    fill(this.colR, this.colG, this.colB);
    rect(plotx(this.x), ploty(this.y), this.w, this.h);
  };
  this.move = function () {
    //Dette bevæger platformen
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
