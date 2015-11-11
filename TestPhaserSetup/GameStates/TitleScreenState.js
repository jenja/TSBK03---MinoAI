var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StartScreenM;
(function (StartScreenM) {
    var TitleScreenState = (function (_super) {
        __extends(TitleScreenState, _super);
        function TitleScreenState() {
            _super.apply(this, arguments);
        }
        TitleScreenState.prototype.create = function () {
            //Create screen image and set scale
            this.titleScreenImage = this.add.sprite(0, 0, "title");
            this.titleScreenImage.scale.setTo(this.game.width / this.titleScreenImage.width, this.game.height / this.titleScreenImage.height);
            //create music, set volume, looping and play
            this.music = this.game.add.audio("TitleSong");
            this.music.volume = 0.1;
            this.music.loop = true;
            this.music.play();
            //Start game on tap
            this.input.onTap.addOnce(this.StartGame, this);
        };
        TitleScreenState.prototype.StartGame = function () {
            //Stop titlescreen music when the game starts
            this.music.stop();
            this.game.state.start("InGameState");
        };
        return TitleScreenState;
    })(Phaser.State);
    StartScreenM.TitleScreenState = TitleScreenState;
})(StartScreenM || (StartScreenM = {}));
//# sourceMappingURL=TitleScreenState.js.map