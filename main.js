(function () {
    const addPlayer = document.querySelector('.addPlayer');
    const playerName = document.querySelector('.playerName');
    const startGame = document.querySelector('.startGame');
    const drawCard = document.querySelector('.drawCard');
    const resetGame = document.querySelector('.resetGame');
    const playerHeadOne = document.querySelector('.playerHeadOne');
    const playerHeadTwo = document.querySelector('.playerHeadTwo');
    const playerOneDeck = document.querySelector('.playerOneDeck');
    const playerTwoDeck = document.querySelector('.playerTwoDeck');
    const playerOneCard = document.querySelector('.playerOneCard');
    const playerTwoCard = document.querySelector('.playerTwoCard');
    const diplayBoxOne = document.querySelector('.winnerOne');
    const diplayBoxTwo = document.querySelector('.winnerTwo');
    const warHideOne = document.getElementById('oneHide');
    const warHideTwo = document.getElementById('twoHide');
    let toggleCardOne = warHideOne.classList;
    let toggleCardTwo = warHideTwo.classList;


    let fullDeck = [];
    let playerOne = [];
    let playerTwo = [];
    let currentCardOne = [];
    let currentCardTwo = [];
    let war = [];

    //buttons
    addPlayer.addEventListener('click', function () {
        const player = new Player(playerName.value);
        if (playerName.value === '') {
            alert(`Please add a player name.`);
        } else {
            player.playerDisplay();
            playerName.value = '';
        }
    });

    startGame.addEventListener('click', function () {
        const deck = new Deck()
        deck.cardsCreate();
        deck.deckSplit();
        playerOneDeck.textContent = `Deck Size = 26`;
        playerTwoDeck.textContent = `Deck Size = 26`;
        drawCard.disabled = false;
    });

    drawCard.addEventListener('click', function () {
        if (playerOne.length === 0) {
            diplayBoxTwo.innerHTML = `CONGRADULATIONS ${playerHeadTwo.textContent}! YOU ARE THE WINNER!! Press Reset/Forfeit to play again.`;
        } else if (playerTwo.length === 0) {
            diplayBoxOne.innerHTML = `CONGRADULATIONS ${playerHeadOne.textContent}! YOU ARE THE WINNER!! Press Reset/Forfeit to play again.`;
        } else {
            const game = new Game();
            game.draw();
            game.updateDeck();
            game.updateCard();
        }
    });

    resetGame.addEventListener('click', function () {
        fullDeck = [];
        playerOne = [];
        playerTwo = [];
        war = [];
        playerHeadOne.textContent = "Player One";
        playerHeadTwo.textContent = "Player Two";
        playerOneDeck.textContent = `Deck Size = ${playerOne.length}`;
        playerTwoDeck.textContent = `Deck Size = ${playerTwo.length}`;
        playerOneCard.innerHTML = `A &#9827`;
        playerTwoCard.innerHTML = `A &#9827`;
        drawCard.disabled = true;
        diplayBoxOne.innerHTML = '';
        diplayBoxTwo.innerHTML = '';
    });

})();


