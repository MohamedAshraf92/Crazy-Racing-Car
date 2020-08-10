import renderRoad from './javascript/Road.js'
import renderCar from './javascript/Car.js'
import renderObstacle from './javascript/Obstacle.js'
import { carObj } from './javascript/Car.js'
import { obstacleObj } from './javascript/Obstacle.js'
// import { carLane, carHeight } from './javascript/Car.js'
// import { obstacleLane, obstacleHeight } from './javascript/Obstacle.js'
// let carLane = require('./javascript/Car.js')
// let carHeight = require('./javascript/Car.js')
// let obstacleLane = require('./javascript/obstacle.js')
// let obstacleHeight = require('./javascript/obstacle.js')

const startGame = () => {
    document.querySelector('.canvas-div').style.display="block"
    document.querySelector('.interface').style.display="none"
    document.querySelector('.lose').style.display="none"

    renderRoad()
    renderCar()
    renderObstacle()
}

const stopGame = () => {
    document.querySelector('.canvas-div').style.display="none"
    document.querySelector('.interface').style.display="none"
    document.querySelector('.interface').style.display="block"
}

document.querySelector('.btn').addEventListener('click', startGame)

const distance = carObj.carHeight - obstacleObj.obstacleHeight
if (carObj.carLane = obstacleObj.obstacleLane && distance < 100) {stopGame}

console.log(carObj.carLane, carObj.carHeight)