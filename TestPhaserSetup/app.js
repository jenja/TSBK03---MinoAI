var Game;
(function (Game) {
    var MinoAI = (function () {
        function MinoAI() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                preload: this.preload,
                create: this.create
            });
        }
        MinoAI.prototype.preload = function () {
            //Load Graphics
            this.game.load.image("title", "/Graphics/StartScreen.jpg");
            this.game.load.image("player", "/Graphics/playerSprite.png");
            this.game.load.image("collider", "/Graphics/colliderSprite.png");
            //Load Sounds
            this.game.load.audio("TitleSong", "/Sound/Cow.mp3");
        };
        MinoAI.prototype.create = function () {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.add("TitleScreenState", StartScreenM.TitleScreenState, false);
            this.game.state.add("InGameState", InGame.GamePlayState, true);
        };
        return MinoAI;
    })();
    Game.MinoAI = MinoAI;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.MinoAI();
};
//# sourceMappingURL=app.js.map