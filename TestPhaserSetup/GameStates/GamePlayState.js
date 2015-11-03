var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var InGame;
(function (InGame) {
    var GamePlayState = (function (_super) {
        __extends(GamePlayState, _super);
        function GamePlayState() {
            _super.call(this);
        }
        GamePlayState.prototype.create = function () {
            this.player = new InGame.Player(this.game, 10, 10);
            this.game.add.existing(this.player);
        };
        return GamePlayState;
    })(Phaser.State);
    InGame.GamePlayState = GamePlayState;
})(InGame || (InGame = {}));
//# sourceMappingURL=GamePlayState.js.map