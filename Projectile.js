class Projectile{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        this.body1 = loadImage ("sprites/sling1.png") ;
        this.body2 = loadImage ("sprites/sling2.png") ;
        World.add(world,this.body);
    }
    potentialtokinetic(){
        this.body.bodyA = null;  
    }

    display(){
        image(this.body1,100,190,40,200)
        image(this.body2,72,195,40,110);
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            
            line(pointA.x,pointA.y,pointB.x,pointB.y+19);
            line(pointA.x,pointA.y,pointB.x+30,pointB.y+15);
        }
    }
}