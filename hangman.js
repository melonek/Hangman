var textArray = [
  "cottage",
  "fortune",
  "mention",
  "certainty",
  "arranging",
  "smallness",
  "conveying",
  "plate",
  "grave",
  "dissimilar",
  "favourable",
  "unreserved",
  "expression",
  "contrasted",
  "removing",
  "pretended",
  "listening",
  "perceived",
  "denoting",
  "jointure",
  "occasion",
  "raillery",
  "Introduced",
  "imprudence",
  "unpleasing",
  "acceptance",
  "Exeter",
  "wisdom",
  "weather",
  "repeated",
  "speaking",
  "Excited",
  "hastily",
  "pasture",
  "observe",
  "frankness",
  "cordially",
  "immediate",
  "recommend",
  "contained",
  "Imprudence",
  "insensible",
  "literature",
  "solicitude",
  "affronting",
  "possession",
  "Compass",
  "journey",
  "request",
  "thoughts proposal",
  "decisively dispatched",
  "supposing suspicion",
  "preference",
  "excellence"
];
var rand = Math.floor(Math.random() * textArray.length);
var textArrayVariable = textArray[rand];

var keyword = textArrayVariable;
keyword = keyword.toUpperCase();
var deadMan = 0;

var length = keyword.length;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var bgmusic = new Audio("song.wav");

document.addEventListener("click", musicPlay);
function musicPlay() {
  bgmusic.play();
  bgmusic.volume = 0.2;
}

var keywordOne = "";

for (i = 0; i < length; i++) {
  if (keyword.charAt(i) == " ") keywordOne = keywordOne + " ";
  else keywordOne = keywordOne + "-";
}

function writeSaying() {
  document.getElementById("board").innerHTML = keywordOne;
}

window.onload = start;
var letters = new Array(26);

letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

function start() {
  var contentOfAlphabet = "";

  for (i = 0; i < letters.length; i++) {
    var element = "lit" + i;
    contentOfAlphabet =
      contentOfAlphabet +
      '<div class="letter" onclick="check(' +
      i +
      ')" id="' +
      element +
      '">' +
      letters[i] +
      "</div>";
    if ((i + 1) % 6 == 0)
      contentOfAlphabet = contentOfAlphabet + '<div style="clear:both;"></div>';
  }

  document.getElementById("alphabet").innerHTML = contentOfAlphabet;

  writeSaying();
}

String.prototype.pushSign = function(place, sign) {
  if (place > this.length - 1) return this.toString();
  else return this.substr(0, place) + sign + this.substr(place + 1);
};
function check(num) {
  var guessed = false;

  for (i = 0; i < length; i++) {
    if (keyword.charAt(i) == letters[num]) {
      keywordOne = keywordOne.pushSign(i, letters[num]);
      guessed = true;
    }
  }
  if (guessed == true) {
    yes.play();
    yes.volume = 0.4;
    var element = "lit" + num;
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00C000";
    document.getElementById(element).style.border = "3px solid #00C000";
    document.getElementById(element).style.cursor = "default";

    writeSaying();
  } else {
    no.play();
    no.volume = 0.6;
    var element = "lit" + num;
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#C00000";
    document.getElementById(element).style.border = "3px solid #C00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick", ";");

    //dead
    deadMan++;
    var image = "css/images/h" + deadMan + ".jpg";
    document.getElementById("hangman").innerHTML =
      '<img src="' + image + '" alt=""/>';
  }
  //winning

  if (keyword == keywordOne)
    document.getElementById("alphabet").innerHTML =
      "Yes, you've guessed it right: " +
      keyword +
      '<br><br/><span class="reset" onclick="location.reload()">ONCE AGAIN?</span>';

  //losing
  if (deadMan >= 9)
    document.getElementById("alphabet").innerHTML =
      "You lost! The answer was: " +
      keyword +
      '<br><br/><span class="reset" onclick="location.reload()">ONCE AGAIN?</span>';
}
