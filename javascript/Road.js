export default () => {

    const canvas1 = document.querySelector(".canvas_1")
    const ctx1 = canvas1.getContext("2d")

    const road = new Image()
    road.src = "../img/road.png"
    let roadSpeed = -302

    const animate = () => {
        if (roadSpeed >= 0) roadSpeed = -302
        ctx1.drawImage(road, 0, roadSpeed)
        ctx1.drawImage(road, 0, roadSpeed + 302)
        ctx1.drawImage(road, 0, roadSpeed + 604)
        ctx1.drawImage(road, 0, roadSpeed + 906)
        roadSpeed += 2
        
        requestAnimationFrame(animate)
    }
    animate()
}
