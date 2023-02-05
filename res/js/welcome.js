var text = ["Welcome Friend!", "Karibu Rafiki!", "!مرحبا صديقى"];
var counter = 0;
var elem = document.getElementById("welcomeText");
var inst = setInterval(change, 2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

