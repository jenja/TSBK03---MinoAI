module InGame {

    export class GamePlayState extends Phaser.State {
        game: Phaser.Game;
        player: InGame.Player

        constructor() {
            super();
        }

        create() {
            this.player = new Player(this.game, 10 /*this.game.width/2*/ , 10 /*this.game.height/2*/);
            this.game.add.existing(this.player);
        }
    }
} 