class Rope{
    constructor(body1, body2, offsetX, offsetY){
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB : {x: offsetX, y: offsetY},
            //stiffness: 1.2,
            //length: 50
        }
        //this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.pointB;
            push();
            strokeWeight(4);
            stroke("White");
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop();
        }
    }
    
}