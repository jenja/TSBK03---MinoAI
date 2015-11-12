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
            this.game.load.image("title", "/Graphics/StartScreen.jpg");
            this.game.load.image("player", "/Graphics/playerSprite.png");
            this.game.load.image("player", "/Graphics/World_Chest.png");
            this.game.load.image("collider", "/Graphics/colliderSprite.png");
            this.game.load.image("minotaur", "/Graphics/minotaurSprite.png");
            this.game.load.tilemap('level1', '/Graphics/mapT.json', null, Phaser.Tilemap.TILED_JSON);
            this.game.load.image('tiles', '/Graphics/kenney_16x16.png');
            //Load Sounds
            this.game.load.audio("TitleSong", "/Sound/Cow.mp3");
        };
        MinoAI.prototype.create = function () {
            //Scale manager controls the scaling when the player resize the window
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //----------------------------------------------------
            //Add the different stats the game will have
            //Titlescreen state
            this.game.state.add("TitleScreenState", StartScreenM.TitleScreenState, false);
            //Game state
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