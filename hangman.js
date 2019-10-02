var keyword = "Saying";
keyword = keyword.toUpperCase();

var length = keyword.length;
console.log(keyword.length);

var keywordOne = "";

for (i = 0; i < length; i++) {
  if (keyword[i] == " ") keywordOne = keywordOne + " ";
  else keywordOne = keywordOne + "-";
}

function writeSaying() {
  document.getElementById("board").innerHTML = keyword;
}

window.onload = writeSaying;
