export let carObj = {
    carLane: 161.5,
    carHeight: 500
}

export default () => {

    const canvas2 = document.querySelector(".canvas_2")
    const ctx2 = canvas2.getContext("2d")
    
    const car = new Image()
    car.src = "../img/car.png"
    // let carLane = 161.5
    // let carHeight = 500
    
    // ctx2.drawImage(car, carObj.carLane, carObj.carHeight)

    window.addEventListener('keydown', e => {
        if (e.keyCode === 37) {
            if (carObj.carLane <= 290.5 && carObj.carLane > 32.5) {
                carObj.carLane -= 129
                ctx2.clearRect(0, 0, 422, 650)
                ctx2.drawImage(car, carObj.carLane, carObj.carHeight)
            } else if (carObj.carLane < 32.5) {
                carObj.carLane = 129
                ctx2.clearRect(0, 0, 422, 650)
                ctx2.drawImage(car, carObj.carLane, carObj.carHeight)
            }
            
        } else if (e.keyCode === 39) {
            if (carObj.carLane >= 32.5 && carObj.carLane < 290.5) {
                carObj.carLane += 129
                ctx2.clearRect(0, 0, 422, 650)
                ctx2.drawImage(car, carObj.carLane, carObj.carHeight)
            } else if (carObj.carLane > 290.5) {
                carObj.carLane = 129
                ctx2.clearRect(0, 0, 422, 650)
                ctx2.drawImage(car, carObj.carLane, carObj.carHeight)
            }
        }
        console.log(carObj.carLane)
    })
    // return carLane
}



