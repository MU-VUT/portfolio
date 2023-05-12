import Phaser from "phaser";

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        // this.add.image(400, 260, 'assets', 'logo');

        // this.add.bitmapText(400, 500, 'slime', 'Click to Play', 40).setOrigin(0.5);

        this.add.text(400, 300, 'Click to play', { fontFamily: '"FjallaOne"', fontSize: '30px' }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('MainGame');

        });
    }

}