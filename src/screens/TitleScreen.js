import Phaser from "phaser";
import TextButton from "../modules/utils/textButton.js";
// import CharCreationScreen from "./CharCreationScreen.js";

class TitleScreen extends Phaser.Scene {
  constructor() {
    super("titleScreen");
  }

  init(data) {
    this.music = data.bgMusic;
  }
  create() {
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.charMusic = this.sound.add("charCreationMusic", {
        mute: false,
        volume: 0.15,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0,
      });

      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }

    this.add.image(400, 300, "titleBackground");
    //this.add.image(300, 100, "gameTitle");
    this.add
      .text(400, 100, "Game Title", {
        fontFamily: "bread",
        fontSize: 100,
        fill: "#494949",
      })
      .setOrigin(0.5);

    this.startGameButton = new TextButton(
      400,
      200,
      "Start Game",
      this,
      { fill: "#F5F5F5", fontFamily: "bread", fontSize: 50 },
      () => {
        this.music.stop();
        this.charMusic.play();

        this.scene.start("charCreationScreen", { bgMusic: this.charMusic });
      }
    );

    this.settingsGameButton = new TextButton(
      400,
      275,
      "Settings",
      this,
      { fill: "#F5F5F5", fontFamily: "bread", fontSize: 50 },
      () => this.scene.start("Options")
    );
  }

  update() {}
}

export default TitleScreen;
