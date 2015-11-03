module StartScreenM {
    export class TitleScreenState extends Phaser.State {
        game: Phaser.Game;
        music: Phaser.Sound;
        titleScreenImage: Phaser.Sprite;

        create() {
            this.titleScreenImage = this.add.sprite(0, 0, "title");
            this.titleScreenImage.scale.setTo(
                this.game.width / this.titleScreenImage.width,
                this.game.height / this.titleScreenImage.height);

            this.music = this.game.add.audio("TitleSong");
            this.music.volume = 0.1;
            this.music.loop = true;
            this.music.play();

        }
    }
}