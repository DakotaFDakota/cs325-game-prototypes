class MenuScene extends Phaser.Scene{
    constructor(){
        super("MenuScene");
        let level;
        //start menu text
        let StartGameText;
        let startbutton;

        //game text
        let openingscenetext;
    }

    clicked(clickedtext){
        clickedtext.destroy();
        if(clickedtext === this.startbutton){
                this.clicked(this.StartGameText);
                this.level = 1;
        }
        this.scene.start('NumPlayersScene');


    }

    preload(){
        this.load.image('startbutton', 'assets/Start_Button.png');
        this.load.html('form', 'js/form.html');
    }


    create(){
        //Start Menu
        this.level = 0;
        this.StartGameText = this.add.text(140,210, "THE MALL", {font: "50px Courier"});
        this.startbutton = this.add.image(252,300, 'startbutton');
        this.startbutton.setInteractive();
        this.startbutton.on('pointerdown', () => this.clicked(this.startbutton));

    }


    update(){

    }
}

export default MenuScene;