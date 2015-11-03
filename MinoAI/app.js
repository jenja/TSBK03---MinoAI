var Game;
(function (Game) {
    var MinoAI = (function () {
        function MinoAI() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }
        MinoAI.prototype.preload = function () {
        };
        MinoAI.prototype.create = function () {
        };
        return MinoAI;
    })();
    Game.MinoAI = MinoAI;
})(Game || (Game = {}));
//Syntext for Anonymous function
window.onload = function () {
    var game = new Game.MinoAI();
};
//# sourceMappingURL=app.js.map