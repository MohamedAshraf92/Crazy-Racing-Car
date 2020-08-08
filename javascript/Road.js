export default (ctx) => {

    // const canvas = document.querySelector(".canvas")
    // const ctx = canvas.getContext("2d")

    const road = new Image()
    road.src = "../img/road.png"
    let roadSpeed = -302

    const animate = () => {
        if (roadSpeed >= 0) roadSpeed = -302
        ctx.drawImage(road, 0, roadSpeed)
        ctx.drawImage(road, 0, roadSpeed + 302)
        ctx.drawImage(road, 0, roadSpeed + 604)
        ctx.drawImage(road, 0, roadSpeed + 906)
        roadSpeed += 2
        
        requestAnimationFrame(animate)
    }
    animate()
}


