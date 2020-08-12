export let obstacleObj = {
    obstacleLane: null,
    obstacleHeight: 0
} 

export default () => {

    const canvas3 = document.querySelector(".canvas_3")
    const ctx3 = canvas3.getContext("2d")
    
    const obstacle = new Image()
    obstacle.src = "../img/obstacle.png"
    
    const selectobstacleLane = () => {
        let obstacleLaneNombur = Math.floor(Math.random() * 3)
        obstacleObj.obstacleLane = (obstacleLaneNombur * 129) + 32.5
    }
    selectobstacleLane()
    
    obstacle.addEventListener('load', e => {
        let obstacleSpeed = 1
        setInterval(() => {
            obstacleObj.obstacleHeight += obstacleSpeed
            ctx3.clearRect(0, 0, 422, 650)
            if (obstacleObj.obstacleHeight < 700) {
                ctx3.drawImage(obstacle, obstacleObj.obstacleLane, obstacleObj.obstacleHeight)
            } else if (obstacleObj.obstacleHeight > 700) {
                ctx3.clearRect(0, 0, 422, 650)
                selectobstacleLane()
                obstacleObj.obstacleHeight = -10
                obstacleObj.obstacleHeight += obstacleSpeed
                ctx3.drawImage(obstacle, obstacleObj.obstacleLane, obstacleObj.obstacleHeight)
            }
        }, 5);
    })
}



