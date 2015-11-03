
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
class PhaserDemo {

    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    preload() {
        this.game.load.image('phaser_run', 'run.png');
    }

    create() {
        this.game.add.sprite(0, 0, 'phaser_run');
    }
}

window.onload = () => {
    var game = new PhaserDemo();
};