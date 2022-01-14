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

    let fullDeck = [];
    let playerOne = [];
    let playerTwo = [];
    let currentCardOne = [];
    let currentCardTwo = [];
    let war = [];


    //constructors
    function Player(name) {
        this.name = name;
    }

    function Deck() {
        this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        //this.suites = ['diamonds', 'hearts', 'spades', 'clubs'];
        this.suites = ['&#9830', '&#9829', '&#9824', '&#9827'];
    }

    function Card(value, names, suites) {
        this.value = value;
        this.names = names;
        this.suites = suites;
    }

    function Game(currentGame = 'War Game') {
        this.currentGame = currentGame;
    }

    //prototypes
    Deck.prototype.cardsCreate = function () {

        for (let i = 0; i < this.suites.length; i++) {
            for (let j = 0; j < this.names.length; j++) {
                fullDeck.push(new Card(j + 1, this.names[j], this.suites[i]));
            }
        }
        for (i = fullDeck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * i)
            k = fullDeck[i]
            fullDeck[i] = fullDeck[j]
            fullDeck[j] = k
        }
        return fullDeck;
    };

    Deck.prototype.deckSplit = function () {
        playerOne = fullDeck.splice(0, 26);
        playerTwo = fullDeck.splice(0, 26);
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

    Game.prototype.draw = function () {

        currentCardOne = playerOne.shift();
        currentCardTwo = playerTwo.shift();


        if (currentCardOne.value < currentCardTwo.value) {
            playerTwo.push(currentCardOne);
            playerTwo.push(currentCardTwo);
            if (war.length > 0) {
                for (let i = 0; i < 8; i++) {
                    playerTwo.push(war.shift());
                }
            }

            console.log(playerOne);
            console.log(playerTwo);
        } else if (currentCardOne.value > currentCardTwo.value) {
            playerOne.push(currentCardTwo);
            playerOne.push(currentCardOne);
            if (war.length > 0) {
                for (let i = 0; i < 8; i++) {
                    playerOne.push(war.shift());
                }
            }
            console.log(playerOne);
            console.log(playerTwo);
        } else {
            alert("WAR!!!!!!");
            war.push(currentCardOne);
            war.push(currentCardTwo);

            for (let i = 0; i < 3; i++) {
                war.push(playerOne.shift());
                war.push(playerTwo.shift());
            }
            console.log(war);
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

    //buttons
    addPlayer.addEventListener('click', function () {
        const player = new Player(playerName.value);
        if (playerName.value === ''){
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
        playerOneDeck.textContent = `Deck Size = 26`
        playerTwoDeck.textContent = `Deck Size = 26`
    });

    drawCard.addEventListener('click', function () {
        if(playerOne.length === 0){
            console.log('hi');
            alert(`Congradulations ${playerHeadTwo.textContent}! You are the winner!! Press Reset/Forfeit to play again.`);
        } else if (playerTwo.length === 0){
            alert(`Congradulations ${playerHeadOne.textContent}! You are the winner!! Press Reset/Forfeit to play again.`);
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
    });

})();


//optimize notification and visual
