$(function(){

var count=0;
$('body').keypress(function(key){
	    //event.preventDefault();
	    
		if(key.which===32){
     	
		hero.sense = -hero.sense;

		check();
		
		count++;
      	//console.log(count);
		}
		
		
});




var game = Game();
var passed =0;
var checks =false;
var hardgoal
var ring = game['ring'];
var hero = game['hero'];
var score = game['score'];
//var shadow = game['shadow'];
ring.draw();
hero.draw();
//shadow.draw();
var current_quad = 1;
var goal_quad = 3;

function repeatOften(){

//console.log(start);


//console.log('repeatoften called');
current_quad = cal_quadrant(hero.center['x'],hero.center['y']);
console.log(current_quad + "this is ");
//console.log('current quad = '+current_quad + " goal_quad = "+goal_quad + "checks = "+checks);
if(current_quad == goal_quad)
	{checks = true;

	}

if(checks==true)
{
	
	if(lost(current_quad,goal_quad))
	{
		alert('chutiya..');
		restart();
	}	
}




hero.move();
//shadow.move();
ctx.clearRect(0,0,600,600);
ring.draw();
hero.draw();
score.draw(count);

requestAnimationFrame(repeatOften);
}

repeatOften();



var colors = ["yellow","red","blue","green"];

function check(){

	var ball_color=hero.color;
	
	var theta = parseInt(Math.floor(2*simplify_angle(hero.theta)/(Math.PI)));

	//console.log(colors[theta]);

	if(hero.color!=colors[theta]){
		alert("chutiya........");
	}

	else{
		
		//console.log('updated');
		var randi=Math.floor(Math.random()*4)%4;
		if(hero.color==colors[randi]){
			randi=(randi+1)%4;
		}
		hero.color=colors[randi];
		goal_quad = randi+1;
		checks = false;
	}

}



function simplify_angle(theta){
	if(theta<0)
	{
	theta = theta*-1;
	theta = (theta/(2*Math.PI) - parseInt(theta/(2*Math.PI)))*Math.PI*2;
	theta = 2*Math.PI - theta;
	}
	else
	{
		theta = (theta/(2*Math.PI) - parseInt(theta/(2*Math.PI)))*Math.PI*2;
	}
	return theta;
}

function lost(c_quad,g_quad)
{    
//console.log('c_quad = '+c_quad+' g_quad = '+g_quad)
   if(c_quad != g_quad)
   	{
   		checks=false;
   		return true;
   	}	
   else
		return false;
   
	
}

	function restart(){

	    location.reload();
	}

	function cal_quadrant(x0,y0){
		var x1 = x0-300;
		var y1 = (y0-300);
		if(x1 >=0 )
		{
			if(y1>=0)
				ans = 2;
			else
				ans = 1;

		}
		else
		{
			if(y1>0)
				ans = 3;
			else
				ans = 4;
		}
		return ans;

		}

})