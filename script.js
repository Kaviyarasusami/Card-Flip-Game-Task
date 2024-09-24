document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped'); // Toggle flipped class on click
        checkForMatch(); // Check for matches
    });
});

let firstCard, secondCard;
let hasFlippedCard = false;

function checkForMatch() {
    const flippedCards = document.querySelectorAll('.card.flipped');
    
    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;

        // Check for a match
        if (card1.dataset.cardValue === card2.dataset.cardValue) {
            // Match found
            resetFlippedCards();
        } else {
            // No match
            setTimeout(() => {
                card1.classList.remove('flipped'); // Flip back if no match
                card2.classList.remove('flipped');
                resetFlippedCards();
            }, 1000);
        }
    }
}

function resetFlippedCards() {
    hasFlippedCard = false; // Reset the state
    firstCard = null; // Clear first card
    secondCard = null; // Clear second card
}
