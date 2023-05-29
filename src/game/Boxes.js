import Phaser from "phaser";

export default class Boxes extends Phaser.Physics.Arcade.Group {
    constructor(world, scene) {
        super(world, scene);

        this.outer = new Phaser.Geom.Rectangle(64, 64, 672, 472);
        this.target = new Phaser.Geom.Point();
    }

    start(xCoord, yCoord) {
        for (let i = 0; i < 5; i++) {
            this.create(xCoord[i], yCoord[i], 'box');
        }
    }

    collect(box) {

        // Removes box from canvas
        this.remove(box, true);
    }
}