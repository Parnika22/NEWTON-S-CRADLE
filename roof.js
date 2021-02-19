class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.bodies = Bodies.rectangle(x,y,width,height,options);
        this.width = width; 
        this.height = height; 
        World.add(world,this.bodies);
    }
    display(){
        var pos = this.bodies.position; 
        rectMode(CENTER);
        fill("Gold")
        strokeWeight(5)
        stroke("LightGrey")
        rect(pos.x, pos.y, this.width, this.height);
    }
}