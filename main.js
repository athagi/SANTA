enchant();

window.onload = function(){



	var game = new Game(1136,640);
	game.fps = 24;
	game.preload('img/bg1.png','img/end.png','img/chara1.png');

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
			var label = new Label('game');

			scene.addChild(label);

			var bg1 = new Sprite(1136,640);
			bg1.image = game.assets['img/bg1.png'];
			bg1.moveTo(0,0);

			scene.addChild(bg1);

			var santa = new Sprite(361,163);
			santa.image = game.assets['img/chara1.png'];
			santa.moveTo(100,50);
			santa.scaleX = -1;

			scene.addChild(santa);


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