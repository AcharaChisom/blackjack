let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function startGame() {
    renderGame()
}

function newCard() {
    let thirdCard = 2
    sum += thirdCard
    startGame()
}