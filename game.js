// Define the player object
let player = {
    gold: 0,
    mineGold: function() {
        this.gold += 1;
        console.log(`You mined 1 gold. Total gold: ${this.gold}`);
    }
};

// Game loop
let gameLoop = setInterval(function() {
    player.mineGold();
}, 1000); // Mine gold every 1000ms (1 second)

// Stop the game after 10 seconds
setTimeout(function() {
    clearInterval(gameLoop);
    console.log("Game over. You mined " + player.gold + " gold.");
}, 10000); // Stop the game after 10000ms (10 seconds)
