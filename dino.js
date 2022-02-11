const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}



let isAlive = setInterval(function() {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // get current cactus X position
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );

    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {

        let year = prompt('Game Over 😢😢😢\nDo you want to countiue ?: yes or no', '');
        if (year == "yes") {

        } else if (year == "no") {
            window.location.replace("./Home.html");
        } else {
            alert('Game Over\nBack to Home');
            window.location.replace("./Start.html");
        }
    }
}, 10);

document.addEventListener("keydown", function(event) {
    jump();
});