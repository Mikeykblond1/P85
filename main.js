//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_width = 100;
greencar_height = 75;

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;


//upload car, and background images on the canvas.
function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

greencar_imgTag = new Image();
greencar_imgTag.onload = uploadgreencar;
greencar_imgTag.src = greencar_image;

}

//Define function ‘uploadBackground’
function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0, canvas.width,canvas.height);


}//Define function ‘uploadgreencar’.

function uploadgreencar() {
	
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_height,greencar_width);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
//Define function to move the car upward
function up()
{
	if(greencar_y>=0)
	{
		greencar_y = greencar_y - 10;
		console.log("when up arrow is pressed, x = "+greencar_x +"| y ="+greencar_y );
		uploadBackground();
	   	uploadgreencar();
	}
}
//Define function to move the car downward
function down()
{
	if(greencar_y < canvas.height - greencar_width)
	{
		greencar_y = greencar_y + 10;
		console.log("when down arrow is pressed, x = "+greencar_x +"| y ="+greencar_y );
		uploadBackground();
	   	uploadgreencar();
	}
}
//Define function to move the car left side
function left()
{
	if(greencar_x>=0)
	{
		greencar_x = greencar_x - 10;
		console.log("when left arrow is pressed, x = "+greencar_x +"| y ="+greencar_y );
		uploadBackground();
	   	uploadgreencar();
	}
}
//Define function to move the car right side
function right()
{
	if(greencar_x < canvas.width - greencar_height)
	{
		greencar_x = greencar_x + 10;
		console.log("when right arrow is pressed, x = "+greencar_x +"| y ="+greencar_y );
		uploadBackground();
	   	uploadgreencar();
	}
}
