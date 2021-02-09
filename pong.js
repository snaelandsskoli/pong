var spadi1
var spadi2


function setup() {
  createCanvas(400, 400);
  spadi1 = new Spadi(15,170,15,60)
  spadi2 = new Spadi(370,170,15,60)

}

function draw() {
  background(220);
  spadi1.draw()
  spadi2.draw()
  spadi1.move()
  spadi2.move()
  

  
}
// Boltinn, ætlum að búa hann til í dag
class Bolti{
  constructor(){
   
  }
  draw(){
    
  }
  move(){
    
  }
}

// Spadinn
class Spadi {
  
  constructor(x,y,b,h){
    this.x = x
    this.y = y
    this.b = b
    this.h = h
    
  }
  
  draw(){
    rect(this.x, this.y, this.b, this.h)
  }

  move(){
    if(this.x < width/2 ){
      if(keyIsDown(87) && this.y > 0){
        this.y-=4
      }
      else if(keyIsDown(83) && this.y+this.h < height){
        this.y+=4
      }
    }
    
    else{
      
      if(keyIsDown(UP_ARROW) && this.y > 0){
        this.y-=4
      }
      else if(keyIsDown(DOWN_ARROW) && this.y+this.h < height){
        this.y+=4
      
        }
    }  
      
  }
}
