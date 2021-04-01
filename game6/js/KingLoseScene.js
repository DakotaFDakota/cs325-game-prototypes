export default class KingLoseScene extends Phaser.Scene{
    constructor(){
        super("KingLoseScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
        let crowbar;
    }

    init(data){
        this.crowbar = data.cb;
    }

    preload(){
        this.load.audio('sedona', 'assets/audio/SedonaWinSong.mp3');
    }

    clicked(clickedtext){
        clickedtext.destroy();

    }

    create(){
        this.titletext = this.add.text(50,50,"The King submits his crown and cape", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 70, "to you and your team.  You win and", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 90, "are the new King of the Dana Pretzel", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 110, "Tribe. You hire new workers and make", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 130, "the mall a fulfilment center for", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 150, "the popular online retailer,", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 170, "Congo.com. You and your team recieve", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 190, "a large settlement from", {font: "20px Courier"})
        this.titletext2 = this.add.text(50, 210, "Congo.com's owner, Beff Jezos.", {font: "20px Courier"})

        this.option1 = this.add.text(90, 260, "YOU WIN", {font: "50px Courier", fill: "#006400"});
        this.option1 = this.add.text(90, 300, "TRY AGAIN?", {font: "50px Courier", fill: "#006400"});
        this.option1.setInteractive();

        let sedona = this.sound.add('sedona', {volume: 0.1});
        sedona.play();


        this.option1.on('pointerdown', () => this.scene.start("MainScene", {cb: this.crowbar}));

    }


    update(){}
}