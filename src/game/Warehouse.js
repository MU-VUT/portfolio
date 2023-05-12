import Phaser from "phaser";

export default class Warehouse extends Phaser.Physics.Arcade.Group {
    constructor(world, scene) {
        super(world, scene);

        this.outer = new Phaser.Geom.Rectangle(64, 64, 672, 472);
        this.target = new Phaser.Geom.Point();
    }

    start() {
        this.create(725, 300, 'warehouse-closed');
    }

    open() {
        this.create(725, 300, 'warehouse-open');
    }
}