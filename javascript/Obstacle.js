export default (ctx) => {

    // const canvas = document.querySelector(".canvas")
    // const ctx = canvas.getContext("2d")

    const obstacle = new Image()
    obstacle.src = "../img/obstacle.png"

    const selectLane = () => {
        let laneNombur = Math.floor(Math.random() * 3)
        let lane = (laneNombur * 129) + 32.5
        return lane
    }
    
   let lane = selectLane()

    obstacle.addEventListener('load', e => {
        let ySpeed = 0
        let speed = 1
        setInterval(() => {
            ySpeed += speed
            ctx.clearRect(0, 0, 422, 650)
            if (ySpeed < 700) {
                ctx.drawImage(obstacle, lane, ySpeed)
            } else if (ySpeed > 700) {
                ctx.clearRect(0, 0, 422, 650)
                ySpeed = -10
                ySpeed += speed
                lane = selectLane()
                ctx.drawImage(obstacle, lane, ySpeed)
                // console.log(lane)
            }
        }, 5);
    })
}

