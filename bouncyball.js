let xPos = 0
let yPos = 0

let xSpeed = 10
let ySpeed = 10
let furby



let ballDiameter = 100


function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}

function preload(){
	furby = loadImage('loo.png')
	 
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2

   background(0)
	imageMode(CENTER)

}

function draw(){
	//background(0)

	if(xPos >= windowWidth - ballDiameter/2 || xPos <= ballDiameter/2){
		fill(random(255), random(255), random(255))

}
		if(yPos >= windowHeight - ballDiameter/2 || yPos <= ballDiameter/2){
		fill(random(255), random(255), random(255))
} 
    textSize(50)
	text('Bouncy Ball Screensaver', 100, 100)
    //image(furby, xPos, yPos, ballDiameter, ballDiameter)
	ellipse(xPos, yPos, ballDiameter, ballDiameter)

if(xPos >= windowWidth - ballDiameter/2 || xPos <=ballDiameter/2){
	//reverse xspeed
	xSpeed = xSpeed * -1;
}

if(yPos >= windowHeight - ballDiameter/2 || yPos <=ballDiameter/2){
	//reverse xspeed
	ySpeed = ySpeed * -1;
}


	xPos = xPos + xSpeed
	yPos = yPos + ySpeed


}