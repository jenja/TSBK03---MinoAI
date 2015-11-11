module StartScreenM {
    export class TitleScreenState extends Phaser.State {
        game: Phaser.Game;
        music: Phaser.Sound;
        titleScreenImage: Phaser.Sprite;

        create() {
            //Create screen image and set scale
            this.titleScreenImage = this.add.sprite(0, 0, "title");
            this.titleScreenImage.scale.setTo(
                this.game.width / this.titleScreenImage.width,
                this.game.height / this.titleScreenImage.height);

            //create music, set volume, looping and play
            this.music = this.game.add.audio("TitleSong");
            this.music.volume = 0.1;
            this.music.loop = true;
            this.music.play();

            //Start game on tap
            this.input.onTap.addOnce(this.StartGame, this);
        }

        StartGame() {
            //Stop titlescreen music when the game starts
            this.music.stop();
            this.game.state.start("InGameState");
        }

    }
}