function dashboard() {
  if (!Menu) {
    //dette siger, hvis spiller køre skal den opdater dashboard
    div.html(`Level: ${level}. Score: ${score()}`);
  } else {
    //dette siger, hvis spiller ikke køre, skal denne sætte score til den sidste kende score.
    div.html(`Score: ${tempScore}, HighScore: ${Lscore}`);
  }
  div.style("height", "auto"); //dette bestemmer højden på div
  div.style("font-size", "100px"); //dette bestemmer font størlsen på div
  div.style("text-align", "center"); //Dette div i centrum
  div.style("width", "100%"); //dette bestmmer bredden på div
  div.position(0, 0); //dette fjener bagrund på div
}

var Lscore = localStorage.getItem("Score");

if (Lscore === null) {
  localStorage.setItem("Score", 0);
  Lscore = 0;
}

function saveScoreboard() {
  if (tempScore > Lscore) {
    localStorage.setItem("Score", tempScore);
    Lscore = tempScore;
  }
  console.log("test");
}
