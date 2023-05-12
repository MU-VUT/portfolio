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
        this.score = 0;
        this.goal = 5;

        // this.add.image(400, 260, 'assets', 'logo');

        this.scoreText = this.add.text(16, 32, 'Collected boxes 0', { fontFamily: '"FjallaOne"', fontSize: '20px' }).setDepth(1);
        this.infoText = this.add.text(400, 100, '', { fontFamily: '"FjallaOne"', fontSize: '36px' }).setOrigin(0.5).setDepth(1);


        this.endGameText = this.add.text(400, 220, '', { fontFamily: '"FjallaOne"', fontSize: '36px' }).setOrigin(0.5);
        this.endGameTextSmaller = this.add.text(400, 300, '', { fontFamily: '"FjallaOne"', fontSize: '20px' }).setOrigin(0.5);

        this.player = new Player(this, 75, 300);
        this.boxes = new Boxes(this.physics.world, this);
        this.obstacles = new Obstacles(this.physics.world, this);
        this.warehouse = new Warehouse(this.physics.world, this);


        this.player.start();
        this.boxes.start();
        this.obstacles.start();
        this.warehouse.start();


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
        }
    }

    gameWon() {
        this.player.kill();

        this.endGameText.setText('Game Won!');
        // this.endGameTextSmaller.setText('Be careful & try it again');

        // this.input.once('pointerdown', () => {
        //     this.scene.start('MainMenu');
        // });
    }

    gameOver() {
        this.player.kill();

        this.endGameText.setText('Game Over!');
        this.endGameTextSmaller.setText('Be careful & try it again');

        this.input.once('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }

    getPlayer(target) {
        target.x = this.player.x;
        target.y = this.player.y;

        return target;
    }

}