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
var cursors;
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

platforms.create(600, 400, 'ground')


}
function update() {}
