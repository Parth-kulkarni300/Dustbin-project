class paper{
    constructor(x,y){
        var options={
            restitution:0.3

        }
      //  this.x=x;
       // this.y=y;
        //this.r=50;
        this.image=loadImage("paper.png");
    this.body=Bodies.circle(x,y,50,options);
    World.add(world,this.body);



    }

    display(){
        var pos=this.body.position;
        //push()
       // translate(pos.x,pos.y);
       // rectMode(CENTER)
        //strokeWeight(4);
      // angleMode(RADIANS)
        fill(255)
      //  rotate(this.body.angle);
        image(this.image,pos.x,pos.y,50,50);
        //rect(0,0,this.wallThickness, this.dustbinHeight);
        //pop()

    }
}