
const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

road = new Image()
road.src = "./road.jpg"
let roadSpeed = -232

car = new Image()
car.src = "./car.png"
let position = 116

window.addEventListener('keydown', e => {
    if (e.keyCode === 37) {
        if (position <= 226 && position > 6) {
            position -= 110
        } else if (position < 6) {
            position = 6
        }

    } else if (e.keyCode === 39) {
        if (position >= 6 && position < 226) {
            position += 110
        } else if (position > 226) {
            position = 226
        }
    }
})

obstacle = new Image()
obstacle.src = "./obstacle.png"
let obstacleSpeed = 0

setInterval (() => {
    obstacleSpeed += 2
}, 5)

obstacleUpdate = () => {
    ctx.drawImage(obstacle, 6, obstacleSpeed)
    console.log('its working')    
}

setInterval(() => {
    obstacleUpdate()
}, 1000);

animate = () => {
    if (roadSpeed >= 0) roadSpeed = -232
    ctx.drawImage(road, 0, roadSpeed)
    ctx.drawImage(road, 0, roadSpeed + 232)
    ctx.drawImage(road, 0, roadSpeed + 464)
    ctx.drawImage(road, 0, roadSpeed + 696)
    roadSpeed += 2
    
    requestAnimationFrame(animate)
    ctx.drawImage(car, position, 500)
    ctx.drawImage(obstacle, 6, obstacleSpeed)
}

animate()





