

export default class MainScene extends Phaser.Scene{
    constructor(){
        super("MainScene");
        this.count = 20;
        this.fillcolor = '#FFFFFF';
        var counter;
        var timer;
        var carts;
        var cartscollect;
        //this.timer = function() {this.counter--};
    }

    

    preload(){

      }

    clicked(text){ 
        this.cartscollect++;
        text.destroy();

    }

    create(){
        this.cartscollect = 0;
        this.carts = this.add.text(10,475, 'Carts Collected: 0');


        var testtext = this.add.text(Math.random() * Math.floor(400),Math.random() * Math.floor(400), 'cart');
        testtext.setInteractive();
        testtext.on('pointerdown', () => this.clicked(testtext));
        

        var testtext1 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext1.setInteractive();
        testtext1.on('pointerdown', () => this.clicked(testtext1));


        var testtext2 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext2.setInteractive();
        testtext2.on('pointerdown', () => this.clicked(testtext2));


        var testtext3 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext3.setInteractive();
        testtext3.on('pointerdown', () => this.clicked(testtext3));


        var testtext4 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext4.setInteractive();
        testtext4.on('pointerdown', () => this.clicked(testtext4));


        var testtext5 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext5.setInteractive();
        testtext5.on('pointerdown', () => this.clicked(testtext5));

        var testtext6 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext6.setInteractive();
        testtext6.on('pointerdown', () => this.clicked(testtext6));

        var testtext7 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext7.setInteractive();
        testtext7.on('pointerdown', () => this.clicked(testtext7));
        
        var testtext8 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext8.setInteractive();
        testtext8.on('pointerdown', () => this.clicked(testtext8));
        
        var testtext9 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext9.setInteractive();
        testtext9.on('pointerdown', () => this.clicked(testtext9));

        


        var testtext10 = this.add.text(Math.random() * Math.floor(400),Math.random() * Math.floor(400), 'cart');
        testtext10.setInteractive();
        testtext10.on('pointerdown', () => this.clicked(testtext10));
        

        var testtext11 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext11.setInteractive();
        testtext11.on('pointerdown', () => this.clicked(testtext11));


        var testtext12 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext12.setInteractive();
        testtext12.on('pointerdown', () => this.clicked(testtext12));


        var testtext13 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext13.setInteractive();
        testtext13.on('pointerdown', () => this.clicked(testtext13));


        var testtext14 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext14.setInteractive();
        testtext14.on('pointerdown', () => this.clicked(testtext14));


        var testtext15 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext15.setInteractive();
        testtext15.on('pointerdown', () => this.clicked(testtext15));

        var testtext16 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext16.setInteractive();
        testtext16.on('pointerdown', () => this.clicked(testtext16));

        var testtext17 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext17.setInteractive();
        testtext17.on('pointerdown', () => this.clicked(testtext17));
        
        var testtext18 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext18.setInteractive();
        testtext18.on('pointerdown', () => this.clicked(testtext18));
        
        var testtext19 = this.add.text(Math.random() * Math.floor(400), Math.random() * Math.floor(400), 'cart');
        testtext19.setInteractive();
        testtext19.on('pointerdown', () => this.clicked(testtext19));




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
        if(this.count === 0){
            alert("Ran out of time, try again");
            //timer.remove();
            }
    }
    

    update(){
        //let pointer = this.scene.input.activePointer;
        this.carts.setText('Carts Collected: ' + this.cartscollect);
        if (this.count <= 5) {
            this.fillcolor = '#FF0000';
        }
        else {
            this.fillcolor = '#FFFFFF'
        }
        if(this.count === 0){
            timer.remove();
        }        
        if(this.cartscollect === 20){
            alert('YOU WIN!  Refresh to Play Again');
        }
    }

    

}
