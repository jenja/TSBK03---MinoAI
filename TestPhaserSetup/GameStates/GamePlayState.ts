module InGame {

    export class GamePlayState extends Phaser.State {
        game: Phaser.Game;
        player: InGame.Player

        constructor() {
            super();
        }

        create() {
            this.player = new Player(this.game, this.game.width/2 , this.game.height/2);
            this.game.add.existing(this.player);
        }
    }
} 