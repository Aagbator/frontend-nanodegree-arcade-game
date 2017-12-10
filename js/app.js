var enemies_count = 3;
var start_positions = [-50, -580, -890,-990]; //possible start positions for enimies

var getRandomPosition = function(){ //function to get a random position for an enemy
    return start_positions[Math.ceil(Math.random()*start_positions.length - 1)];
};
   console.log(getRandomPosition());

// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = getRandomPosition();
    this.y = y;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x+(200*dt);

    if(this.x > 450){
        this.restart();
    }

    //check collision
    //console.log("enemy : "+this.x+", player :"+player.y);



};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.restart =  function () {
    this.x= getRandomPosition();
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(){
    if(this.y == 0){
        alert("you won");
        this.restart();
    }
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key){
    console.log("x = "+this.x+" y = "+this.y);
    if(key == 'left'&&this.x>=0){
        this.x -= 20;
    }
    else if(key == 'up'&&this.y>=0){
        this.y -= 20;
    }
    else if(key == 'right'&&this.x<=400){
        this.x += 20;
    }
    else if(key == 'down'&this.y<=400){
        this.y += 20;
    }

};

Player.prototype.restart = function(){
    this.x = 200;
    this.y = 400;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = [
    new Enemy(60),
    new Enemy(60),
    new Enemy(60),
    new Enemy(140),
    new Enemy(140),
    new Enemy(140),
    new Enemy(225),
    new Enemy(225),
    new Enemy(225)
];

// Place the player object in a variable called player
var player = new Player(200,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
