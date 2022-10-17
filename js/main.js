
function delay_listener(func){
	var timer;
	return function(ev){
		if(timer) clearTimeout(timer);
		timer = setTimeout(func, 100, ev);
	};
}

window.addEventListener("resize", delay_listener(setup));

function setup () {
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	angleMode(DEGREES);
	frameRate(30);
	noStroke();
}

class Confetti {
	constructor () {
		this.size = {w: 10, h:20};
		this.color = color(
			Math.max(Math.random() * 255, 150),
			Math.max(Math.random() * 255, 150),
			Math.max(Math.random() * 255, 150)
		);
		this.pos = new p5.Vector(
			(Math.random() * window.innerWidth - (window.innerWidth / 2)) * 1.5,
			Math.random() * -window.innerHeight * 2,
			Math.random() * -500
		);
		this.vel = new p5.Vector(0, 5, 0);
		this.angl = new p5.Vector(0, 0, 0);
		this.angl_vel = new p5.Vector(
			Math.max(Math.random() * 2, 0.3),
			Math.max(Math.random() * 8, 5),
			Math.max(Math.random() * 0.2, 0.1)
		);
		return this;
	}
	update () {
		push();
		translate(this.pos.x, this.pos.y, this.pos.z);
		rectMode(CENTER);
		rotateX(this.angl.x); rotateY(this.angl.y); rotateZ(this.angl.z);
		fill(this.color);
		rect(0, 0, this.size.w, this.size.h);
		this.pos.add(this.vel);
		this.angl.add(this.angl_vel);
		if (this.pos.y > 600) {
			this.pos = new p5.Vector(
				(Math.random() * window.innerWidth - (window.innerWidth / 2)) * 1.5,
				Math.random() * -window.innerHeight * 2,
				Math.random() * -500
			);
		}
		pop();
	}
}

let confetties = [];

function draw () {
	background(60, 85, 100);
	camera(Math.sin(frameCount / 100) * 100, Math.sin(frameCount / 500) * 10, 500, 0, 0, 0, 0, 1, 0);
	for (i = 0; i < 150; i++) {
		if (confetties.length < 150)
			confetties.push(new Confetti());
		confetties[i].update();
	}
}
