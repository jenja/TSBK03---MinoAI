module InGame {

    export class Minotaur extends Phaser.Sprite {

        game: Phaser.Game;
        player: InGame.Player;

        distanceX: number;
        distanceY: number;

        constructor(game: Phaser.Game, x: number, y: number, _player: Player) {
            this.game = game;
            this.player = _player;

            super(game, x, y, "minotaur", 0);
        }

        update() {
            this.MoveTowardsPlayer();
        }

        MoveTowardsPlayer(): void  {

            this.game.physics.arcade.moveToObject(this, this.player.position, 100);
            //this.game.physics.arcade.moveToPointer(this, 100);
        }
    }
}