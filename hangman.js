var words = ["spot", "panda", "flower", "boat", "trousers", "skirt", "tennis", "balcony", "table", "chair", "pot", "cupboard", "notebook", "cushion"];

var randomWord = words[Math.floor(Math.random() * words.length)];


function SplitWord() {
  aSplitWord = randomWord.split("");
  console.log(aSplitWord);
}

function DashesOfWord() {
  console.log(randomWord);
  console.log(randomWord.length);
  for (var i = 0; i < randomWord.length; i++) {
    document.getElementById("lines").innerHTML += " &#95 ";
  }
}

SplitWord();
DashesOfWord();
