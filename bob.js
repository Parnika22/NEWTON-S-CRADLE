class Bob{
    constructor(x,y,radius){
        var options = {
            'isStatic': false,
            'restitution' : 1, 
            'friction' : 0.1,
            'density' : 0.4
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("Crimson")
        strokeWeight(5)
        stroke("White")
        ellipse(0, 0, this.radius);
        pop();
    
    }
}