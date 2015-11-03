1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
var PhaserDemo = (function () {
    function PhaserDemo() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    PhaserDemo.prototype.preload = function () {
        this.game.load.image('phaser_run', 'run.png');
    };
    PhaserDemo.prototype.create = function () {
        this.game.add.sprite(0, 0, 'phaser_run');
    };
    return PhaserDemo;
})();
window.onload = function () {
    var game = new PhaserDemo();
};
//# sourceMappingURL=app.js.map