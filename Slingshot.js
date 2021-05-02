class Chain {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB, 
            stiffness: 0.03,
            length: 10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly() {
        this.chain.bodyA = null;
    }

    attach(body) {
        this.chain.bodyA = body;
    }

    display() {
        if(this.chain.bodyA) {
        var A = this.chain.bodyA.position;
        var B = this.pointB;
        strokeWeight(3);
        line(A.x, A.y, B.x, B.y);
    }
}
}