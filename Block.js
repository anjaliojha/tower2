class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image=loadImage("block.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility=225
      

      }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);

      if (this.body.speed <3 ){
        super.display();
      }
      else{
        World.remove(world.this.bodu);
        push()
        this.Visibility=this.Visibility-5
        tint(225,this.Visibiltiy)
        image(this.image,this.position.x,this.position.y,25,25)
        pop();
      }
    }



}