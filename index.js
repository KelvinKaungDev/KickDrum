
var buttonCount = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonCount; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        addAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  addAnimation(event.key);
});

function makeSound(key) {
    switch(key) {
            case "w":
                new PlayAudio("crash");
                break;
            case "a":
                new PlayAudio("kick-bass");
            break;
            case "s":
                new PlayAudio("snare");
            break;
            case "d":
                new PlayAudio("tom-1");
            break;
            case "j":
                new PlayAudio("tom-2");
            break;
            case "k":
                new PlayAudio("tom-3");
            break;
            case "l":
                new PlayAudio("tom-4");
            break;
       }
}

function PlayAudio(audioName) {
    var audio = new Audio("sounds/" + audioName + ".mp3");
    audio.play();
}

function addAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, "100")
    
}