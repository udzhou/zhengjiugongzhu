/**
 * @author udzhou
 */
function FrogObj() {
	this.x = 130;
	this.y = 420;
	this.width = 60;
	this.height = 60;
	this.score = 0;
	this.amount = 3;
	this.status = 1;
	this.jumpNum = 5;
	this.image = null;
}

function EnemyObj() {
	this.x = 135;
	this.y = 0;
	this.width = 50;
	this.height = 50;
	this.speed = 1;
	this.ctime = 480;
	this.gtime = 0;
	this.index = 1;
	this.image = null;
}

function PrizeObj() {
	this.x = 278;
	this.y = 480;
	this.width = 30;
	this.height = 30;
	this.speed = 0.5;
	this.ctime = 480;
	this.gtime = 3;
	this.life = 3;
	this.jump = 5;
	this.image = null;
}

function init() {
	canvas = document.getElementById("game");
	canvas.width = 320;
	canvas.height = 480;
	ctx = canvas.getContext("2d");
	startCanvas();
	frogLevel1 = new FrogObj();
	frogLevel1.image = frogImage;
	frogLevel2 = new FrogObj();
	frogLevel2.image = frog2Image;
}

function start(e) {
	if(e.x >= 90 && e.x <= 230 && e.y >= 200 && e.y <= 280) {
		ctx.clearRect(0, 0, 320, 480);
		ctx.drawImage(chooseImage, 0, 0, 320, 480);
		var canvasClick = document.getElementById("game");
		canvasClick.onmousedown = function(e) {
			chooseLevel(e);
		};
	}
}

function chooseLevel(e) {
	//ChooseLevel1
	if(e.x >= 55 && e.x <= 120 && e.y >= 40 && e.y <= 110) {
		frogLevel1.jumpNum=5;
		frogLevel1.amount=3;
		if(frogLevel1.status == 1) {
			playLevel1();
		}
		if(frogLevel1.status == 0) {
			frogLevel1.status = 1;
		}
		document.getElementById("stageStart").play();
		var canvasClick = document.getElementById("game");
		canvasClick.onmousedown = function(e) {
			menuChoose1(e);
		};
	}
	//ChooseLevel2
	if(e.x >= 125 && e.x <= 205 && e.y >= 130 && e.y <= 213) {
		frogLevel2.jumpNum=5;
		frogLevel2.amount=3;
		if(frogLevel2.status == 1) {
			playLevel2();
		}
		if(frogLevel2.status == 0) {
			frogLevel2.status = 1;
		}
		var stageStart = document.getElementById("stageStart");
		stageStart.play();
		var canvasClick = document.getElementById("game");
		canvasClick.onmousedown = function(e) {
			menuChoose2(e);
		};
	}
}

function startCanvas() {
	ctx.drawImage(bgImage, 0, 0, 320, 480);
	ctx.drawImage(startImage, 90, 200, 140, 80);
	var canvasClick = document.getElementById("game");
	canvasClick.onmousedown = function(e) {
		start(e);
	};
}

function menuChoose1(e) {
	if(e.x >= 254 && e.x <= 320 && e.y >= 0 && e.y <= 40) {
		frogLevel1.status = 0;
		ctx.clearRect(0, 0, 320, 480);
		ctx.drawImage(chooseImage, 0, 0, 320, 480);
		var canvasClick = document.getElementById("game");
		canvasClick.onmousedown = function(e) {
			chooseLevel(e);
		};
	}
}

function menuChoose2(e) {
	if(e.x >= 254 && e.x <= 320 && e.y >= 0 && e.y <= 40) {
		frogLevel2.status = 0;
		ctx.clearRect(0, 0, 320, 480);
		ctx.drawImage(chooseImage, 0, 0, 320, 480);
		var canvasClick = document.getElementById("game");
		canvasClick.onmousedown = function(e) {
			chooseLevel(e);
		};
	}
}
