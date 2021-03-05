export default class MainScene extends Phaser.Scene{
    constructor(){
        super("MainScene");
        this.count = 20;
        this.fillcolor = '#FFFFFF';
        var counter;
        var timer;
        var carts;
        var cartscollect;
        this.numcarts = Math.floor(Math.random() * Math.floor(30));
    }
    

    preload(){
        this.load.image('cart', 'assets/Shopping_Cart.png');
        this.load.image('lotmap', 'assets/lotmap.png');
      }

    clicked(text){ 
        this.cartscollect++;
        text.destroy();

    }

    create(){
        this.cartscollect = 0;

        this.add.image(0,0,'lotmap').setOrigin(0,0);
        this.carts = this.add.text(10,475, 'Carts Collected: 0');

        for(let i = 0; i < this.numcarts; i++){
            let fakecart = this.add.image(Math.random() * Math.floor(400),Math.random() * Math.floor(400), 'cart');
            fakecart.setScale(1.5);
            fakecart.setInteractive();
            fakecart.on('pointerdown', () => this.clicked(fakecart));
        }



        this.counter = this.add.text(445, 20, this.count, {fill: this.fillcolor});
        var timer = this.time.addEvent({
            delay: 1000,
            callback: other => {this.timers()},
            callbackScope: this,
            loop: true
        });
    }

    timers(){
        this.counter.setText(this.count);
        this.count--;
        if(this.count === 0 && this.cartscollect != this.numcarts){
            this.add.text(150,150,"YOU LOSE", {font: '50px Times New Roman', fill: '#FF0000'});
            }
    }
    

    update(){
        console.log(this.numcarts);
        this.carts.setText('Carts Collected: ' + this.cartscollect + ' / ' + this.numcarts);
        if (this.count <= 5) {
            this.fillcolor = '#FF0000';
        }
        else {
            this.fillcolor = '#FFFFFF'
        }     
        if(this.cartscollect === this.numcarts && this.count > 0){
            this.add.text(150,150,"YOU WIN", {font: '50px Times New Roman', fill: '#FFFFFF'});
        }
    }

    

}
