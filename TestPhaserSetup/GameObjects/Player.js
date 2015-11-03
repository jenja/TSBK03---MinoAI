var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var InGame;
(function (InGame) {
    (function (PlayerState) {
        PlayerState[PlayerState["IDLE"] = 0] = "IDLE";
        PlayerState[PlayerState["Walking"] = 1] = "Walking";
    })(InGame.PlayerState || (InGame.PlayerState = {}));
    var PlayerState = InGame.PlayerState;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            this.walkingSpeed = 0;
            this.playerState = 0 /* IDLE */;
            _super.call(this, game, x, y, "player", 0);
        }
        return Player;
    })(Phaser.Sprite);
    InGame.Player = Player;
})(InGame || (InGame = {}));
//# sourceMappingURL=Player.js.map