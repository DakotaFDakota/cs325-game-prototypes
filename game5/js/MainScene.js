export default class MainScene extends Phaser.Scene{
    constructor(){
        super("MainScene");
        let arrowimage;
        let rotating;
    }
    

    preload(){
        //load images
        this.load.image('background', 'assets/background.png');
        this.load.image('cow', 'assets/cow.png');
        this.load.image('elephant', 'assets/elephant.png');
        this.load.image('monkey', 'assets/monkey.png');
        this.load.image('pig', 'assets/pig.png');
        this.load.image('rooster', 'assets/rooster.png');
        this.load.image('button', 'assets/button.png');
        this.load.image('arrow', 'assets/arrow.png');

        //load audio
        this.load.audio('cowaudio', 'assets/audio/cow.mp3');
        this.load.audio('elephantaudio', 'assets/audio/elephant.mp3');
        this.load.audio('monkeyaudio', 'assets/audio/monkey.mp3');
        this.load.audio('roosteraudio', 'assets/audio/rooster.mp3');
        this.load.audio('pigaudio', 'assets/audio/pig.mp3');
      }

    clickedpig(image){ 
        this.pigsound.play();
    }

    clickedcow(image){ 
        this.cowsound.play();
    }

    clickedelephant(image){ 
        this.elephantsound.play();
    }

    clickedmonkey(image){ 
        this.monkeysound.play();
    }

    clickedrooster(image){ 
        this.roostersound.play();
    }

    buttonclick(image){
        //this.rotating.play();
        //Phaser.Actions.RotateAroundDistance(this.arrowimage, {x:100, y: 100}, 0.02, 5);
        this.arrowimage.angle += Math.random() * Math.floor(500);
        console.log('rotating');
    }

    create(){
        //creates images
        this.add.image(0,0, 'background').setOrigin(0,0);
        let pigimage = this.add.image(95, 245, 'pig');
        let cowimage = this.add.image(345, 400, 'cow');
        let elephantimage = this.add.image(135,400, 'elephant');
        let monkeyimage = this.add.image(425,240, 'monkey');
        let roosterimage = this.add.image(256, 100, 'rooster');
        let buttonimage = this.add.image(465, 53, 'button');
        this.arrowimage = this.add.sprite(270,270, 'arrow');

        //sets images interactable
        pigimage.setInteractive();
        cowimage.setInteractive();
        elephantimage.setInteractive();
        monkeyimage.setInteractive();
        roosterimage.setInteractive();
        buttonimage.setInteractive();

        //listens for mouse click to interact with image
        pigimage.on('pointerdown', () => this.clickedpig(pigimage));
        cowimage.on('pointerdown', () => this.clickedcow(cowimage));
        elephantimage.on('pointerdown', () => this.clickedelephant(elephantimage));
        monkeyimage.on('pointerdown', () => this.clickedmonkey(monkeyimage));
        roosterimage.on('pointerdown', () => this.clickedrooster(roosterimage));
        buttonimage.on('pointerdown', () => this.buttonclick(buttonimage));

        //adds sounds for animals
        this.pigsound = this.sound.add('pigaudio');
        this.cowsound = this.sound.add('cowaudio');
        this.elephantsound = this.sound.add('elephantaudio');
        this.roostersound = this.sound.add('roosteraudio');
        this.monkeysound = this.sound.add('monkeyaudio');

        //this.arrowimage.anchor.setTo(400, 30)

        //Phaser.Physics.Matter.Matter.Body.setAngularVelocity(this.arrowimage, 10);
        

        this.rotating = this.tweens.add({
            targets: this.arrowimage,
            //rotation: rad,
            duration: 200
        });
        
    }
   

    update(){
        
    }
}
