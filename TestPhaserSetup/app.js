var Game;
(function (Game) {
    var MinoAI = (function () {
        function MinoAI() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                preload: this.preload, create: this.create
            });
        }
        MinoAI.prototype.preload = function () {
            //Load Graphics
            this.game.load.image('phaser_run', 'run.png');
            this.game.load.image("title", "/Graphics/StartScreen.jpg");
            //Load Sounds
            this.game.load.audio("TitleSong", "/Sound/Cow.mp3");
        };
        MinoAI.prototype.create = function () {
            this.game.add.sprite(0, 0, 'phaser_run');
            this.game.state.add("TitleScreenState", StartScreenM.TitleScreenState, true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };
        return MinoAI;
    })();
    Game.MinoAI = MinoAI;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.MinoAI();
};
//# sourceMappingURL=app.js.map