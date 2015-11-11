﻿module InGame {

    export class GamePlayState extends Phaser.State {
        game: Phaser.Game;


        player: InGame.Player
        wall: InGame.Wall;

        minotaur: InGame.Minotaur;
        collider: InGame.Collider;

        constructor() {
            super();
        }

        create() {

            // Start arcade physics
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            //create PLAYER object -------------------------------------------------------------------
            this.player = new Player(this.game, 10 /*this.game.width/2*/ , 10 /*this.game.height/2*/);

            //add physics for player object
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
            this.player.body.collideWorldBounds = true;

            //Add gameobject to scene
            this.game.add.existing(this.player);

            //this.wall = new Wall(this.game, 2, 2);
            //this.game.add.existing(this.wall);
            //----------------------------------------------------------------------------------------

            //create MINOTAUR object -----------------------------------------------------------------
            this.minotaur = new Minotaur(this.game, this.game.width/2, this.game.height/2, this.player);

            //add physics for game object
            this.game.physics.enable(this.minotaur, Phaser.Physics.ARCADE);

            //Add gameobject to scene
            this.game.add.existing(this.minotaur);
            //----------------------------------------------------------------------------------------

            //create COLLIDER object -----------------------------------------------------------------
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

            this.game.physics.arcade.collide(this.minotaur, this.collider);
            this.game.physics.arcade.collide(this.player, this.minotaur);


        }
    }
} 