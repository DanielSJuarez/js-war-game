(function () {
    const addPlayer = document.querySelector('.addPlayer');
    const playerName = document.querySelector('.playerName');
    const startGame = document.querySelector('.startGame');
    const drawCard = document.querySelector('.drawCard');
    const resetGame = document.querySelector('.resetGame');
    const playerHeadOne = document.querySelector('.playerHeadOne');
    const playerHeadTwo = document.querySelector('.playerHeadTwo');

    let fullDeck = [];
    let playerOne = [];
    let playerTwo = [];
    let war = [];
   

    //constructors
    function Player(name) {
        this.name = name;
    }

    function Deck() {
        this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.suites = ['diamonds', 'hearts', 'spades', 'clubs'];
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
        if(playerHeadOne.textContent == "Player One"){
            playerHeadOne.textContent = playerName.value;
        } else {
            playerHeadTwo.textContent = playerName.value;
        }
            
        
        // const display = document.createElement('div');
        // const deskAndCard = document.createTextNode(`Your deck has 26 cards. Your current card is`)
        // display.appendChild(deskAndCard);
        // document.body.insertAdjacentElement('afterend', display);
    }

    Game.prototype.draw = function () {
        let currentCardOne = playerOne.shift();
        let currentCardTwo = playerTwo.shift();

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

            war.push(currentCardOne);
            war.push(currentCardTwo);

            for (let i = 0; i < 3; i++) {
                war.push(playerOne.shift());
                war.push(playerTwo.shift());
            }
            console.log(war);
        }
    }

    //buttons
    addPlayer.addEventListener('click', function () {
        const player = new Player(playerName.value);
        player.playerDisplay();
        playerName.value = ''; 
    });

    startGame.addEventListener('click', function () {
        const deck = new Deck()
        deck.cardsCreate();
        deck.deckSplit();
    });

    drawCard.addEventListener('click', function () {
        const game = new Game();
        game.draw();
    });

    resetGame.addEventListener('click', function () {
        fullDeck = [];
        playerOne = [];
        playerTwo = [];
        war = [];
        playerHeadOne.textContent = "Player One";
        playerHeadTwo.textContent = "Player Two";
    });

})();

