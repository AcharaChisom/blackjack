let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum === 1) {
        return 11
    } else if (randomNum >= 11 & randomNum <= 13) {
        return 10
    } else {
        return randomNum
    }
}

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

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function startGame() {
    renderGame()
}

function newCard() {
    let thirdCard = getRandomCard()
    cards.push(thirdCard)  
    sum += thirdCard
    startGame()
}