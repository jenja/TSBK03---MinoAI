module InGame {

    export class GamePlayState extends Phaser.State {
        game: Phaser.Game;
        player: InGame.Player;

        //tests
        collider: InGame.Collider;

        constructor() {
            super();
        }

        create() {

            // Start arcade physics
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            //create player object -------------------------------------------------------------------
            this.player = new Player(this.game, 10 /*this.game.width/2*/ , 10 /*this.game.height/2*/);

            //add physics for player object
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
            this.player.body.collideWorldBounds = true;

            //Add gameobject to scene
            this.game.add.existing(this.player);
            //----------------------------------------------------------------------------------------

            //create collider object -----------------------------------------------------------------
            this.collider = new Collider(this.game, 150, 150);

            //add physics for the game object
            this.game.physics.enable(this.collider, Phaser.Physics.ARCADE);
            this.collider.body.immovable = true;

            //Add gameobject to scene
            this.game.add.existing(this.collider);
            //----------------------------------------------------------------------------------------
        }

        update() {

            //check collision between player object and collider object
            this.game.physics.arcade.collide(this.player, this.collider);

        }
    }
} 