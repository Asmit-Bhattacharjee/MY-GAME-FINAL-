class Ball {
    constructor(x, y) {
        var option = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 10, option);
        this.radius = 10;
        this.image=loadImage("Images/Football.png")
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 65, 65);
    }
}