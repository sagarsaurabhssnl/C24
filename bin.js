class Bin {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        rectMode(CENTER);
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0, this.width, this.height);
        pop();
    }
}