let obstacleLane
let obstacleHeight

export default () => {

    const canvas3 = document.querySelector(".canvas_3")
    const ctx3 = canvas3.getContext("2d")
    
    const obstacle = new Image()
    obstacle.src = "../img/obstacle.png"
    
    const selectobstacleLane = () => {
        let obstacleLaneNombur = Math.floor(Math.random() * 3)
        let obstacleLane = (obstacleLaneNombur * 129) + 32.5
        return obstacleLane
    }
    
    let obstacleLane = selectobstacleLane()
    
    obstacle.addEventListener('load', e => {
        let obstacleHeight = 0
        let obstacleSpeed = 1
        setInterval(() => {
            obstacleHeight += obstacleSpeed
            ctx3.clearRect(0, 0, 422, 650)
            if (obstacleHeight < 700) {
                ctx3.drawImage(obstacle, obstacleLane, obstacleHeight)
            } else if (obstacleHeight > 700) {
                ctx3.clearRect(0, 0, 422, 650)
                obstacleHeight = -10
                obstacleHeight += obstacleSpeed
                obstacleLane = selectobstacleLane()
                ctx3.drawImage(obstacle, obstacleLane, obstacleHeight)
                // console.log(obstacleLane)
            }
        }, 5);
    })
}

export const obstacleObj = {
    obstacleLane: obstacleLane,
    obstacleHeight: obstacleHeight
} 
// export { obstacleLane, obstacleHeight }

