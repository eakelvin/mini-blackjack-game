let player = {
    name : 'EA',
    chips : 56
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")

playerEL.textContent = player.name +  ": $" + player.chips



function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: " 
    for(let i=0; i<cards.length; i++) [
        cardsEl.textContent += cards[i] + " "
    ]

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "CONGRATS! YOU'VE GOT BLACKJACK"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
    console.log(message)
}

function newcard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdcard = getRandomCard()
        sum += thirdcard
        cards.push(thirdcard)
        renderGame() 
    }
    
}

