import Phaser from "phaser";

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        // this.add.image(400, 260, 'assets', 'logo');

        // this.add.bitmapText(400, 500, 'slime', 'Click to Play', 40).setOrigin(0.5);
        this.textStyle = { fontFamily: '"FjallaOne"', fontSize: '30px' }

        this.add.text(400, 250, 'Collect all boxes and get them to the warehouse!', this.textStyle).setOrigin(0.5);
        this.add.text(400, 300, 'Avoid the traffic cones!', this.textStyle).setOrigin(0.5);

        this.startButton = this.add.text(400, 450, 'Click to play', this.textStyle)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { this.scene.start('MainGame'); })
            .on('pointerover', () => this.startButton.setStyle({ fill: '#dcc48e' }))
            .on('pointerout', () => this.startButton.setStyle({ fill: '#FFF' }));
    }

}