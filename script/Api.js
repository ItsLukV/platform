/*
gotData()
sunGet
*/

let url =
  "https://api.openweathermap.org/data/2.5/weather?id=2618424&appid=2a0853a28b198e2d0fb19c11ce2a044a";
//api.openweathermap.org/data/2.5/weather?id=2618424&appid=3d458e6af50ae07021a3f6fa1af4bc45
var data;
function gotData(info) {
  data = info;
  if (data) {
    console.log(data);
  }
}

function sunGet(/*checks if sun is up*/) {
  if (
    new Date().getTime() / 1000 > data.sys.sunrise &&
    new Date().getTime() / 1000 < data.sys.sunset
  ) {
    light = true;
  } else {
    light = false;
  }
  console.log("lighting is currently " + light);
  return light;
}
