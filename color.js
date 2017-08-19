var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");




function Ring(){
	this.center={'x':300,'y':300};
	this.radius=200;
	this.inner_radius=180;
	this.segments=4;
	this.colors=["red","blue","green","yellow"];
	this.draw = function(){
		
		
			var st_point = 0;
			var end_point = 0.5*Math.PI;
			for(var i=0;i<4;i++){
			
			ctx.beginPath();
			ctx.arc(ring.center['x'],ring.center['y'],ring.radius,st_point,end_point);
			ctx.stroke();
			ctx.lineTo(ring.center['x'],ring.center['y']);
			ctx.fillStyle = ring.colors[i];
			ctx.fill();

			ctx.beginPath();
			ctx.arc(ring.center['x'],ring.center['y'],ring.inner_radius,st_point,end_point);
			ctx.stroke();
			ctx.lineTo(ring.center['x'],ring.center['y']);
			ctx.fillStyle = "white";
			ctx.fill();
			st_point = end_point;
			end_point = end_point + 0.5*Math.PI;

			}
	};
}

function Hero(params){

	
	this.radius=20;
	this.current_ring_color="yellow";
	this.speed = Math.PI/1;
	this.theta = params['theta'] ;
	this.sense=1;
    this.color = params['color'];
    this.center = {'x':300+Math.sin(this.theta),'y':80+(1-Math.cos(this.theta))}
    this.draw = function(){
		ctx.beginPath();
		ctx.beginPath();
		ctx.arc(this.center['x'],this.center['y'],this.radius,0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color;
		ctx.fill();




    }

	this.move = function(){

		
        /*var date  = new Date();
        var time = date.getTime();*/
        var  dtheta=Math.PI/35 	 	;
        dtheta = dtheta*this.sense;
  		this.center['x']=300+(this.radius+ring.radius)*Math.sin(this.theta+dtheta);
    	this.center['y']=80+(this.radius+ring.radius)*(1-Math.cos(this.theta+dtheta));

    	this.theta=this.theta+dtheta;

    	
       
	}

}

function Game(){
    theta = 0;
	this.ring = new Ring();
	this.hero = new Hero({'color':"blue",'theta':0});
	this.score=new score();
	//this.shadow = new Hero({'color':"white",'theta':-Math.PI/50});
	 return {'ring':this.ring , 'hero': this.hero,'score':this.score};
}


function score(){
this.draw=function(scores){
ctx.font = "30px Arial";
ctx.fillText("score :"+ scores,10,50);}
}








