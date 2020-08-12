import renderRoad from './javascript/Road.js'
import renderCar from './javascript/Car.js'
import renderObstacle from './javascript/Obstacle.js'
import { clearCar } from './javascript/Car.js'
import { carObj } from './javascript/Car.js'
import { obstacleObj } from './javascript/Obstacle.js'
import { startScore } from './javascript/Score.js'
import { stopScore } from './javascript/Score.js'
import { scoreObj } from './javascript/Score.js'
import { scoreValue } from './javascript/Score.js'

const stopGame = () => {
    document.querySelector('.canvas-div').style.display="none"
    document.querySelector('.interface').style.display="none"
    document.querySelector('.lose').style.display="block"
}

const restartGame = () => {
    document.querySelector('.canvas-div').style.display="block"
    document.querySelector('.interface').style.display="none"
    document.querySelector('.lose').style.display="none"
    
    clearCar()
    carObj.carLane = 161.5
    carObj.carHeight = 500
    obstacleObj.obstacleLane = 161.5
    obstacleObj.obstacleHeight = 0
    scoreObj.score = 0
    scoreObj.time = 0
    scoreObj.level = 1
    startScore()
}

const detectCrash = () => {
    setInterval(() => {
        if (carObj.carLane === obstacleObj.obstacleLane && obstacleObj.obstacleHeight > 400 && obstacleObj.obstacleHeight < 600) {
            stopGame()
            stopScore()
        }
    }, 0.5);
}

const startGame = () => {
    document.querySelector('.canvas-div').style.display="block"
    document.querySelector('.interface').style.display="none"
    document.querySelector('.lose').style.display="none"

    renderRoad()
    renderCar()
    renderObstacle()
    startScore()
    detectCrash()
}

document.querySelector('.submit-btn').addEventListener('click', () => {
    let name = document.querySelector('.user-name').value
    window.localStorage.setItem('user', name)
    document.querySelector('.log-in').style.display="none"
    document.querySelector('.player').style.display="block"
})

const userName = window.localStorage.getItem('user')

// window.localStorage.clear()

let userMarkup = null
let score = 0
setInterval(() => {
    score = scoreValue
}, 1);

const defineUser = () => {
    // setInterval(() => {
        userMarkup = `
            <h1>Welcome ${userName}</h1>
            <h2>Your score:</h2>
            <div class="score"><p>${score}</p></div>
        `
        document.querySelector('.player').innerHTML = ""
        document.querySelector('.player').insertAdjacentHTML('afterbegin', userMarkup)
    // }, 1000)
}

if (userName) {
    document.querySelector('.log-in').style.display="none"
    document.querySelector('.player').style.display="block"
    defineUser()
    document.querySelector('.start-btn').addEventListener('click', startGame)
    document.querySelector('.restart-btn').addEventListener('click', restartGame)
}






