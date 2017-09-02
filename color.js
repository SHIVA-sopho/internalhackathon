var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


function Ring() {
    this.center = {
        'x': 300,
        'y': 300
    };
    this.radius = 200;
    this.inner_radius = 180;
    this.segments = 4;
    this.colors = ["red", "blue", "green", "yellow"];
    this.st_point = 0;
    this.draw = function(data) {
  
        var end_point = this.st_point + 0.5 * Math.PI;

        for (var i = 0; i < 4; i++) {

            ctx.beginPath();
            ctx.arc(ring.center['x'], ring.center['y'], ring.radius, this.st_point, end_point);
            ctx.stroke();
            ctx.lineTo(ring.center['x'], ring.center['y']);
            ctx.fillStyle = ring.colors[i];
            ctx.fill();

            ctx.beginPath();
            ctx.arc(ring.center['x'], ring.center['y'], ring.inner_radius, this.st_point, end_point);
            ctx.stroke();
            ctx.lineTo(ring.center['x'], ring.center['y']);
            ctx.fillStyle = "white";
            ctx.fill();
            this.st_point = end_point;
            end_point = end_point + 0.5 * Math.PI;

        }
    this.move = function(){
    	var dthetaR = -Math.PI / 80;
    	this.st_point = this.st_point + dthetaR;
    }    
    };
}

function Hero(params) {

    this.radius = 20;
    this.curr_track_col = 'yellow';
    this.theta = params['theta'];
    this.sense = 1;
    this.color = params['color'];
    this.center = {
        'x': 300 + Math.sin(this.theta),
        'y': 80 + (1 - Math.cos(this.theta))
    }
    this.draw = function() {
        ctx.beginPath();
        ctx.beginPath();
        ctx.arc(this.center['x'], this.center['y'], this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    this.move = function() {
        
        var dtheta = Math.PI / 40;
        dtheta = dtheta * this.sense;
        this.center['x'] = 300 + (this.radius + ring.radius) * Math.sin(this.theta + dtheta);
        this.center['y'] = 80 + (this.radius + ring.radius) * (1 - Math.cos(this.theta + dtheta));
        this.theta = this.theta + dtheta;

    }

}

function score(value) {
	this.val = value ;
    this.draw = function() {
        ctx.font = "30px Arial";
        ctx.fillText("score :" + this.val, 10, 50);
    }
}

function Game() {
    theta = 0;
    this.ring = new Ring();
    this.hero = new Hero({
        'color': "blue",
        'theta': 3*Math.PI/2
    });
    this.score = new score(0);
    return {
        'ring': this.ring,
        'hero': this.hero,
        'score': this.score
    };
    
    
}


