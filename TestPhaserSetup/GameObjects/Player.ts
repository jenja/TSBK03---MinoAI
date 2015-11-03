module InGame{
    export enum PlayerState { IDLE, Walking }

    export class Player extends Phaser.Sprite {

        game: Phaser.Game;
        playerState: PlayerState;

        UP_KEY: Phaser.Key;
        DOWN_KEY: Phaser.Key;
        LEFT_KEY: Phaser.Key;
        RIGHT_KEY: Phaser.Key;

        walkingSpeed: number;

        constructor(game: Phaser.Game, x: number, y: number) {
            this.walkingSpeed = 0;
            this.playerState = PlayerState.IDLE;

            super(game, x, y, "player", 0);
        }
    }
}

 