class Box  {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 2
        }
        this.visibility = 225;
        x= x;
        y= y;
        width = 30;
        height = 35;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }

    display() {
        if(this.body.speed <3) {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, width, height);
        pop();
        }
        else{
            World.remove(world, this.body);
            push();
            tint(255, this.visibility);
            this.visibility = this.visibility -5;
            pop();
        }
    }
}