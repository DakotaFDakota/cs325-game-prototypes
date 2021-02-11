import items from "./Items.js";

export default class InventoryScene extends Phaser.Scene {
    constructor() {
        super("InventoryScene");
        this.inventorySlots = [];
        this.uiScale = 1.5
        this.gridSpacing = 4;
        this.margin = 0;
        this.tileSize = 32;
        
    }
    init(data) {
        let { mainScene } = data;
        this.mainScene = mainScene;
        this.inventory = mainScene.player.inventory;
        this.columns = this.inventory.columns;
        this.rows = this.inventory.rows;
        this.inventory.subscribe(() => this.refresh());
    }

    

    create() {
        this.input.on("wheel",(pointer, gameObjects,deltaX, deltaY,deltaZ) => {
            this.inventory.selected = Math.max(0, this.inventory.selected + (deltaY > 0 ? 1 : -1) % this.columns);
            this.updateSelected();
        });
        this.refresh();
    }

    refresh() {
        this.inventorySlots = [];
        for (let index = 0; index < this.columns * this.rows; index ++){
            let x = 28 + this.tileSize/2 + ((index * 32) + this.gridSpacing);
            let y = this.tileSize/2;
            let inventorySlot = this.add.sprite(x,y,"items",11);
            inventorySlot.depth = -1;
            inventorySlot.setInteractive();
            let item = this.inventory.getItem(index);
            if(item){
                inventorySlot.item = this.add.sprite(inventorySlot.x, inventorySlot.y, "items", items[item.name].frame)
                inventorySlot.quantityText = this.add.text(inventorySlot.x + 6, inventorySlot.y+ this.tileSize/9, item.quantity, {
                    font: "11px Courier",
                    fill: "#113",

                });
                if(item.quantity == 19) alert("You win");
            }
            this.inventorySlots.push(inventorySlot);
        }
        this.updateSelected();
        
    }

    updateSelected(){
        for (let index = 0; index < 2; index++) {
          this.inventorySlots[index].tint = this.inventory.selected === index ? 0XFF9E9E9E : 0xffffff;
        }
      }
         

    





}