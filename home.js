function clickme() {
    var list = document.querySelectorAll("h3");
    for (var f = 0; f < list.length; f++) {
        list[f].onclick = showalert;
    }
}

function showalert() {
    alert("You click on Player name!!!");
}
window.onload = clickme;
// above function alert

class Game {
    //Properties
    playerName = null;
    dinosaur = null;
    score = null;
    speed = 10;
    level = 1;

    constructor(ctx) {
            this.ctx = ctx;
        }
        //Methods
    start(playerName) {
        //Receive player name and save it.
        if (playerName) {
            this.playerName = playerName;
            console.log('Game is starting!!!', this);
        } else {
            alert('Player name is required!!!');
        }
        // Remove Starting-container from canvas
        let startingContainer = document.getElementsByClassName("starting-container")[0];
        startingContainer.style.display = "none";
        // initionalize dinosaur object and display it on the screen
        let dinosaur = new Dinosaur(this.ctx, 20, 100);
        console.log(dinosaur);
        //initialize tree object and display it on the screen
        let tree = new Tree(this.ctx, 500, 100);
        console.log(tree);
        tree.move();
    }
    pause() {
        console.log("Pause the game");
    }
}
class Dinosaur {
    appearance = null;
    width = 10;
    height = 20;
    speed = 10;
    positionX = null;
    positionY = null;
    setSpeed(baseSpeed, level) {
        this.speed = baseSpeed + level;
    }
    jump() {
        console.log('dinosaur is jumping!!!');
    }
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.positionX = x;
        this.positionY = y;
        this.ctx.fillStyle = '#F9DC5C'
        ctx.fillRect(this.positionX, this.height, this.width, this.height);
    }
}
class Tree {
    shape = null;
    size = null;
    ctx = null;
    width = 20;
    height = 30;
    positionX = null;
    positionY = null;

    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.positionX = x;
        this.positionY = y;
        this.ctx.fillStyle = '#A9DC5C'
        ctx.fillRect(this.positionX, this.height, this.width, this.height);
    }
    move() {
        this.positionX = this.positionX - this.speed;
        ctx.fillRect(this.positionX, this.height, this.width, this.height);
        requestAnimationFrame(this.move);
    }
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
//let used to draw canvas

canvas.width = window.innerWidth //windown used to created function direction
canvas.height = window.innerHeight;

let game = new Game(ctx);




function startGame() {
    let playerNameInput = document.getElementById("player_name");

    game.start(playerNameInput.value);

}