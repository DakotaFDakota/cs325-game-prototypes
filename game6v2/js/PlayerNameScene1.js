class PlayerNameScene1 extends Phaser.Scene{
    constructor(){
        super("PlayerNameScene1");
        let playername;
        let numplayers;
        let player1;
        let player2;
        let player3;
        let player4;
    }

    init(data){
        this.numplayers = data.num;
    }
    

    clicked(clickedtext){
        clickedtext.destroy();

    }

    addPlayers(name){

    }


    preload(){
        this.load.html('form', 'js/form.html');
    }


    create(){
        //add player names\
        let i = 0;
            this.nameInput = this.add.dom(250,250).createFromCache("form");
            this.message = this.add.text(250,200, "Name of Player 1: ", {
                color: "#FFFFFF",
                fontSize: "20px",
            }).setOrigin(0.5);

        
            this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

            this.returnKey.on("down", event => {
                let name = this.nameInput.getChildByName("name");
                if(name.value != "") {
                    this.message.setText("Player 1: " + name.value);
                    //this.playername = name.value;
                    this.scene.start('PlayerNameScene2', {num: this.numplayers, playname1: name.value});

                }
            })
            //.log(i);
    }


    update(){}
}

export default PlayerNameScene1;