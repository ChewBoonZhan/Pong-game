
function setup(){
    
    createCanvas(window.innerWidth,window.innerHeight-4.7);
    
}

var score = 0;
var cs_score = 0;
var width = window.innerWidth;
var height = window.innerHeight-4.7;

var x = width/2;
var y = height/2;
var dx = 1;
var dy = 1;
var lr= 2;
var ai_y = height/2-50;
var reversed = Math.random();
if (reversed >=0.5){
    dy = -dy;
}
else{
    dx = -dx;
}
var radius = 30;
function update_dx(dx){
    if (dx<=0){
        dx-=0.5;
    }
    else{
        dx+=0.5;
    }
    lr+=0.2;
    return dx;
}
function play(){
    circle(x,y,radius);
    x+=dx;
    y+=dy;
    if ((y + radius>=height) || (y - radius<=0)){
        dy = -dy;
        dx = update_dx(dx);
        dy = update_dx(dy);
    }

    //for testing purpose
    /*
    if ((x>=width) || (x<=0)){
        dx = -dx;
        dx = update_dx(dx);
        dy = update_dx(dy);
    }
    */

    

    


    //create the rect that follows mouse
    if((mouseY-75<=0)) {
        rect(0,0,20,150);
        
    }
    else if((mouseY+75>=height)){
        rect(0,height-150,20,150);
        
    }
    else{
        rect(0,mouseY-75,20,150);
    }

    //create the ai that plays with you.
    if (ai_y > y){
        ai_y -= lr;
    }
    else{
        ai_y += lr;
    }
    rect(width-21,ai_y-75,20,150);
}

function reset(){
    x = width/2;
    y = height/2;
    dx = 1;
    dy = 1;
    lr= 2;
    ai_y = height/2-50;
    reversed = Math.random();
    if (reversed >=0.5){
        dy = -dy;
    }
    else{
        dx = -dx;
    }
}


function draw(){
    background(0);
    
    play();

    
    //code such that if it hits the left side first 
    if ((x - radius <=0)){
        if (((y <= mouseY+78) && (y >= mouseY - 78))){
            dx = -dx;
            dx = update_dx(dx);
            dy = update_dx(dy);
        }
        else{
            
           // stop();
          //  fill(255);
           // noStroke();
            cs_score++;
            reset();
           
        }
    }
    else if (x + radius >=width){  //code such that it hits the right side
        if (((y <= ai_y + 78) && (y >= ai_y - 78))){
            dx = -dx;
            dx = update_dx(dx);
            dy = update_dx(dy);
        }
        else{
            
            score++;
            reset();
        }
    }
    fill(255);
    noStroke();
    text(score,width/2-100,30);
    text("|",width/2,30);
    text(cs_score,width/2+100,30);
}


function stop(){  //to stop the program in the console.
    //console.log(ai_y);
    //console.log(y)
    lr = 0;
    dx = 0;
    dy = 0;
}