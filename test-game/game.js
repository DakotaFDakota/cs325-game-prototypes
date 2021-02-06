var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
        gravity: {y: 300},
        dubug: false
      }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var player;
var stars;
var bombs;
var platforms;
//var cursors;
var arrowKey;
var score = 0;
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);


function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('ground', 'assets/platform.png');
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assest/bomb.png');
  this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 48});
}

function create() {

this.add.image(400, 300, 'sky')

platforms = this.physics.add.staticGroup();

platforms.create(400,568, 'ground').setScale(2).refreshBody();

platforms.create(600, 400, 'ground');
platforms.create(50, 250, 'ground');
platforms.create(750, 220, 'ground');

player = this.physics.add.sprite(100,450, 'dude');

player.setBounce(0.2);
player.setCollideWorldBounds(true);

this.anims.create({
  key: 'left',
  frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
  frameRate: 10,
  repeat: -1
});

this.anims.create({
  key: 'right',
  frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
  frameRate: 10,
  repeat: -1
});

//cursors = this.input.keyboard.createCursorKeys();
//this.arrowKey = this.input.keyboard.createCursorKeys();
this.keyLeft = this.input.keyboard.addKey(Phaser.KeyCode.A);
this.keyRight = this.input.keyboard.addKey(Phaser.KeyCode.D);
this.keyUp = this.input.keyboard.addKey(Phaser.KeyCode.W);


stars = this.physics.add.group({
  key: 'star',
  repeat: 11,
  setXY: { x: 12, y: 0, stepX: 70 }
});

stars.children.iterate(function (child) {

  child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});


bombs = this.physics.add.group();

this.physics.add.collider(player, platforms);
this.physics.add.collider(stars, platforms);
this.physics.add.collider(bombs, platforms);

this.physics.add.overlap(player, stars, collectStar, null, this);
this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update() {
  if (gameOver){
    return;
  }

  //player.body.velocity.x = 0;

  //if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
  //  player.setVelocityX(-160);

    //player.anims.play('left', true);
  //}
  //else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
  //  player.setVelocityX(160);

    //player.anims.play('right', true)
  //}
  //else {
    //player.setVelocityX(0);

    //player.anims.play('turn');
  //}

  //if (cursors.up.isDown && player.body.touching.down) {
  //  player.body.velocity.y = -330;
  //}


  if (this.arrowKey.KeyLeft.isDown)
  {
      player.setVelocityX(-160);
      console.log('left key pressed');

      player.anims.play('left', true);
  }
  else if (this.arrowKey.keyRight.isDown)
  {
      player.setVelocityX(160);
      console.log('right key pressed');

      player.anims.play('right', true);
  }
  else
  {
      player.setVelocityX(0);

      player.anims.play('turn');
  }

  if (this.cursors.KeyUp.isDown && player.body.touching.down)
  {
      player.setVelocityY(-330);
      console.log('up key pressed');
  }






}
