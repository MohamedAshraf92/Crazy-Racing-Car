import renderRoad from './javascript/Road.js'
import renderCar from './javascript/Car.js'
import renderObstacle from './javascript/Obstacle.js'

const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

renderRoad(ctx)
renderCar(ctx)
renderObstacle(ctx)
ctx.globalCompositeOperation = 'destination-over'




