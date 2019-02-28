var totalButtonNumber = document.querySelectorAll(".drum").length;
var i = 0;
while (i < totalButtonNumber) {
    document.querySelectorAll("button")[i++].addEventListener("click", function () {

        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {
    switch (key) {
        case ('w') :
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case ('a') :
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        case ('s') :
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        case ('d') :
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        case ('j') :
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        case ('k') :
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        case ('l') :
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        default:
            break;
    }
}

function buttonAnimation(currrentKey) {
    var activeButton = document.querySelector("." + currrentKey).classList.add("pressed");
    setTimeout(function () {
        var activeButton = document.querySelector("." + currrentKey).classList.remove("pressed");
    }, 100);
}
