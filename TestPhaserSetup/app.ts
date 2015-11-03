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
            this.game.load.image('phaser_run', 'run.png');
            this.game.load.image("title", "/Graphics/StartScreen.jpg");
        
            //Load Sounds
            this.game.load.audio("TitleSong", "/Sound/Cow.mp3");
        }

        create() {
            this.game.add.sprite(0, 0, 'phaser_run');
            this.game.state.add("TitleScreenState",
                StartScreenM.TitleScreenState, true);

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }
    }
}

window.onload = () => {
    var game = new Game.MinoAI();
    };
