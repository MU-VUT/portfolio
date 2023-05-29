import Phaser from "phaser";
import Player from './Player.js';
import Boxes from './Boxes.js';
import Obstacles from './Obstacles.js';
import Warehouse from './Warehouse.js';


export default class MainGame extends Phaser.Scene {
    constructor() {
        super('MainGame');

        this.score = 0;
        this.goal = 5;

    }


    create() {
        this.textStyle = { fontFamily: '"FjallaOne"', fontSize: '24px' }
        this.score = 0;
        this.goal = 5;

        // this.add.image(400, 260, 'assets', 'logo');

        this.scoreText = this.add.text(16, 32, 'Collected boxes 0', this.textStyle).setDepth(1);
        this.infoText = this.add.text(400, 100, '', this.textStyle).setOrigin(0.5).setDepth(1);


        this.endGameText = this.add.text(400, 220, '', { fontFamily: '"FjallaOne"', fontSize: '80px' }).setOrigin(0.5).setDepth(5);
        this.endGameTextSmaller = this.add.text(400, 300, '', this.textStyle).setOrigin(0.5).setDepth(5);

        this.player = new Player(this, 75, 300);
        this.boxes = new Boxes(this.physics.world, this);
        this.obstacles = new Obstacles(this.physics.world, this);
        this.warehouse = new Warehouse(this.physics.world, this);


        this.xCoord = [];
        this.yCoord = [];

        for (let i = 0; i < 9; i++) {
            this.xCoord[i] = Phaser.Math.RND.between(7.5, 30) * 20;
            this.yCoord[i] = Phaser.Math.RND.between(5, 25) * 20;
        }

        console.log(this.xCoord);
        this.player.start();
        this.boxes.start(this.xCoord, this.yCoord);
        this.obstacles.start(this.xCoord, this.yCoord);
        this.warehouse.start();
        this.warehouse.setDepth(2);


        this.physics.add.overlap(this.player, this.boxes, (player, box) => this.playerHitBox(player, box));
        this.physics.add.overlap(this.player, this.obstacles, (player, obstacle) => this.playerHitObstacle(player, obstacle));
        this.physics.add.overlap(this.player, this.warehouse, (player, warehouse, goal, score) => this.playerHitWarehouse(player, warehouse, this.goal, this.score));

    }

    playerHitObstacle(player, obstacle) {
        this.gameOver();
    }

    playerHitWarehouse(player, warehouse, goal, score) {
        if (goal === score) {
            this.gameWon();
        } else {
            this.infoText.setText('You need to collect all the boxes first!');
            setTimeout(() => { this.infoText.setText('') }, 3000);
        }
    }

    playerHitBox(player, box) {
        this.score++;

        this.scoreText.setText('Collected boxes ' + this.score);

        this.boxes.collect(box);
        if (this.score === this.goal) {
            this.warehouse.open();
            this.warehouse.setDepth(2.5);
        }
    }

    gameWon() {
        this.player.kill();

        this.endGameText.setText('Game Won!');
        this.endGameBtnReset = this.add.text(300, 450, 'Try it again', this.textStyle)
            .setDepth(5)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { this.scene.start('MainGame'); })
            .on('pointerover', () => this.endGameBtnReset.setStyle({ fill: '#dcc48e' }))
            .on('pointerout', () => this.endGameBtnReset.setStyle({ fill: '#FFF' }));

        this.endGameBtnSkip = this.add.text(500, 450, 'To portfolio', this.textStyle)
            .setDepth(5)

        .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { window.open("../about", "_self"); })
            .on('pointerover', () => this.endGameBtnSkip.setStyle({ fill: '#dcc48e' }))
            .on('pointerout', () => this.endGameBtnSkip.setStyle({ fill: '#FFF' }));
    }

    gameOver() {
        this.player.kill();

        this.endGameText.setText('Game Over!');
        this.endGameBtnReset = this.add.text(300, 450, 'Try it again', this.textStyle)
            .setDepth(5)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { this.scene.start('MainGame'); })
            .on('pointerover', () => this.endGameBtnReset.setStyle({ fill: '#dcc48e' }))
            .on('pointerout', () => this.endGameBtnReset.setStyle({ fill: '#FFF' }));

        this.endGameBtnSkip = this.add.text(500, 450, 'Skip to portfolio', this.textStyle)
            .setDepth(5)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { window.open("../about", "_self"); })
            .on('pointerover', () => this.endGameBtnSkip.setStyle({ fill: '#dcc48e' }))
            .on('pointerout', () => this.endGameBtnSkip.setStyle({ fill: '#FFF' }));
    }

    getPlayer(target) {
        target.x = this.player.x;
        target.y = this.player.y;

        return target;
    }

}