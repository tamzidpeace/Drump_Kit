var totalButtonNumber = document.querySelectorAll(".drum").length;
var i = 0;
while (i < totalButtonNumber) {
    document.querySelectorAll("button")[i++].addEventListener("click", function () {


        if (this.innerText === "w") {
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        }
        switch (this.innerText) {
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

    });
}
