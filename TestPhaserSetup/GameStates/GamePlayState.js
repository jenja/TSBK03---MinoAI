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
            // Start arcade physics
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            //create PLAYER object -------------------------------------------------------------------
            this.player = new InGame.Player(this.game, 10, 10);
            //add physics for player object
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
            this.player.body.collideWorldBounds = true;
            //Add gameobject to scene
            this.game.add.existing(this.player);
            //----------------------------------------------------------------------------------------
            //create MINOTAUR object -----------------------------------------------------------------
            this.minotaur = new InGame.Minotaur(this.game, this.game.width / 2, this.game.height / 2, this.player);
            //add physics for game object
            this.game.physics.enable(this.minotaur, Phaser.Physics.ARCADE);
            //Add gameobject to scene
            this.game.add.existing(this.minotaur);
            //----------------------------------------------------------------------------------------
            //create COLLIDER object -----------------------------------------------------------------
            this.collider = new InGame.Collider(this.game, 150, 150);
            //add physics for the game object
            this.game.physics.enable(this.collider, Phaser.Physics.ARCADE);
            this.collider.body.immovable = true;
            //Add gameobject to scene
            this.game.add.existing(this.collider);
            //----------------------------------------------------------------------------------------
        };
        GamePlayState.prototype.update = function () {
            //check collision between player object and collider object
            this.game.physics.arcade.collide(this.player, this.collider);
            this.game.physics.arcade.collide(this.minotaur, this.collider);
            this.game.physics.arcade.collide(this.player, this.minotaur);
        };
        return GamePlayState;
    })(Phaser.State);
    InGame.GamePlayState = GamePlayState;
})(InGame || (InGame = {}));
//# sourceMappingURL=GamePlayState.js.map