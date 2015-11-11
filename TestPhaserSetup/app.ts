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
            this.game.load.image("player", "/Graphics/World_Chest.png");
        
            //Load Sounds
            this.game.load.audio("TitleSong", "/Sound/Cow.mp3");
        }

        create() {

            //Scale manager controls the scaling when the player resize the window
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            //----------------------------------------------------
            //Add the different stats the game will have

            //Titlescreen state
            this.game.state.add("TitleScreenState",
                StartScreenM.TitleScreenState, true);

            //Game state
            this.game.state.add("InGameState",
                InGame.GamePlayState, false);
            
        }
    }
}

window.onload = () => {
    var game = new Game.MinoAI();
    };
