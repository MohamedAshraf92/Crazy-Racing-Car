window.onload = () => {
    requestAnimationFrame(animate)
    // ctx.drawImage(car, 156, 550)
}
const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

let ySpeed = -325

road = new Image()
road.src = "./road.jpg"

car = new Image()
car.src = "./car.png"
let position = 116

window.addEventListener('keydown', e => {
    console.log(e)
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

animate= () => {
    if (ySpeed >= 0) ySpeed = -325
    ctx.drawImage(road, 0, ySpeed)
    ctx.drawImage(road, 0, ySpeed + 325)
    ctx.drawImage(road, 0, ySpeed + 650)
    ySpeed += 3

    ctx.drawImage(car, position, 500)

    requestAnimationFrame(animate)
}


window.onload()


