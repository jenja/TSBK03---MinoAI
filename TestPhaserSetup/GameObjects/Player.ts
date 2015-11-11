module InGame{
    export enum PlayerState { IDLE, WALKING }

    export class Player extends Phaser.Sprite {

        game: Phaser.Game;
        playerState: PlayerState;

        UP_ARROW: Phaser.Key;
        DOWN_ARROW: Phaser.Key;
        LEFT_ARROW: Phaser.Key;
        RIGHT_ARROW: Phaser.Key;
        
        walkingSpeed: number;
        walkingSpeedX: number;
        walkingSpeedY: number;

        //public static MAX_SPEED: number = 30;

        constructor(game: Phaser.Game, x: number, y: number) {

            this.game = game;
            this.walkingSpeed = 200;
            this.walkingSpeedX = 0;
            this.walkingSpeedY = 0;

            //Wire up input handlers
            this.UP_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this.DOWN_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this.LEFT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.RIGHT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

            super(game, x, y, "player", 0);

            //this.anchor.set(0.0, 1.0);
        }

        update() {

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
        } 
    }
}

 