export default class FeedGroupScene extends Phaser.Scene{
    constructor(){
        super("FeedGroupScene");
        let titletext;
        let titletext2;
        let option1;
        let option2;
    }

    preload(){
        this.load.audio('sedona', 'assets/audio/SedonaWinSong.mp3');
    }

    clicked(clickedtext){
        clickedtext.destroy();

    }

    create(){
        this.titletext = this.add.text(50,150,"The King agrees to feed your", {font: "20px Courier"});
        this.titletext2 = this.add.text(50, 170, "group and let you stay.", {font: "20px Courier"})
        this.option1 = this.add.text(90, 220, "YOU WIN", {font: "50px Courier", fill: "#006400"});
        this.option1 = this.add.text(90, 260, "TRY AGAIN?", {font: "50px Courier", fill: "#006400"});
        this.option1.setInteractive();
        
        let sedona = this.sound.add('sedona', {volume: 0.1});
        sedona.play();

        this.option1.on('pointerdown', () => this.scene.start("MainScene", {cb: 0}));
    }


    update(){}
}