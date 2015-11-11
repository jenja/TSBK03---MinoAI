module InGame {
    
    export class Collider extends Phaser.Sprite {

        game: Phaser.Game;
        
        constructor(game: Phaser.Game, x: number, y: number) {

            this.game = game;

            super(game, x, y, "collider", 0);
        }

    }
}

  