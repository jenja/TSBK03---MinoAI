var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InGame;
(function (InGame) {
    var Collider = (function (_super) {
        __extends(Collider, _super);
        function Collider(game, x, y) {
            this.game = game;
            _super.call(this, game, x, y, "collider", 0);
        }
        return Collider;
    })(Phaser.Sprite);
    InGame.Collider = Collider;
})(InGame || (InGame = {}));
//# sourceMappingURL=Collider.js.map