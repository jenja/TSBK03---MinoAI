module Game {
    export class MinoAI {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }

        preload() {
        }

        create() {
        }
    }
}

//Syntext for Anonymous function
window.onload = () => {
    var game = new Game.MinoAI();
};