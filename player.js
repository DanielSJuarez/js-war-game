function Player(name) {
    this.name = name;
}

Player.prototype.playerDisplay = function () {
    if (playerHeadOne.textContent === "Player One") {
        playerHeadOne.textContent = playerName.value;
    } else if (playerHeadTwo.textContent === "Player Two") {
        playerHeadTwo.textContent = playerName.value;
    } else {
        alert(`Both player names have been selected, please reset to change!`)
    }
}