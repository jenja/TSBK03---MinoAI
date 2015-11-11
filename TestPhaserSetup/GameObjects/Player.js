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
        PlayerState[PlayerState["WALKING"] = 1] = "WALKING";
    })(InGame.PlayerState || (InGame.PlayerState = {}));
    var PlayerState = InGame.PlayerState;
    var Player = (function (_super) {
        __extends(Player, _super);
        //public static MAX_SPEED: number = 30;
        function Player(game, x, y) {
            this.game = game;
            this.walkingSpeed = 200;
            this.walkingSpeedX = 0;
            this.walkingSpeedY = 0;
            //Wire up input handlers
            this.UP_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this.DOWN_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this.LEFT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.RIGHT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            _super.call(this, game, x, y, "player", 0);
            //this.anchor.set(0.0, 1.0);
        }
        Player.prototype.update = function () {
            //player controlls: vertical movement 
            if (this.UP_ARROW.isDown)
                this.walkingSpeedY = -this.walkingSpeed;
            else if (this.DOWN_ARROW.isDown)
                this.walkingSpeedY = this.walkingSpeed;
            else
                this.walkingSpeedY = 0;
            //player controlls: horizontal movement
            if (this.LEFT_ARROW.isDown)
                this.walkingSpeedX = -this.walkingSpeed;
            else if (this.RIGHT_ARROW.isDown)
                this.walkingSpeedX = this.walkingSpeed;
            else
                this.walkingSpeedX = 0;
            this.body.velocity.x = this.walkingSpeedX;
            this.body.velocity.y = this.walkingSpeedY;
            //update position (Replace translation with velocity in order to collide)
            //this.x += this.walkingSpeedX;// * (60 / this.game.time.elapsedMS); //rhe latter causes sprite to disapear
            //this.y += this.walkingSpeedY;// * (60 / this.game.time.elapsedMS);
        };
        return Player;
    })(Phaser.Sprite);
    InGame.Player = Player;
})(InGame || (InGame = {}));
//# sourceMappingURL=Player.js.map