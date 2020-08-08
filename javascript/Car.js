export default (ctx) => {

    // const canvas = document.querySelector(".canvas")
    // const ctx = canvas.getContext("2d")

    const car = new Image()
    car.src = "../img/car.png"
    let position = 161.5
    
    window.onload = () => {
        ctx.drawImage(car, position, 500)
    }
    
    window.addEventListener('keydown', e => {
        if (e.keyCode === 37) {
            if (position <= 290.5 && position > 32.5) {
                position -= 129
                ctx.clearRect(0, 0, 422, 650)
                ctx.drawImage(car, position, 500)
            } else if (position < 32.5) {
                position = 32.5
                ctx.clearRect(0, 0, 422, 650)
                ctx.drawImage(car, position, 500)
            }
            
        } else if (e.keyCode === 39) {
            if (position >= 32.5 && position < 290.5) {
                position += 129
                ctx.clearRect(0, 0, 422, 650)
                ctx.drawImage(car, position, 500)
            } else if (position > 290.5) {
                position = 290.5
                ctx.clearRect(0, 0, 422, 650)
                ctx.drawImage(car, position, 500)
            }
        }
        console.log(position)
    })
}