import Phaser from "phaser";
import BasicButton from "../modules/utils/BasicButton";
import TextButton from "../modules/utils/textButton";
import eventsCenter from "../modules/utils/EventsCenter.js";
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
    this.load.audio("titleMusic", "../res/Music/TitleScreen.mp3");
    /** Start loading for CharCreationScreen */
    this.load.audio("charCreationMusic", "../res/Music/CharCreation.mp3");
    this.load.image(
      "charCreationBackground",
      "../res/Images/CharCreationScreen.png"
    );
    this.load.image("grayRectangle", "../res/Images/grayBackground.png");
    /** Load character portraits */
    this.load.image("male1", "../res/Images/blondMaleR.png");
    this.load.image("male2", "../res/Images/brunetteMaleR.png");
    this.load.image("female1", "../res/Images/blackHairFemaleR.png");
    this.load.image("male3", "../res/Images/whiteHairMaleR.png");
    this.load.image("female2", "../res/Images/brunetteFemaleR.png");
    this.load.spritesheet("rightArrow", "../res/Images/rightArrowSheet.png", {
      frameWidth: 50,
      frameHeight: 50,
    });
    this.load.spritesheet("leftArrow", "../res/Images/leftArrowSheet.png", {
      frameWidth: 50,
      frameHeight: 50,
    });

    /** Start loading for CharNameScreen */
    this.load.image("charNameBackground", "../res/Images/CharNameScreen.png");
    // this.load.plugin("DialogModalPlugin", "../modules/utils/dialogPlugin.js");

    this.load.image("blueButton1", "../res/Images/ui/blue_button02.png");
    this.load.image("blueButton2", "../res/Images/ui/blue_button03.png");

    this.load.image("box", "../res/Images/ui/grey_box.png");
    this.load.image("checkedBox", "../res/Images/ui/blue_boxCheckmark.png");

    /** Start loading for StoryScreen */
    this.load.image(
      "storyScreenBackground",
      "../res/Images/StoryScreenBackground.jpg"
    );
    this.load.spritesheet("n", "../res/Images/compass/N.png", {
      frameWidth: 210,
      frameHeight: 210,
    });
    this.load.spritesheet("ne", "../res/Images/compass/NE.png", {
      frameWidth: 210,
      frameHeight: 210,
    });
    this.load.spritesheet("e", "../res/Images/compass/E.png", {
      frameWidth: 210,
      frameHeight: 210,
    });
    this.load.spritesheet("se", "../res/Images/compass/SE.png", {
      frameWidth: 210,
      frameHeight: 210,
    });
    this.load.spritesheet("s", "../res/Images/compass/S.png", {
      frameWidth: 210,
      frameHeight: 210,
    });
    this.load.spritesheet("sw", "../res/Images/compass/SW.png", {
      frameWidth: 210,
      frameHeight: 210,
    });
    this.load.spritesheet("w", "../res/Images/compass/W.png", {
      frameWidth: 210,
      frameHeight: 210,
    });
    this.load.spritesheet("nw", "../res/Images/compass/NW.png", {
      frameWidth: 210,
      frameHeight: 210,
    });
  }
  create() {
    this.music = this.sound.add("titleMusic", {
      mute: false,
      volume: 0.15,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    });
    this.start = new TextButton(
      400,
      300,
      "Click to Start",
      this,
      { fill: "#F5F5F5", fontFamily: "bread", fontSize: 50 },
      () => this.scene.start("storyScreen", { bgMusic: this.music })
    );

    // this.scene.start("titleScreen");
  }

  update() {
    this.music.play();
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
