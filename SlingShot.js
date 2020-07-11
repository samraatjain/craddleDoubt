class SlingShot{
    constructor(body1,body2,offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
       
       

        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            
            push();
            
            stroke(48,22,8);
            
            if(pointA.x<220)
            {
                strokeWeight(7);
                //attach lines to the bird making the  rubber band
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
              
            }
            else{

            strokeWeight(3);
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            
            }
            pop();
            

        }
    }
    
}