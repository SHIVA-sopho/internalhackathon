$(function(){
var game = Game();
var ring = game['ring'];
var hero = game['hero'];
var score = game['score'];
var colors = ["yellow","red","blue","green"];
var checks = false;
ring.draw();
hero.draw();

$('body').keypress(function(key){
   	if(key.which===32){
	hero.sense = -hero.sense;
	check(hero.curr_track_col);
	score.val++;
	}
});
function repeatOften(){

	difference = ((simplify_angle(simplify_angle(hero.theta)-simplify_angle(ring.st_point))));
	hero.curr_track_col = cal_col(difference);
	if(hero.color == hero.curr_track_col)
		checks = true;

	if(checks==true){
	
		
		if(lost(hero.curr_track_col)){
		
			alert('lost');

			restart();
		}	
	}

	hero.move();
	ring.move();
    ctx.clearRect(0,0,600,600);
    ring.draw();
    hero.draw();
	score.draw();

	requestAnimationFrame(repeatOften);
}

repeatOften();


function check(col) { 

	if(hero.color != col){
		alert("lost");
		//window.prompt('want to play again');	
	}
  
	else{
		var randi=Math.floor(Math.random()*4)%4;
		if(hero.color==colors[randi])
			randi=(randi+1)%4;
		
		hero.color=colors[randi];
		goal_col = hero.color;
		checks = false;
	}

}

function simplify_angle(theta) {
	if(theta<0)
	{
	theta = theta*-1;
	theta = theta%( 2*Math.PI);
	theta = 2*Math.PI - theta;
	}
	else
	{
		theta = theta % (2*Math.PI);
	}
	return theta;
}

function lost(col) {    
//console.log('c_quad = '+c_quad+' g_quad = '+g_quad)
   if(col != hero.color)
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
	function cal_col(theta_diff) {
		col = (Math.floor(((2*theta_diff)/Math.PI)))%4;
		return colors[col];

	}	

})