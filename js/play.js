/**
 * @author udzhou
 */
function gameLoop1() {
	if(frogLevel1.status == 1 && frogLevel1.score < 1000) {
		ctx.clearRect(0, 0, 320, 480);
		ctx.save();
		ctx.drawImage(level1Image, 0, 0, 320, 480);
		for(var n = 0; n < 5; n++) {
			snakeAttack(frogLevel1, snake[n]);
		}
		for(var i = 0; i < 5; i++) {
			snakeAttack(frogLevel1, eagle[i]);
		}
		snakeAttack(frogLevel1, life1);
		snakeAttack(frogLevel1, food);
		ctx.drawImage(frogLevel1.image, frogLevel1.x, frogLevel1.y, frogLevel1.width, frogLevel1.height);
		ctx.drawImage(menuImage, 256, 0, 64, 40);
		ctx.drawImage(panelImage, 0, 10, 100, 30);
		setJump(frogLevel1, frogLevel1.jumpNum);
		ctx.restore();
		for(var n = 0; n < 5; n++) {
			checkColl(frogLevel1, snake[n]);
		}
		for(var i = 0; i < 5; i++) {
			checkColl(frogLevel1, eagle[i]);
		}
		checkColl2(frogLevel1, life1);
		checkColl3(frogLevel1, food);
		caluScore(frogLevel1);
		setLife(frogLevel1, frogLevel1.amount);
	}
}

function playLevel1() {
	snake = new Array()
	for(var m = 0; m < 5; m++) {
		snake[m] = new EnemyObj();
	}
	snake[0].image = snakeImage;
	snake[0].x = 135;
	snake[1].image = snake2Image;
	snake[1].x = 71;
	snake[1].y = 480;
	snake[1].index = 2;
	snake[1].ctime = 600;
	snake[1].gtime = 3;
	snake[2].image = snakeImage;
	snake[2].x = 130;
	snake[2].y = 480;
	snake[2].width = 60;
	snake[2].height = 60;
	snake[2].index = 3;
	snake[2].ctime = 1800;
	snake[2].gtime = 2;
	snake[2].speed = 3;
	snake[3].image = snake2Image;
	snake[3].x = 194;
	snake[3].y = 480;
	snake[3].width = 60;
	snake[3].height = 60;
	snake[3].index = 3;
	snake[3].ctime = 1000;
	snake[3].speed = 2;
	snake[4].image = snakeImage;
	snake[4].x = 135;
	snake[4].y = 480;
	snake[4].ctime = 520;
	snake[4].speed = 2;
	eagle = new Array();
	for(var j = 0; j < 5; j++) {
		eagle[j] = new EnemyObj();
	}
	eagle[0].image = eagleImage;
	eagle[0].speed = 0.5;
	eagle[0].x = 7;
	eagle[0].y = 480;
	eagle[0].ctime = 700;
	eagle[0].gtime = 1;
	eagle[1].image = eagle2Image;
	eagle[1].speed = 3;
	eagle[1].x = 71;
	eagle[1].y = 480;
	eagle[1].index = 4;
	eagle[1].ctime = 2000;
	eagle[1].gtime = 4;
	eagle[2].image = eagleImage;
	eagle[2].speed = 2;
	eagle[2].x = 66;
	eagle[2].y = 480;
	eagle[2].width = 60;
	eagle[2].height = 60;
	eagle[2].index = 3;
	eagle[2].ctime = 900;
	eagle[2].gtime = 1;
	eagle[3].image = eagleImage;
	eagle[3].speed = 2;
	eagle[3].x = 71;
	eagle[3].y = 480;
	eagle[3].width = 50;
	eagle[3].height = 50;
	eagle[3].index = 2;
	eagle[3].ctime = 1000;
	eagle[3].gtime = 2;
	eagle[4].image = eagle2Image;
	eagle[4].speed = 3;
	eagle[4].x = 71;
	eagle[4].y = 480;
	eagle[4].index = 4;
	eagle[4].ctime = 3000;
	eagle[4].gtime = 3;
	life1 = new PrizeObj();
	life1.image = frogImage;
	life1.ctime = 3200;
	life1.speed = 1;
	food = new PrizeObj();
	food.image = foodImage;
	food.gtime = 4;
	food.ctime = 2000;
	setInterval(gameLoop1, 10);
	document.addEventListener("keydown", function(e) {
		keysDown(e.keyCode);
	}, false);
}

function playLevel2() {
	Lv2snake = new Array()
	for(var m = 0; m < 5; m++) {
		Lv2snake[m] = new EnemyObj();
	}
	Lv2snake[0].image = snakeImage;
	Lv2snake[0].x = 135;
	Lv2snake[0].speed = 2;
	Lv2snake[1].image = snake2Image;
	Lv2snake[1].x = 71;
	Lv2snake[1].y = 480;
	Lv2snake[1].index = 2;
	Lv2snake[1].ctime = 600;
	Lv2snake[1].gtime = 3;
	Lv2snake[2].image = snakeImage;
	Lv2snake[2].x = 130;
	Lv2snake[2].y = 480;
	Lv2snake[2].width = 60;
	Lv2snake[2].height = 60;
	Lv2snake[2].index = 3;
	Lv2snake[2].ctime = 1500;
	Lv2snake[2].gtime = 2;
	Lv2snake[2].speed = 3;
	Lv2snake[3].image = snake2Image;
	Lv2snake[3].x = 194;
	Lv2snake[3].y = 480;
	Lv2snake[3].width = 60;
	Lv2snake[3].height = 60;
	Lv2snake[3].index = 3;
	Lv2snake[3].ctime = 900;
	Lv2snake[3].speed = 2;
	Lv2snake[4].image = snakeImage;
	Lv2snake[4].x = 135;
	Lv2snake[4].y = 480;
	Lv2snake[4].ctime = 520;
	Lv2snake[4].speed = 2;
	Lv2eagle = new Array();
	for(var j = 0; j < 5; j++) {
		Lv2eagle[j] = new EnemyObj();
	}
	Lv2eagle[0].image = eagleImage;
	Lv2eagle[0].speed = 1;
	Lv2eagle[0].x = 7;
	Lv2eagle[0].y = 480;
	Lv2eagle[0].ctime = 700;
	Lv2eagle[0].gtime = 1;
	Lv2eagle[1].image = eagle2Image;
	Lv2eagle[1].speed = 3;
	Lv2eagle[1].x = 71;
	Lv2eagle[1].y = 480;
	Lv2eagle[1].index = 4;
	Lv2eagle[1].ctime = 1800;
	Lv2eagle[1].gtime = 4;
	Lv2eagle[2].image = eagleImage;
	Lv2eagle[2].speed = 2;
	Lv2eagle[2].x = 66;
	Lv2eagle[2].y = 480;
	Lv2eagle[2].width = 60;
	Lv2eagle[2].height = 60;
	Lv2eagle[2].index = 3;
	Lv2eagle[2].ctime = 800;
	Lv2eagle[2].gtime = 1;
	Lv2eagle[3].image = eagleImage;
	Lv2eagle[3].speed = 2;
	Lv2eagle[3].x = 71;
	Lv2eagle[3].y = 480;
	Lv2eagle[3].width = 50;
	Lv2eagle[3].height = 50;
	Lv2eagle[3].index = 2;
	Lv2eagle[3].ctime = 1000;
	Lv2eagle[3].gtime = 2;
	Lv2eagle[4].image = eagle2Image;
	Lv2eagle[4].speed = 4;
	Lv2eagle[4].x = 71;
	Lv2eagle[4].y = 480;
	Lv2eagle[4].index = 4;
	Lv2eagle[4].ctime = 3000;
	Lv2eagle[4].gtime = 3;
	Lv2life1 = new PrizeObj();
	Lv2life1.image = frog2Image;
	Lv2life1.ctime = 3200;
	Lv2life1.speed = 1;
	Lv2food = new PrizeObj();
	Lv2food.image = foodImage;
	Lv2food.gtime = 4;
	Lv2food.ctime = 2000;
	setInterval(gameLoop2, 10);
	document.addEventListener("keydown", function(e) {
		keysDown2(e.keyCode);
	}, false);
}

function gameLoop2() {
	if(frogLevel2.status == 1 && frogLevel2.score < 1000) {
		ctx.clearRect(0, 0, 320, 480);
		ctx.save();
		ctx.drawImage(level2Image, 0, 0, 320, 480);
		for(var n = 0; n < 5; n++) {
			snakeAttack(frogLevel2, Lv2snake[n]);
		}
		for(var i = 0; i < 5; i++) {
			snakeAttack(frogLevel2, Lv2eagle[i]);
		}
		snakeAttack(frogLevel2, Lv2life1);
		snakeAttack(frogLevel2, Lv2food);
		if(frogLevel2.score >= 80 && frogLevel2.score < 90) {
			Lv2snake[0].y = 300;
		}
		if(frogLevel2.score >= 100 && frogLevel2.score < 110) {
			Lv2snake[0].y = 300;
		}
		if(frogLevel2.score >= 200 && frogLevel2.score < 210) {
			Lv2snake[1].y = 260;
		}
		if(frogLevel2.score >= 300 && frogLevel2.score < 315) {
			Lv2eagle[0].y = 300;
		}
		if(frogLevel2.score >= 400 && frogLevel2.score < 415) {
			Lv2eagle[1].y = 260;
		}
		if(frogLevel2.score >= 500 && frogLevel2.score < 520) {
			Lv2snake[3].y = 240;
		}
		if(frogLevel2.score >= 600 && frogLevel2.score < 620) {
			Lv2eagle[4].y = 220;
		}
		if(frogLevel2.score >= 700 && frogLevel2.score < 720) {
			Lv2eagle[4].y = 220;
		}
		ctx.drawImage(frogLevel2.image, frogLevel2.x, frogLevel2.y, frogLevel2.width, frogLevel2.height);
		ctx.drawImage(menuImage, 256, 0, 64, 40);
		ctx.drawImage(panelImage, 0, 10, 100, 30);
		setJump(frogLevel2, frogLevel2.jumpNum);
		ctx.restore();
		for(var n = 0; n < 5; n++) {
			checkColl(frogLevel2, Lv2snake[n]);
		}
		for(var i = 0; i < 5; i++) {
			checkColl(frogLevel2, Lv2eagle[i]);
		}
		checkColl2(frogLevel2, Lv2life1);
		checkColl3(frogLevel2, Lv2food);
		caluScore(frogLevel2);
		setLife(frogLevel2, frogLevel2.amount);
	}
}

function keysDown(keyCode) {
	switch(keyCode) {
		case 13:
			//enter
			break;
		case 32:
			//space
			if(frogLevel1.jumpNum > 0) {
				frogLevel1.width = 100;
				frogLevel1.height = 100;
				if(frogLevel1.y > 60) {
					frogLevel1.y -= 120
				};
				setTimeout(setSize, 30);
				frogLevel1.jumpNum -= 1;				
			};
			break;
		case 37:
			//left
			if(frogLevel1.x > 2) {
				frogLevel1.x -= 64
			};
			break;
		case 38:
			//up
			if(frogLevel1.y > 60) {
				frogLevel1.y -= 60
			};
			break;
		case 39:
			//right
			if(frogLevel1.x < 258) {
				frogLevel1.x += 64
			};
			break;
		case 40:
			//down
			if(frogLevel1.y < 420) {
				frogLevel1.y += 60
			};
			break;
	}
}

function setSize() {
	frogLevel1.width = 60;
	frogLevel1.height = 60;
}

function setSize2() {
	frogLevel2.width = 60;
	frogLevel2.height = 60;
}

function snakeAttack(FrogObj, EnemyObj) {
	EnemyObj.y += EnemyObj.speed;
	ctx.drawImage(EnemyObj.image, EnemyObj.x, EnemyObj.y, EnemyObj.width, EnemyObj.height);
	if(EnemyObj.y >= EnemyObj.ctime) {
		switch(EnemyObj.gtime) {
			case 0:
				createEnemy(EnemyObj, 0);
				EnemyObj.gtime += 1;
				break;
			case 1:
				createEnemy(EnemyObj, 1);
				EnemyObj.gtime += 1;
				break;
			case 2:
				createEnemy(EnemyObj, 2);
				EnemyObj.gtime += 1;
				break;
			case 3:
				createEnemy(EnemyObj, 3);
				EnemyObj.gtime += 1;
				break;
			case 4:
				createEnemy(EnemyObj, 4);
				EnemyObj.gtime = 0;
				break;
		}
		switch(EnemyObj.index) {
			case 1:
				FrogObj.score += 1;
				break;
			case 2:
				FrogObj.score += 2;
				break;
			case 3:
				FrogObj.score += 4;
				break;
			case 4:
				FrogObj.score += 5;
				break;
		}

	}
}

function createEnemy(EnemyObj, gtime) {
	switch(gtime) {
		case 0:
			EnemyObj.x = 288 - EnemyObj.width / 2;
			EnemyObj.y = 0;
			break;
		case 1:
			EnemyObj.x = 32 - EnemyObj.width / 2;
			EnemyObj.y = 0
			break;
		case 2:
			EnemyObj.x = 96 - EnemyObj.width / 2;
			EnemyObj.y = 0;
			break;
		case 3:
			EnemyObj.x = 224 - EnemyObj.width / 2;
			EnemyObj.y = 0;
			break;
		case 4:
			EnemyObj.x = 160 - EnemyObj.width / 2;
			EnemyObj.y = 0;
			break;
	}
}

function keysDown2(keyCode) {
	switch(keyCode) {
		case 13:
			//enter
			break;
		case 32:
			//space
			if(frogLevel2.jumpNum > 0) {
				frogLevel2.width = 100;
				frogLevel2.height = 100;
				if(frogLevel2.y > 60) {
					frogLevel2.y -= 120
				};
				setTimeout(setSize2, 30);
				frogLevel2.jumpNum -= 1;				
			};
			break;
		case 37:
			//left
			if(frogLevel2.x > 2) {
				frogLevel2.x -= 64
			};
			break;
		case 38:
			//up
			if(frogLevel2.y > 60) {
				frogLevel2.y -= 60
			};
			break;
		case 39:
			//right
			if(frogLevel2.x < 258) {
				frogLevel2.x += 64
			};
			break;
		case 40:
			//down
			if(frogLevel2.y < 420) {
				frogLevel2.y += 60
			};
			break;
	}
}
