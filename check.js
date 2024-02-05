var phrase = prompt("entrer la phrase");
var splitted = phrase.split("");
var splitted2 = phrase.split(" ");
console.log("there's is", splitted2.length, "words");
var i = 0;

splitted.map((elem) => {
  if (
    elem == "y" ||
    elem == "u" ||
    elem == "i" ||
    elem == "o" ||
    elem == "e" ||
    elem == "a"
  ) {
    i++;
  }
});
console.log(i);
