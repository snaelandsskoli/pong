var spadi1
var spadi2
var bolti

function setup() {
  createCanvas(400, 400);
  spadi1 = new Spadi(15,165,20,70)
  spadi2 = new Spadi(370,165,20,70)
  bolti = new Bolti(200,200,15)
}

function draw() {
  background(220);

  spadi1.update()
  spadi2.update()
  spadi1.draw()
  spadi2.draw()

  bolti.checkLeftPaddle(spadi1)
  bolti.checkRightPaddle(spadi2)
  bolti.update()
  bolti.draw()
}

class Bolti{
  constructor(x,y,r){
    this.x = x 
    this.y = y
    this.r = r
    this.speedX = random([2.5,-2.5])
    this.speedY = random([1,-1])
    
  }
  
  draw(){
    circle(this.x, this.y, this.r)
  }
  
  update(){  
    // Athuga hvort boltinn klessir á veggi
    if(this.y <= 0){
      this.speedY *=-1
    }
    else if(this.y >= 400){
      this.speedY *= -1
    }
   // Athuga hvort boltinn fer í mark
    if(this.x <= 0){
      this.x=200
      this.y=200
      this.speedX*=-1
      this.speedY = random([1,-1])
    }
    else if(this.x>=400){
      this.x=200
      this.y=200
      this.speedX*=-1
      this.speedY = random([1,-1])
    }
    
    this.x+=this.speedX
    this.y+=this.speedY
   
  }
  
  checkLeftPaddle(spadi){
    if(this.y > /*HVAÐ?*/-1  &&
       this.y < /*HVAÐ?*/1  &&
       this.x - this.r < /*HVAÐ?*/1 ){
      this.speedX*=-1      
    }

  }
  checkRightPaddle(spadi){   
    if(this.y  > /*HVAÐ?*/ -1 &&
       this.y  < /*HVAÐ?*/ 1 &&
       this.x + this.r  > /*HVAÐ?*/1  ){
      
      this.speedX*=-1      
    }
  }
  
}


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
  

  update(){
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

