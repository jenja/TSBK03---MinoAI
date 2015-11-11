var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InGame;
(function (InGame) {
    var GamePlayState = (function (_super) {
        __extends(GamePlayState, _super);
        function GamePlayState() {
            _super.call(this);
        }
        GamePlayState.prototype.create = function () {
            this.player = new InGame.Player(this.game, 10 /*this.game.width/2*/, 10 /*this.game.height/2*/);
            this.game.add.existing(this.player);
            //this.wall = new Wall(this.game, 2, 2);
            //this.game.add.existing(this.wall);
        };
        return GamePlayState;
    })(Phaser.State);
    InGame.GamePlayState = GamePlayState;
})(InGame || (InGame = {}));
//# sourceMappingURL=GamePlayState.js.map