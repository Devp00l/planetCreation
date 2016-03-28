var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update }),
  player, background, cursors, elements, scoreText, realText, score = 0,
  dusty = superElements();

//Zuweisung der Bilder
dusty.actinide.path = 'assets/dust/24/foggy.png';
dusty.alkaliMetal.path = 'assets/dust/24/blue.png';
dusty.alkalineEarthMetal.path = 'assets/dust/24/tuerkis.png';
dusty.diatomicNonmetal.path = 'assets/dust/24/white.png';
dusty.lanthanide.path = 'assets/dust/24/iron.png';
dusty.metalloid.path = 'assets/dust/24/yellow.png';
dusty.nobleGas.path = 'assets/dust/24/green.png';
dusty.polyatomicNonmetal.path = 'assets/dust/24/violett.png';
dusty.postTransitionMetal.path = 'assets/dust/24/rocky.png';
dusty.transitionMetal.path = 'assets/dust/24/red.png';

function preload() {
  game.load.image('sky', 'assets/dusty_bg_dark.png');
  game.load.image('bare', 'assets/planet/24/bare.png');
  game.load.image('dude', 'assets/planet/24/full_white.png');

  for(var i in dusty){
    game.load.image(dusty[i].name, dusty[i].path);
  }
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  backgrounds = game.add.group();
  backgrounds.create(0,0,'sky');
  backgrounds.create(game.width,0,'sky');

  backgrounds.forEachExists(function(i){
    game.physics.arcade.enable(i);
    i.body.velocity.x = -70;
    i.anchor.setTo(0.5,0);
  }, this);


  player = game.add.sprite(game.world.centerX, game.world.centerY, 'dude');

  //  We need to enable physics on the player
  //player.anchor.set(0.5);
  game.physics.arcade.enable(player);
  game.realastic = 1;

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.drag.set(250);
  player.anchor.set(0.5);
  player.scale.current = 1;
  player.elements = {};
  player.states = {};

  //  Our two animations, walking left and right.
  //player.animations.add('left', [0, 1, 2, 3], 10, true);
  //player.animations.add('right', [5, 6, 7, 8], 10, true);

  //  Our controls.
  cursors = game.input.keyboard.createCursorKeys();
  game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
  game.input.keyboard.addKeyCapture([ Phaser.Keyboard.T ]);
  game.input.keyboard.addKeyCapture([ Phaser.Keyboard.G ]);
  
  elements = game.add.group();
  elements.enableBody = true;
  for(i=0; i<20; i++){
    createElement();
  }

  game.physics.arcade.enable(elements);

  scoreText = game.add.text(12, 12, 'score: 0', { fontSize: '12px', fill: '#000' });
  realText = game.add.text(game.width - 150, game.height - 24, 'Real: ' + game.realastic, { fontSize: '12px', fill: '#000' });
}

function createElement(){
  if(elements.total >= 60){
    return;
  }
  for(var i in dusty){
    if(dusty[i].percent >= 1 - Math.pow(Math.random(), game.realastic)){
      var element = elements.create(game.width*2, game.height * Math.random(), dusty[i].name),
        size = Math.random();
      if (player.scale.current > 0){
        size = (1 + player.scale.current/10) * size;
      }
      element.body.velocity.x = Math.random() * -600;
      element.body.velocity.y = Math.random() * element.body.velocity.x * (parseInt(Math.random() * 100, 10) % 2 ? -1 : 1);
      element.scale.x *= size;
      element.scale.y *= size;
    }
  }
}

function update() {
  //  Player collides with Elements
  game.physics.arcade.overlap(player, elements, collide, null, this);
  
    //  Reset the players velocity (movement)
  //player.body.velocity.x = 0;

  if (cursors.up.isDown){
    player.body.velocity.y -= 20;
  } else if(cursors.down.isDown){
    player.body.velocity.y += 20;
  }

  if (cursors.left.isDown){
    //  Move to the left
    player.body.velocity.x -= 20;
    //player.animations.play('left');
  }else if (cursors.right.isDown){
    //  Move to the right
    player.body.velocity.x += 20;
    //player.animations.play('right');
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
  }else if (game.input.keyboard.downDuration(Phaser.Keyboard.T, 10)){
    if (game.realastic < 20) game.realastic++;
    realText.text = "Real: " + game.realastic;
  }else if (game.input.keyboard.downDuration(Phaser.Keyboard.G, 10)){
    if (game.realastic > 0) game.realastic--;
    realText.text = "Real: " + game.realastic;
  }

  screenWrap(player);
  elements.forEachExists(screenWrapDust, this);
  backgrounds.forEachExists(screenWrapBackground, this);
}

function collide (player, element) {
  var size = element.scale.x / 4,
      dust = dusty[element.key],
      klebt = dust.mass/200 * element.scale.x * player.scale.current;

  if (element.scale.x > 1) size *= -0.5;
  if (player.scale.current > 0) player.scale.current += size;
  if (player.scale.current < 0){
    scoreText.text = "\nGame Over!\n\n" + currentStates();
  }else{
    if (element.scale.x < 1){
      score += element.scale.x * player.scale.current * 2;
      if (player.elements[dust.name]){
        player.elements[dust.name] += klebt;
      }else{
        player.elements[dust.name] = klebt;
      }
    }
    scoreText.text = currentStates();
    element.kill();
    createElement();
    elements.forEachExists(rescale, this, size);
  }
}

function currentStates(){
    var s = 'Score: ' + score + " \tMass: " + player.scale.current + "\n";
    var sum = 0, state, element, i=0;
    for(state in player.states){
      sum += player.states[state];
    }
    sum = 0;
    for(element in player.elements){
      sum += player.elements[element];
    }
    for(element in player.elements){
      s += element + ": " + parseInt(player.elements[element]/sum*100) + " %\t" ;
      i++;
      if(i%5 === 0){
        s +="\n";
      }
    }
    return s;
}

function rescale(dust, size){
  dust.scale.x -= size;
  dust.scale.y -= size;
  if(dust.scale.x <= 0){
    dust.kill();
    createElement();
  }
}

function screenWrapBackground (sprite) {
  if(sprite.x < -game.width/2){
      sprite.x = backgrounds.filter(function(c){return c.x > sprite.x;}).list[0].x + sprite.width;
  }
}

function screenWrap (sprite) {
  var margin = 25;
  if(sprite.x < margin){
      setPos(sprite, margin, sprite.y, 1);
  } else if (sprite.x > game.width - margin){
      setPos(sprite, game.width - margin, sprite.y, -1);
  }

  if (sprite.y < margin){
      setPos(sprite, sprite.x, margin, null, 1);
  } else if (sprite.y > game.height - margin){
      setPos(sprite, sprite.x, game.height - margin, null, -1);
  }
}

function setPos(player, x, y, xspeed, yspeed){
  player.x = x;
  player.y = y;
  if (xspeed){
    var xs = player.body.velocity.x;
    if (xspeed < 0 && xs > 0){
      player.body.velocity.x = -1 * xs;
    } else if ( xspeed > 0 && xs < 0){
      player.body.velocity.x = -1 * xs;
    }
  }else if(yspeed){
    var ys = player.body.velocity.y;
    if (yspeed < 0 && ys > 0){
      player.body.velocity.y = -1 * ys;
    } else if ( yspeed > 0 && ys < 0){
      player.body.velocity.y = -1 * ys;
    }
  }
}

function screenWrapDust (sprite) {
  if (sprite.x < -game.width){
      sprite.x = game.width*2;
  } else if (sprite.x > game.width*2) {
      sprite.x = -game.width;
  }

  if(sprite.x < -game.width || sprite.x > game.width*2){
    if(!sprite.round){
      sprite.round = 1;
    }else if(sprite.round > 10){
      sprite.kill();
      createElement();
    }else{
      sprite.round++;
    }
  }

  if (sprite.y < -game.height){
      sprite.y = game.height*2;
  } else if (sprite.y > game.height*2) {
      sprite.y = -game.height;
  }
}
