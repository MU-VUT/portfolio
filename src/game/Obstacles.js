import Phaser from "phaser";

export default class Obstacles extends Phaser.Physics.Arcade.Group {
    constructor(world, scene) {
        super(world, scene);

        this.outer = new Phaser.Geom.Rectangle(64, 64, 672, 472);
        this.target = new Phaser.Geom.Point();
    }

    start() {
        for (let i = 0; i < 4; i++) {
            this.xCoord = Phaser.Math.RND.between(150, 600);
            this.yCoord = Phaser.Math.RND.between(100, 500);
            this.create(this.xCoord, this.yCoord, 'cone');
        }
    }

}