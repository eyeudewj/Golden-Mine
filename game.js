// Define the player object
let player = {
    gold: 0,
    mineGold: function() {
        this.gold += 2;
        console.log(`You mined 2 gold. Total gold: ${this.gold}`);
    }
};

// Game loop
let gameLoop = setInterval(function() {
    player.mineGold();
}, 2000); // Mine gold every 2000ms (2 seconds)

// Stop the game after 10 seconds
setTimeout(function() {
    clearInterval(gameLoop);
    console.log("Game over. You mined " + player.gold + " gold.");
}, 10000); // Stop the game after 10000ms (10 seconds)
