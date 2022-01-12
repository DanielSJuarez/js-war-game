(function(){
const addPlayer = document.querySelector('.addPlayer');
const playerName = document.querySelector('.playerName');
const startGame = document.querySelector('.startGame');
const drawCard = document.querySelector('.drawCard');
const resetGame = document.querySelector('.resetGame');

let fullDeck = [];

function Game({}){

}

function Player({name = 'Player'} = {}){
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

Deck.prototype.cardsCreate = function(){
    for(let i = 0; i < this.suites.length; i++){
        for(let j = 0; j < this.names.length; j++){
            fullDeck.push(new Card(j+1, this.names[j], this.suites[i]));   
        }
    }
    return fullDeck;
};

//hook up to a button
const deck = new Deck()
console.table(deck.cardsCreate());


addPlayer.addEventListener('click', function(){
    console.log(playerName.value)
    
});

startGame.addEventListener('click', function(){
    console.log('hi')
});

drawCard.addEventListener('click', function(){
    console.log('hi')
});

resetGame.addEventListener('click', function(){
    fullDeck = [];
    //console.log(fullDeck);
});

})();


//let additionNumber = document.createTextNode(randomNumberNode)
//additionGenerator.appendChild(additionNumber)
//buttonSelector.append(additionGenerator)