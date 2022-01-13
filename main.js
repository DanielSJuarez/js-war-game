(function(){
const addPlayer = document.querySelector('.addPlayer');
const playerName = document.querySelector('.playerName');
const startGame = document.querySelector('.startGame');
const drawCard = document.querySelector('.drawCard');
const resetGame = document.querySelector('.resetGame');
const playerHead = document.querySelector('.playerHead');

let fullDeck = [];

//constructors
function Player(name){
    this.name = name;
}

function Deck(){
    this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.suites = ['diamonds', 'hearts', 'spades', 'clubs']; 
}

function Card(value, names, suites){
    this.value = value;
    this.names = names;
    this.suites = suites;
}

function Game(){

}

//prototypes
Deck.prototype.cardsCreate = function(){
    for(let i = 0; i < this.suites.length; i++){
        for(let j = 0; j < this.names.length; j++){
            fullDeck.push(new Card(j + 1, this.names[j], this.suites[i]));   
        }
    }
    for (i = fullDeck.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = fullDeck[i]
        fullDeck[i] = fullDeck[j]
        fullDeck[j] = k
      }
    return fullDeck;
};

Player.prototype.playerDisplay = function(){
    const display = document.createElement('div');
    const deskAndCard = document.createTextNode(`Your deck has 26 cards. Your current card is`)
    display.appendChild(deskAndCard);
    document.body.insertAdjacentElement('afterend', display);
}

//buttons
addPlayer.addEventListener('click', function(){
    const player = new Player(playerName.value);
    playerHead.insertAdjacentHTML("afterend", `<h4>${player.name}</h4>`)
    let diplay = document.createTextNote;
    player.playerDisplay();
    playerName.value = '';
});

startGame.addEventListener('click', function(){
    const deck = new Deck()
    console.table(deck.cardsCreate());
});

drawCard.addEventListener('click', function(){
    console.log('hi')
});

resetGame.addEventListener('click', function(){
    fullDeck = [];
    //console.log(fullDeck);
});

})();

