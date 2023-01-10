let xPos, yPos, xSpeed, ySpeed; 
let xPos2, yPos2, xSpeed2, ySpeed2;

var a = 0; //rotation

var x, y , d, speed;
var x2, y2, d2, speed2;
var x3, y3, d3, speed3;
var x4, y4, d3, speed4;

var mySong, amplitude, play;
let button

function preload(){

mySong = loadSound( 'assets/Y2Mate.is - boerd - Silver-F7FFL4bHsEE-160k-1656180713437.mp3')
}

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent("p5container");
  
  
  
  
 play = false;
  
  var button =  createButton(' Play')
  button.center(CENTER);
  button.addClass('btn'); 
  button.position(-325, 0, 'relative'); 
  button.size(75,75) 
  
  button.mousePressed(function(){
      play= true;
      mySong.loop();
      button.hide(); 
     
  })

    xPos = width/2;
    yPos = height/2; //Bouncing Floaty
    xSpeed = -1;
    ySpeed = 1;

    xPos2 = width/2;
    yPos2 = height/2;  //Bouncing Floaty
    xSpeed2 = 1;  
    ySpeed2 = 1;

    x = 0; // 1st side scrolling circles
    y = height/4 
    d = 200;
    speed = .5 ;

    x2 = width * 0.3; //side scrolling circles
    y2 = height/2; 
    d2 = 200;
    speed2 = .5;

    x3 = width * 0.6; //side scrolling circles
    y3 = height/12; 
    d3 = 200;
    speed3 = .5;

    x4 = width; //side scrolling circles
    y4 = height/1; 
    d4 = 200;
    speed4 = .5;


  amplitude = new p5.Amplitude();


    //change the angleMode to degrees so it's easier, otherwise it's in radians 
  angleMode(DEGREES);

  
}

function draw() {
   
  c1 = color(3, 12, 45);
  c2 = color(28, 61, 177);

  for(let y4=0; y4<height; y4++){
    n = map(y4,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y4,width, y4);
  }

    noStroke();

    //horizontal movement
    xPos = xPos + xSpeed;
    if (xPos + 0 > width || xPos -10 < 10 ){
        xSpeed *= -1; //inverts the value
    }
 
     //vertical movement
     yPos = yPos + ySpeed;
     if (yPos+140> height || yPos -0 < 0){
         ySpeed *= -1;
     }


   //horizontal movement
   xPos2 = xPos2 + xSpeed;
   if (xPos2 + 50 > width || xPos-50 < 0 ){
       xSpeed *= -1; //inverts the value
   }
    //vertical movement
    yPos2 = yPos2 + ySpeed2;
    if (yPos2+270 > height || yPos2-50 < 0){
        ySpeed2 *= -1;

    }
    x++ ; 1
    x = x + speed;

   if(x > width + d/2){  //if the centre point is greater than height, 
       //return to zero. Then new variable halfs the center point again so it goes off screen.

       x = 0 - d/2;
    }
    y++ ; 1
    y = y + speed;

   if(y > height + d/2){  

       y = 0 - d/2;
   
    }
    x2 ++ ; 1 
    x2 = x2 + speed2;

   if(x2 > width + d2/2){ 

       x2 = 0 - d2/2;

   }
   y2 ++ ; 1 
   y2 = y2 + speed2;

  if(y2 > height + d2/2){ //fallingright brick 3

      y2 = 0 - d2/1;
  
    }
    x3 ++ ; 1 
  x3 = x3 + speed3;

 if(x3 > height + d3/2){  

     x3 = 0 - d3/2;

}
y3 ++ ; 1 
y3 = y3 + speed3;

if(y3 > height + d3/2){  

   y3 = 0 - d3/2;
}

y4 ++ ; 1 
y4 = y4 + speed4;

if(y4 > height + d4/2){  

   y4 = 0 - d4/2;
}

   x4 ++ ; 1 
x4 = x4 + speed4;

if(x4 > height + d4/2){  

   x4 = 0 - d4/2;
}

var level = amplitude.getLevel(); //sound
console.log(amplitude.getLevel())

var vol= map ( level,0, 1,0, 120)

var col = map (level,0, 1,0,  200)



if(vol>10){
    
}

fill('#0D2064');
rect(155, y4, 10, 75,); //falling right brick 5

fill('#0D1D57');
rect(150, y4, 10, 75,); //falling right brick 5


fill('#0D2064');
rect(55, y3, 5, 40,); //falling left brick 3

fill('#0D1D57');
rect(50, y3, 5, 40,); //falling left brick 3


fill('#0D2064');
rect(25, y4, 5, 40,); //falling left brick 5

fill('#0D1D57');
rect(20, y4, 5, 40,); //falling left brick 5


fill('#0D2064');
rect(575, y4, 5, 40,); //falling left brick 6

fill('#0D1D57');
rect(580, y4, 5, 40,); //falling left brick 6

fill('#0D2064');
rect(505, y3, 10, 100,); //falling right brick 3

fill('#0D1D57');
rect(500, y3, 10, 100,); //falling right brick 4


fill('#0D2064');
rect(250, y3, 10, 75,); //falling right brick 3

fill('#0D1D57');
rect(245, y3, 10, 75,); //falling right brick 4


 fill( '#0D1D57');
 ellipse(xPos, 70, 60, 60,); //3|4thbackground floaty 

 fill( '#102572');
 ellipse(xPos , 72, 52 , 52,); //3|4thbackground floaty2

 fill( '#07195A');
 ellipse(xPos, 400, 5, 5,); //3|3rdbackground floaty 


 fill( '#0D1D57');
 ellipse(xPos , 348, 18, 18,); //3|background floaty 

 fill( '#0D2064');
 ellipse(xPos , 350, 15 , 15,); //3|background floaty2

 fill( '#0D1D57');
 ellipse(xPos , 220, 38, 38,); //3|2ndbackground floaty 

 fill( '#0D2064');
 ellipse(xPos , 222, 32 , 32,); //3|2ndbackground floaty2

 
 
 fill('#142666');
 rect(204, yPos, 5, 60,); //falling left brick 2 mirror

 fill('#0D1C54');
 rect(200, yPos, 5, 60,); //falling left brick 2 mirror

 fill('#142666');
 rect(204, y, 5, 60,); //falling left brick 2

 fill('#0D1C54');
 rect(200, y, 5, 60,); //falling left brick 2


 push();
 // translate to where you want the center of the ellipse to be
 translate(width/2, height/2);
 rotate(25);
 // draw the ellipse at the origin
 fill(8, 19, 56)
 ellipse(20, 200, 350, vol+ 150); //hill 4 
   pop();

   push();
   // translate to where you want the center of the ellipse to be
   translate(width/2, height/2);
   rotate(25);
   // draw the ellipse at the origin
   fill('#030B25')
   ellipse(20, 215, 350, vol+ 150); //hill 4 
     pop();
   

  fill('#0E267E');
   rect(124, y, 12, 80,); //falling left brick 1
  
   fill('#0D1C54');
   rect(120, y, 12, 80,); //falling left brick 1

   
   fill( '#6D88ED');
   ellipse(x4 , 27, 80, 80,); //4|4thbackground floaty 

   fill( '#112E9C');
   ellipse(x4 , 25, 72 , 72,); //4|4thbackground floaty2

   fill( '#0D1F60');
   ellipse(x4 , 425, 28, 28,); //4|3rdbackground floaty 

  fill( '#0D1D57');
   ellipse(x4 , 300, 48, 48,); //4|background floaty 

   fill( '#0D2064');
   ellipse(x4 , 302, 40 , 40,); //4|background floaty2

   fill( '#071857');
   ellipse(x4 , 170, 58, 58,); //4|2ndbackground floaty 

   fill( '#18359E');
   ellipse(x4 , 167, 50 , 50,); //4|2ndbackground floaty2
   

   fill( '#6D88ED');
   ellipse(x3 , 27, 80, 80,); //3|4thbackground floaty 

   fill( '#112E9C');
   ellipse(x3 , 25, 72 , 72,); //3|4thbackground floaty2

   fill( '#0D1F60');
   ellipse(x3 , 425, 28, 28,); //3|3rdbackground floaty 


   fill( '#0D1D57');
   ellipse(x3 , 300, 48, 48,); //3|background floaty 

   fill( '#0D2064');
   ellipse(x3 , 302, 40 , 40,); //3|background floaty2

   fill( '#071857');
   ellipse(x3 , 170, 58, 58,); //3|2ndbackground floaty 

   fill( '#18359E');
   ellipse(x3 , 167, 50 , 50,); //3|2ndbackground floaty2

       
   fill('#04103C');
   rect(360, y2, 15, 100,); //falling right brick

   fill('#05144B');
   rect(370, y2, 15, 100,); //fallingright brick 
    
    fill( '#193498');
   ellipse(545, 430, 450, vol+ 150,); //hill 3
    
     fill( '#2344BF');
    ellipse(550, 440, 450, vol+ 150,); //hill 3

    fill('#0E1E56');
    rect(530, y2, 20, 120,); //falling right brick 2
 
    fill(17, 46, 156);
    rect(550, y2, 10, 120,); //fallingright brick 2


    fill( '#6D88ED');
   ellipse(x2 , 27, 80, 80,); //2|4thbackground floaty 

   fill( '#112E9C');
   ellipse(x2 , 25, 72 , 72,); //2|4thbackground floaty2

   fill( '#0D1F60');
   ellipse(x2 , 425, 28, 28,); //2|3rdbackground floaty 


   fill( '#0D1D57');
   ellipse(x2 , 300, 48, 48,); //2|background floaty 

   fill( '#0D2064');
   ellipse(x2 , 302, 40 , 40,); //2|background floaty2

   fill( '#071857');
   ellipse(x2 , 170, 58, 58,); //2|2ndbackground floaty 

   fill( '#18359E');
   ellipse(x2 , 167, 50 , 50,); //2|2ndbackground floaty2

   fill( '#6D88ED');
   ellipse(x , 27, 80, 80,); //4thbackground floaty 

   fill( '#112E9C');
   ellipse(x , 25, 72 , 72,); //4thbackground floaty2

   fill( '#0D1F60');
   ellipse(x , 425, 28, 28,); //3rdbackground floaty 


   fill( '#0D1D57');
   ellipse(x , 300, 48, 48,); //background floaty 

   fill( '#0D2064');
   ellipse(x , 302, 40 , 40,); //background floaty2

   fill( '#071857');
   ellipse(x , 170, 58, 58,); //2ndbackground floaty 

   fill( '#18359E');
   ellipse(x , 167, 50 , 50,); //2ndbackground floaty2



   fill('#0E1E56');
   rect(460, y4, 16, 100,); //falling right brick 7

   fill(17, 46, 156);
   rect(470, y4, 12, 100,); //fallingright brick 7

    fill( '#3E61E3');
    ellipse(460, 500, 537, 164,); //hill 2


    fill( '#2344BF');
    rect(250, y4, 15, 100,); //falling right brick 6

    fill('#193498');
    rect(245, y4, 15, 100,); //falling right brick 6
 
    
   fill('#6D88ED');
    rect(20, 470, 158, 370,); //left brick 4

    fill('#4D6FEE');
    rect(10, 470, 158, 370,); //left brick 4

    fill('#1D3EB9');
    rect(-15, 450, 158, 370,); //left brick 3

    fill('#18359E');
    rect(-30, 450, 158, 370,); //left brick 3


    fill('#040B23');
    rect(415, 440, 198, 382,); //right brick 3

    fill('#040E32');
    rect(430, 440, 198, 382,); //right brick 3

    fill('#04103C');
    rect(476, 400, 198, 382,); //right brick 2

    fill('#05144B');
    rect(490, 400, 198, 382,); //right brick 2


    fill('#0D2684');
    rect(-60, 400, 159, 370,); //left brick 2

    fill('#071857');
    rect(-75, 400, 156, 371,); //left brick 2

    fill( '#081338');
    ellipse(118, yPos, 82 , 82,); //little floaty 

    fill( col, 26, 67);
    ellipse(115, yPos, 73 , 74,); //little floaty 2

    fill( '#081338');
    ellipse(350, yPos2, 323 , 316,); // big floaty

    fill( col, 26, 67);
    ellipse(360, yPos2, 287 , 287,); //2nd big floaty

    fill( '#071857');
    ellipse(300, 560, 537, vol + 150,); //hill

    fill( '#071650');
    ellipse(300, 570, 537, vol + 140,); //hill foreground

    fill('#071857');
    rect(530, 375, 198, 382,); //right 2ndborderbricks

    fill(7, 16, 49 );
    rect(-115, 379, 166, 310,); //leftborder bricks
    
    fill(0);
    rect(-140, 379, 166, 310,); //leftborder bricks

    fill(17, 46, 156 );
    rect(560, 375, 166, 310,); //rightborder bricks


    

    



}