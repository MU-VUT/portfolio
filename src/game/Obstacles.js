import Phaser from "phaser";

export default class Obstacles extends Phaser.Physics.Arcade.Group {
    constructor(world, scene) {
        super(world, scene);

        this.outer = new Phaser.Geom.Rectangle(64, 64, 672, 472);
        this.target = new Phaser.Geom.Point();
    }

    start(xCoord, yCoord) {
        for (let i = 5; i < 9; i++) {
            this.create(xCoord[i], yCoord[i], 'cone');
        }
    }

}