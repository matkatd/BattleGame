import Phaser from "phaser";
class Preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }
  preload() {
    /** Start loading for Titlescreen */
    this.load.image("titleBackground", "../res/Images/TitleScreen.png");
    this.load.image("gameTitle", "../res/Images/GameTitle.svg");
    this.loadFont("bread", "../res/Fonts/yummy_bread.ttf");
    this.loadFont("crystal", "../res/Fonts/CRYSRG__.ttf");
    /** Start loading for CharCreationScreen */
    this.load.image(
      "charCreationBackground",
      "../res/Images/CharCreationScreen.png"
    );
    this.load.spritesheet("rightArrow", "../res/Images/rightArrowSheet.png", {
      frameWidth: 50,
      frameHeight: 50,
    });
    this.load.spritesheet("leftArrow", "../res/Images/leftArrowSheet.png", {
      frameWidth: 50,
      frameHeight: 50,
    });
    // this.load.plugin("DialogModalPlugin", "../modules/utils/dialogPlugin.js");
  }
  create() {
    this.scene.start("titleScreen");
  }

  loadFont(name, url) {
    var newFont = new FontFace(name, `url(${url})`);
    newFont
      .load()
      .then(function (loaded) {
        document.fonts.add(loaded);
      })
      .catch(function (error) {
        return error;
      });
  }
}

export default Preloader;
