enchant();

window.onload = function(){



	var game = new Game(1136,640);
	game.fps = 24;
	game.preload('img/bg1.png','img/bg2.png','img/end.png','img/chara1.png','img/home2.png');

	var sceneX = 1136;
	var sceneY = 640;

	game.onload = function(){

		var createTitleScene = function(){
			var scene = new Scene();
			var label = new Label('title');
			scene.addChild(label);

			scene.addEventListener(Event.TOUCH_START, function(e){
				game.replaceScene(createGameScene());
			});

			return scene; 

			
		};

		var createGameScene = function(){
			var scene = new Scene();
			var SCROLL_SPEED = 10;

			var label = new Label('game');

			scene.addChild(label);

			var bg1 = new Sprite(1136,640);
			bg1.image = game.assets['img/bg1.png'];
			bg1.moveTo(0,0);

			scene.addChild(bg1);

			var bg2 = new Sprite(1136,640);
			bg2.image = game.assets['img/bg2.png'];
			bg2.moveTo(1136,0);

			scene.addChild(bg2);

			scene.addEventListener(Event.ENTER_FRAME, function(){
				bg1.x -= SCROLL_SPEED;
				bg2.x -= SCROLL_SPEED;
				if(bg1.x <= -1136){
					bg1.x = 1136;
				}
				if(bg2.x <= -1136){
					bg2.x = 1136;
				}


			});

			var santa = new Sprite(361,163);
			santa.image = game.assets['img/chara1.png'];
			santa.moveTo(100,50);
			santa.scaleX = -1;
			scene.addChild(santa);

			var home = new Sprite(320,320);
			home.image  = game.assets['img/home2.png'];
			home.moveTo( scene.width  , scene.height - [home.height/1.5 + 20] );
			home.scaleX = 0.5;
			home.scaleY = 0.5;
			scene.addChild(home);

			scene.addEventListener(Event.ENTER_FRAME, function(){
				home.x -= SCROLL_SPEED - 2;

				if(home.x <= -[home.width]){
				home.x = scene.width + 500;
				}

			});



			scene.addEventListener(Event.TOUCH_START, function(e){
				game.pushScene(createGameoverScene());

			});

			return scene;

		};

		var createGameoverScene = function(){
			var scene = new Scene();
			var label = new Label('gameover');
			label.moveTo(20,20);

			scene.addChild(label);

			var end = new Sprite(189,97);
			end.image = game.assets['img/end.png'];
			end.moveTo([scene.width/ 2] - [end.width/2] , [scene.height/2] - [end.height / 2] );
			end.scaleX = 3;
			end.sceleY = 3;

			scene.addChild(end);

			scene.addEventListener(Event.TOUCH_START, function(e){
				game.popScene();
				game.replaceScene(createTitleScene());

			});

			return scene;
		};
			game.replaceScene(createTitleScene());

	}
	

	game.start();
};