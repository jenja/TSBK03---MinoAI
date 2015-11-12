var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InGame;
(function (InGame) {
    //Global variables...
    var map;
    var layer;
    var blayer;
    var GamePlayState = (function (_super) {
        __extends(GamePlayState, _super);
        //var map;
        function GamePlayState() {
            //this.map = map;
            //this.layer = layer;
            _super.call(this);
        }
        GamePlayState.prototype.create = function () {
            // Start arcade physics
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            //add the tilemap, the parameter is the key for the json file
            map = this.game.add.tilemap('level1');
            //First parameter is the tileset name as specified in Tiled, the second it the key to the asset
            map.addTilesetImage('kenney_16x16', 'tiles');
            //Create the layers you specified in Tiled, do this for each layer
            layer = map.createLayer('backgroundLayer');
            blayer = map.createLayer('blockLayer');
            //map.setCollisionBetween(1, 2000, true, 'blockLayer');
            //resizes the game world to match the layer dimensions
            layer.resizeWorld();
            //create PLAYER object -------------------------------------------------------------------
            this.player = new InGame.Player(this.game, 10 /*this.game.width/2*/, 10 /*this.game.height/2*/);
            //add physics for player object
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
            this.player.body.collideWorldBounds = true;
            //Add gameobject to scene
            this.game.add.existing(this.player);
            //this.wall = new Wall(this.game, 2, 2);
            //this.game.add.existing(this.wall);
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