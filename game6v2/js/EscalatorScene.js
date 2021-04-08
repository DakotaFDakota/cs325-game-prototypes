export default class EscalatorScene extends Phaser.Scene{
    constructor(){
        super("EscalatorScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
        let playernames;
        let numplayers;
        let player1;
        let player2;
        let player3;
        let player4;
        let player1health;
        let player2health;
        let player3health;
        let player4health;
    }

    preload(){
        this.load.image('snake', 'assets/cobra.png');
    }

    init(data){
        this.crowbar = data.cb;
        this.numplayers = data.num;
        this.player1 = data.playname1;
        this.player2 = data.playname2;
        this.player3 = data.playname3;
        this.player4 = data.playname4;
        this.player1health = data.player1h;
        this.player2health = data.player2h;
        this.player3health = data.player3h;
        this.player4health = data.player4h;
    }

    clicked(clickedtext){
        clickedtext.destroy();

    }

    create(){
        let snakeimage = this.add.image(400, 400, 'snake');

        let playerinj = Phaser.Math.Between(1,this.numplayers);
        this.titletext = this.add.text(50,150,"You encounter a family of cobras", {font: "20px Courier"});

        if(playerinj > 0 && playerinj < 2){
            this.titletext2 = this.add.text(50, 170, "living in the escalator, " + this.player1, {font: "20px Courier"})
            this.player1health = 0;
        }
        if(playerinj < 3 && playerinj > 1){
            this.titletext2 = this.add.text(50, 170, "living in the escalator, " + this.player2, {font: "20px Courier"})
            this.player2health = 0;
        }
        if(playerinj < 4 && playerinj > 2){
            this.titletext2 = this.add.text(50, 170, "living in the escalator, " + this.player3, {font: "20px Courier"})
            this.player3health = 0;
        }
        if(playerinj < 5 && playerinj > 3){
            this.titletext2 = this.add.text(50, 170, "living in the escalator, " + this.player4, {font: "20px Courier"})
            this.player4health = 0;
        }
       //this.titletext2 = this.add.text(50, 170, "living in the escalator, player " + playerinj, {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "was bitten and dies.", {font: "20px Courier"})
        this.option1 = this.add.text(50, 240, "Continue", {font: "20px Courier"});
        this.option1.setInteractive();
        this.option2 = this.add.text(50, 270, "Morn his death and continue", {font: "20px Courier"});
        this.option2.setInteractive();

        this.playeroptions = this.add.text(50, 420, "" + this.player1 + "'s Health: " + this.player1health);
        this.playeroptions = this.add.text(50, 440, "" + this.player2 + "'s Health: " + this.player2health);
        if(this.numplayers == 3){
            this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
        }
        if(this.numplayers == 4){
            this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player3health);
            this.playeroptions = this.add.text(50, 480, "" + this.player4 + "'s Health: " + this.player4health);
        }

        this.option1.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
        this.option2.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
    }


    update(){}
}