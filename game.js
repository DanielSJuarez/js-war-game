export default function Game(currentGame = 'War Game') {
    this.currentGame = currentGame;
}

Game.prototype.draw = function () {

    currentCardOne = playerOne.shift();
    currentCardTwo = playerTwo.shift();

    if (currentCardOne.value < currentCardTwo.value) {
        diplayBoxOne.innerHTML = '';
        diplayBoxTwo.innerHTML = 'ROUND WON!';
        toggleCardOne.add('hide');
        toggleCardTwo.add('hide');
        playerTwo.push(currentCardOne);
        playerTwo.push(currentCardTwo);
        if (war.length > 0) {
            for (let i = 0; i < 8; i++) {
                playerTwo.push(war.shift());
            }
        }
    } else if (currentCardOne.value > currentCardTwo.value) {
        diplayBoxOne.innerHTML = 'ROUND WON!';
        diplayBoxTwo.innerHTML = '';
        toggleCardOne.add('hide');
        toggleCardTwo.add('hide');
        playerOne.push(currentCardTwo);
        playerOne.push(currentCardOne);
        if (war.length > 0) {
            for (let i = 0; i < 8; i++) {
                playerOne.push(war.shift());
            }
        }
    } else {
        diplayBoxOne.innerHTML = 'WAR!!!!!';
        diplayBoxTwo.innerHTML = 'WAR!!!!!';
        toggleCardOne.remove('hide');
        toggleCardTwo.remove('hide');

        war.push(currentCardOne);
        war.push(currentCardTwo);

        for (let i = 0; i < 3; i++) {
            war.push(playerOne.shift());
            war.push(playerTwo.shift());
        }
    }
}

Game.prototype.updateDeck = function () {
    playerOneDeck.textContent = `Deck Size = ${playerOne.length}`
    playerTwoDeck.textContent = `Deck Size = ${playerTwo.length}`
}

Game.prototype.updateCard = function () {
    playerOneCard.innerHTML = `${currentCardOne.names} ${currentCardOne.suites}`;
    playerTwoCard.innerHTML = `${currentCardTwo.names} ${currentCardTwo.suites}`;
}