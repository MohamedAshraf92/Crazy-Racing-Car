export const scoreObj = {
    score: 0,
    time: 0,
    level: 1
}

const calcScore = () => {
    scoreObj.time += 1
    
    if (scoreObj.score > 20 && scoreObj.score <= 100) {
        scoreObj.level = 2
    } else if (scoreObj.score > 100) {
        scoreObj.level = 3
    }
    
    scoreObj.score = scoreObj.time * scoreObj.level
    console.log(scoreObj.score)
}

export let scoreValue

export const startScore = () => {
    scoreValue = setInterval(calcScore, 1000)
}

export const stopScore = () => {
    clearInterval(scoreValue)
}

