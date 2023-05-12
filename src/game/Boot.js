import Phaser from "phaser";

export default class Boot extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    preload() {
        this.load.image('cone', '/assets/cone.png');
        this.load.image('box', '/assets/box.png');
        this.load.image('warehouse-closed', '/assets/warehouse-closed.png');
        this.load.image('warehouse-open', '/assets/warehouse-open.png');
        this.load.image('truck', '/assets/truck.png');



    }

    create() {
        // this.registry.set('highscore', 0);

        this.scene.start('MainMenu');
    }

}