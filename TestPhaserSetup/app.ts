module Game {
    export class MinoAI {

        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                preload: this.preload, create: this.create
            });
        }

        preload() {

            //Load Graphics
            this.game.load.image("title", "/Graphics/StartScreen.jpg");
            this.game.load.image("player", "/Graphics/playerSprite.png");
            this.game.load.image("collider", "/Graphics/colliderSprite.png");
        
            //Load Sounds
            this.game.load.audio("TitleSong", "/Sound/Cow.mp3");
        }

        create() {

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.game.state.add("TitleScreenState",
                StartScreenM.TitleScreenState, false);

            this.game.state.add("InGameState",
                InGame.GamePlayState, true);

            
        }
    }
}

window.onload = () => {
    var game = new Game.MinoAI();
    };
