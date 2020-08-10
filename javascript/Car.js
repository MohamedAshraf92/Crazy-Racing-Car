let carLane
let carHeight
export default () => {

    const canvas2 = document.querySelector(".canvas_2")
    const ctx2 = canvas2.getContext("2d")
    
    const car = new Image()
    car.src = "../img/car.png"
    let carLane = 161.5
    let carHeight = 500
    
    ctx2.drawImage(car, carLane, carHeight)

    window.addEventListener('keydown', e => {
        if (e.keyCode === 37) {
            if (carLane <= 290.5 && carLane > 32.5) {
                carLane -= 129
                ctx2.clearRect(0, 0, 422, 650)
                ctx2.drawImage(car, carLane, carHeight)
            } else if (carLane < 32.5) {
                carLane = 129
                ctx2.clearRect(0, 0, 422, 650)
                ctx2.drawImage(car, carLane, carHeight)
            }
            
        } else if (e.keyCode === 39) {
            if (carLane >= 32.5 && carLane < 290.5) {
                carLane += 129
                ctx2.clearRect(0, 0, 422, 650)
                ctx2.drawImage(car, carLane, carHeight)
            } else if (carLane > 290.5) {
                carLane = 129
                ctx2.clearRect(0, 0, 422, 650)
                ctx2.drawImage(car, carLane, carHeight)
            }
        }
        console.log(carLane)
    })
    // return carLane
}

export const carObj = {
    carLane: carLane,
    carHeight: carHeight
}

