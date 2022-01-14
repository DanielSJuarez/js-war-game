function Deck() {
    this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    //this.suites = ['diamonds', 'hearts', 'spades', 'clubs'];
    this.suites = ['&#9830', '&#9829', '&#9824', '&#9827'];
}

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

