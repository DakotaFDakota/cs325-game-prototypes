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
        //this.timer = function() {this.counter--};
    }
    

    preload(){
        this.load.image('cart', '/assets/Shopping_Cart.png');
        this.load.image('street', 'assets/Straight 01.jpg');
        this.load.tilemapTiledJSON('cartmap', 'assets/cartmap.json');
        this.load.image('lotmap', 'assets/lotmap.png');
      }

    clicked(text){ 
        this.cartscollect++;
        text.destroy();

    }

    create(){
        //const cartmap = this.make.tilemap({key: 'cartmap'});
        //const tileset = cartmap.addTilesetImage('tileset', 'street', 32, 32, 0, 0);
        //const layer1 = cartmap.createStaticLayer('Tile Layer 1', tileset, 0, 0);
        //this.matter.world.convertTilemapLayer(layer1);
        this.cartscollect = 0;

        this.add.image(0,0,'lotmap').setOrigin(0,0);
        this.carts = this.add.text(10,475, 'Carts Collected: 0');

        //this.cart = new cart({scene: this, x: 80, y: 80, texture: 'cart', frame: 'cart'});

        for(let i = 0; i < this.numcarts; i++){
            let fakecart = this.add.image(Math.random() * Math.floor(400),Math.random() * Math.floor(400), 'cart');
            fakecart.setScale(1.5);
            fakecart.setInteractive();
            fakecart.on('pointerdown', () => this.clicked(fakecart));
        }



        //var testpic = this.load.image('cart');
        //var testtext = this.add.text(Math.random() * Math.floor(400),Math.random() * Math.floor(400), 'cart');
        //testtext.setInteractive();
        //testtext.on('pointerdown', () => this.clicked(testtext));
        

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
            //timer.remove();
            }
    }
    

    update(){
        console.log(this.numcarts);
        //let pointer = this.scene.input.activePointer;
        this.carts.setText('Carts Collected: ' + this.cartscollect + ' / ' + this.numcarts);
        if (this.count <= 5) {
            this.fillcolor = '#FF0000';
        }
        else {
            this.fillcolor = '#FFFFFF'
        }
        //if(this.count === 0){
          //  timer.remove();
        //}        
        if(this.cartscollect === this.numcarts && this.count > 0){
            this.add.text(150,150,"YOU WIN", {font: '50px Times New Roman', fill: '#FFFFFF'});
        }
    }

    

}
