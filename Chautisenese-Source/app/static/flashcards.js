let flashcards = [];
let currentIndex = 0;
let showingFront = true;

document.addEventListener("DOMContentLoaded", () => {
    fetch('/flashcards')
        .then(response => response.json())
        .then(data => {
            flashcards = data;
            updateCard();
        });
});

function flipCard() {
    showingFront = !showingFront;
    updateCard();
}

function updateCard() {
    const cardContent = document.getElementById("card-content");
    if (flashcards.length > 0) {
        const currentCard = flashcards[currentIndex];
        cardContent.textContent = showingFront ? currentCard.front : currentCard.back;
    } else {
        cardContent.textContent = "No flashcards available.";
    }
}
