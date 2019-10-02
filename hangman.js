var keyword = "chinesse tea";
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

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";

function start() {
  var contentOfAlphabet = "";

  for (i = 0; i < 25; i++) {
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
