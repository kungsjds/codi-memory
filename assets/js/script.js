// This event is called when the initial HTML docment has been completely loaded. Even if the stylesheet, images or subframes haven't been loaded.
document.addEventListener('DOMContentLoaded', () => {

    // Loading the cards
    const cardArray = [
        {
            name: 'win',
            img: 'assets/images/win.png'
        },
        {
            name: 'win',
            img: 'assets/images/win.png'
        },
        {
            name: 'left',
            img: 'assets/images/left.png'
        },
        {
            name: 'left',
            img: 'assets/images/left.png'
        },
        {
            name: 'right',
            img: 'assets/images/right.png'
        },
        {
            name: 'right',
            img: 'assets/images/right.png'
        },
        {
            name: 'back',
            img: 'assets/images/back.png'
        },
        {
            name: 'back',
            img: 'assets/images/back.png'
        },
        {
            name: 'jumping',
            img: 'assets/images/jumping.png'
        },
        {
            name: 'jumping',
            img: 'assets/images/jumping.png'
        },
        {
            name: 'running',
            img: 'assets/images/running.png'
        },
        {
            name: 'running',
            img: 'assets/images/running.png'
        }
    ];

    // Sort the cards randomly
    cardArray.sort(() => 0.5 - Math.random());

    // Select parent grid
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');

    // Clcked cards array
    let cardsChosen = []; // card name
    let cardsChosenId = [];
    // Array of formed pairs
    let pairs = [];

    function checkForMatch(){

        // Get all images elements
        let cards = document.querySelectorAll('img');

        // Get card ID clicked
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        // Two same cards
        if (optionOneId == optionTwoId) {
            cards[optionOneId].style.transform = 'rotateY(0deg)';

            cards[optionOneId].setAttribute('src', 'assets/images/card.png');
            cards[optionTwoId].setAttribute('src', 'assets/images/card.png');
            alert('The clicked cards are the same');

        } 
        
        // Match
        else if (cardsChosen[0] == cardsChosen[1]) {
            
            alert('Match!');

            cards[optionOneId].style.transform = 'rotateY(0deg)';
            cards[optionTwoId].style.transform = 'rotateY(0deg)';
            
            cards[optionOneId].setAttribute('src', 'assets/images/white.png');
            cards[optionTwoId].setAttribute('src', 'assets/images/white.png');

            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);

            pairs.push(cardsChosen);

        }
        
        else {

            cards[optionOneId].style.transform = 'rotateY(0deg)';
            cards[optionTwoId].style.transform = 'rotateY(0deg)';

            cards[optionOneId].setAttribute('src', 'assets/images/card.png');
            cards[optionTwoId].setAttribute('src', 'assets/images/card.png');

            alert('Oops! Not match, try again!');            
        };

        cardsChosen = [];
        cardsChosenId = [];

        resultDisplay.textContent = pairs.length;

        if (pairs.length == cardArray.length/2) {

            resultDisplay.textContent = 'Congratulations! You have found all the pairs.'

        };       

    };

    function flipCard() {

        this.style.transform = 'rotateY(160deg)';

        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);        
        this.setAttribute('src', cardArray[cardId].img);

        // Set a timeout to check if cards match, every 500 milliseconds.
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500);
        };
        
    };

    // Create all cards in parent grid
    function createBoard() {

        for (let i = 0; i < cardArray.length; i++) {
            
            // Creates an image object
            let card = document.createElement('img');
            card.setAttribute('src', 'assets/images/card.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            
            grid.appendChild(card);
        };

    };
    
    createBoard();

});



