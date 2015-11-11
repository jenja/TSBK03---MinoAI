var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InGame;
(function (InGame) {
    var Minotaur = (function (_super) {
        __extends(Minotaur, _super);
        function Minotaur(game, x, y, _player) {
            this.game = game;
            this.player = _player;
            _super.call(this, game, x, y, "minotaur", 0);
        }
        Minotaur.prototype.update = function () {
            this.MoveTowardsPlayer();
        };
        Minotaur.prototype.MoveTowardsPlayer = function () {
            this.game.physics.arcade.moveToObject(this, this.player.position, 100);
            //this.game.physics.arcade.moveToPointer(this, 100);
        };
        return Minotaur;
    })(Phaser.Sprite);
    InGame.Minotaur = Minotaur;
})(InGame || (InGame = {}));
//# sourceMappingURL=Minotaur.js.map