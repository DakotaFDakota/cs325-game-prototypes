export default class BarrelScene extends Phaser.Scene{
    constructor(){
        super("BarrelScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
        let crowbar;
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

    preload(){}

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
        //this.crowbar = 1;
        if(this.crowbar === 1){
            this.titletext = this.add.text(50,150,"You open the barrels to find", {font: "20px Courier"});
            this.titletext2 = this.add.text(50, 170, "they are filled with pretzels that", {font: "20px Courier"})
            this.titletext2 = this.add.text(50, 190, "appear to be freshly baked", {font: "20px Courier"})
            this.option1 = this.add.text(50, 240, "Eat the pretzel", {font: "20px Courier"});
            this.option1.setInteractive();
            this.option2 = this.add.text(50, 270, "Leave", {font: "20px Courier"});
            this.option2.setInteractive();

            this.playeroptions = this.add.text(50, 420, "" + this.player1 + "'s Health: " + this.player1health);
            this.playeroptions = this.add.text(50, 440, "" + this.player2 + "'s Health: " + this.player2health);
            if(this.numplayers == 3){
                this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player2health);
            }
            if(this.numplayers == 4){
                this.playeroptions = this.add.text(50, 460, "" + this.player3 + "'s Health: " + this.player2health);
                this.playeroptions = this.add.text(50, 480, "" + this.player4 + "'s Health: " + this.player2health);
            }

            this.option1.on('pointerdown', () => this.scene.start("EatPretzelScene", {crowbar: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
            this.option2.on('pointerdown', () => this.scene.start("StairsScene", {crowbar: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
        }
        else {
            this.titletext = this.add.text(50,150,"You are unable to open the barrels", {font: "20px Courier"});
            this.titletext2 = this.add.text(50, 170, "with your bear hands.", {font: "20px Courier"})
            this.option1 = this.add.text(50, 220, "Try again", {font: "20px Courier"});
            this.option1.setInteractive();
            this.option2 = this.add.text(50, 250, "Leave", {font: "20px Courier"});
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

            this.option1.on('pointerdown', () => this.scene.start("BarrelScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
            this.option2.on('pointerdown', () => this.scene.start("StairsScene", {cb: this.crowbar,   num: this.numplayers, playname1: this.player1, playname2: this.player2, playname3: this.player3, playname4: this.player4, player1h: this.player1health,player2h: this.player2health, player3h: this.player3health, player4h: this.player4health}));
        }
    }


    update(){}
}