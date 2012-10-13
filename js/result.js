/**
 * @author udzhou
 */
var scoreX = 300;
function drawScore(score) {
	switch(score) {
		case 0:
			scoreX = 306;
			break;
		case 1:
			scoreX = 0;
			break;
		case 2:
			scoreX = 36;
			break;
		case 3:
			scoreX = 71;
			break;
		case 4:
			scoreX = 102;
			break;
		case 5:
			scoreX = 136;
			break;
		case 6:
			scoreX = 171;
			break;
		case 7:
			scoreX = 205;
			break;
		case 8:
			scoreX = 239;
			break;
		case 9:
			scoreX = 272;
			break;
	}
}

function gameChoose(e, FrogObj) {
	if(e.x >= 15 && e.x <= 155 && e.y >= 300 && e.y <= 380) {
		ctx.clearRect(0, 0, 320, 480);
		ctx.drawImage(chooseImage, 0, 0, 320, 480);
		FrogObj.amount = 3;
		var canvasClick = document.getElementById("game");
		canvasClick.onmousedown = function(e) {
			chooseLevel(e);
		};
	}
	if(e.x >= 165 && e.x <= 305 && e.y >= 300 && e.y <= 380) {
		startCanvas();
		FrogObj.amount = 3;
	}
}

function gameChoose2(e, FrogObj) {
	if(e.x >= 90 && e.x <= 230 && e.y >= 200 && e.y <= 280) {
		if(frogLevel2.status == 0) {
			frogLevel2.status = 1;
		} else {
			playLevel2();
		}
		frogLevel1.amount=3;
		FrogObj.score = 0;
		frogLevel2.jumpNum=5;
		frogLevel1.jumpNum=5;
		frogLevel2.amount=3;
		var canvasClick = document.getElementById("game");
		canvasClick.onmousedown = function(e) {
			menuChoose2(e);
		};
	}
}

function caluScore(FrogObj) {
	var hundred = 0, ten = 0, single = 0;
	if(FrogObj.score < 0) {
		FrogObj.score = 0;
	}
	if(FrogObj.score > 910) {
		FrogObj.status = 0;
		ctx.drawImage(nextImage, 90, 200, 140, 80);
		var canvasClick = document.getElementById("game");
		canvasClick.onmousedown = function(e) {
			gameChoose2(e, FrogObj);
		};
	}
	if(FrogObj.score < 10) {
		ctx.drawImage(scoreImage, 306, 0, 23, 30, 30, 2, 24, 30);
		ctx.drawImage(scoreImage, 306, 0, 23, 30, 50, 2, 24, 30);
		single = FrogObj.score;
		drawScore(single);
		ctx.drawImage(scoreImage, scoreX, 0, 23, 30, 70, 2, 24, 30);
	} else if(FrogObj.score >= 10 && FrogObj.score < 100) {
		ctx.drawImage(scoreImage, 306, 0, 23, 30, 30, 2, 24, 30);
		single = FrogObj.score % 10;
		ten = (FrogObj.score - single) / 10;
		drawScore(ten);
		ctx.drawImage(scoreImage, scoreX, 0, 23, 30, 50, 2, 24, 30);
		drawScore(single);
		ctx.drawImage(scoreImage, scoreX, 0, 23, 30, 70, 2, 24, 30);
	} else if(FrogObj.score >= 100) {
		single = FrogObj.score % 10;
		ten = (FrogObj.score - single) / 10;
		hundred = (FrogObj.score - FrogObj.score % 100) / 100;
		drawScore(hundred);
		ctx.drawImage(scoreImage, scoreX, 0, 23, 30, 30, 2, 24, 30);
		drawScore(ten);
		ctx.drawImage(scoreImage, scoreX, 0, 23, 30, 50, 2, 24, 30);
		drawScore(single);
		ctx.drawImage(scoreImage, scoreX, 0, 23, 30, 70, 2, 24, 30);
	} else {
		ctx.drawImage(scoreImage, 306, 0, 23, 30, 30, 2, 24, 30);
		ctx.drawImage(scoreImage, 306, 0, 23, 30, 50, 2, 24, 30);
	}
}

function checkColl(FrogObj, EnemyObj) {
	if(EnemyObj.x >= FrogObj.x && EnemyObj.x <= FrogObj.x + 60 && EnemyObj.y >= FrogObj.y - EnemyObj.height && EnemyObj.y <= FrogObj.y + 30) {
		EnemyObj.y = 500;
		FrogObj.score -= 20;
		document.getElementById("bomb").play();
		FrogObj.amount -= 1;
		EnemyObj.life = FrogObj.amount;
		FrogObj.width = 120;
		FrogObj.height = 120;
		setTimeout(setSize, 60);
		setTimeout(setSize2, 60);
		if(FrogObj.amount == 0) {
			FrogObj.status = 0;
			ctx.drawImage(againImage, 15, 300, 140, 80);
			ctx.drawImage(quitImage, 165, 300, 140, 80);
			var stageOver = document.getElementById("stageOver");
			stageOver.play();
			var canvasClick = document.getElementById("game");
			canvasClick.onmousedown = function(e) {
				gameChoose(e, FrogObj);
			};
		}

	}
}

function checkColl2(FrogObj, PrizeObj) {
	if(PrizeObj.x >= FrogObj.x && PrizeObj.x <= FrogObj.x + 60 && PrizeObj.y >= FrogObj.y - PrizeObj.height && PrizeObj.y <= FrogObj.y + 30) {
		PrizeObj.y = 500;
		FrogObj.score += 50;
		PrizeObj.life = FrogObj.amount;
		document.getElementById("food").play();
		if(PrizeObj.life < 3) {
			PrizeObj.life += 1;
			FrogObj.amount += 1;
		}
		FrogObj.width = 120;
		FrogObj.height = 120;
		setTimeout(setSize, 60);
		setTimeout(setSize2, 60);

	}
}

function checkColl3(FrogObj, PrizeObj) {
	if(PrizeObj.x >= FrogObj.x && PrizeObj.x <= FrogObj.x + 60 && PrizeObj.y >= FrogObj.y - PrizeObj.height && PrizeObj.y <= FrogObj.y + 30) {
		PrizeObj.y = 500;
		FrogObj.score += 20;
		PrizeObj.jump = FrogObj.jumpNum;
		document.getElementById("food").play();
		if(PrizeObj.jump < 5) {
			PrizeObj.jump += 1;
			FrogObj.jumpNum += 1;
		}
		FrogObj.width = 120;
		FrogObj.height = 120;
		setTimeout(setSize, 60);
		setTimeout(setSize2, 60);

	}
}

function setLife(FrogObj, n) {
	switch(n) {
		case 3:
			ctx.drawImage(FrogObj.image, 110, 20, 20, 20);
			ctx.drawImage(FrogObj.image, 130, 20, 20, 20);
			ctx.drawImage(FrogObj.image, 150, 20, 20, 20);
			break;
		case 2:
			ctx.drawImage(FrogObj.image, 110, 20, 20, 20);
			ctx.drawImage(FrogObj.image, 130, 20, 20, 20);
			break;
		case 1:
			ctx.drawImage(FrogObj.image, 110, 20, 20, 20);
			break;
	}
}

function setJump(FrogObj, n) {
	switch(n) {
		case 5:
			ctx.drawImage(scoreImage, 136, 0, 23, 30, 200, 10, 24, 30);
			break;
		case 4:
			ctx.drawImage(scoreImage, 102, 0, 23, 30, 200, 10, 24, 30);
			break;
		case 3:
			ctx.drawImage(scoreImage, 71, 0, 23, 30, 200, 10, 24, 30);
			break;
		case 2:
			ctx.drawImage(scoreImage, 36, 0, 23, 30, 200, 10, 24, 30);
			break;
		case 1:
			ctx.drawImage(scoreImage, 0, 0, 23, 30, 200, 10, 24, 30);
			break;
		case 0:
			ctx.drawImage(scoreImage, 306, 0, 23, 30, 200, 10, 24, 30);
			break;
	}
}
