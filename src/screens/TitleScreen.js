import Phaser from "phaser";
import { TextButton } from "../modules/utils/textButton.js";
// import CharCreationScreen from "./CharCreationScreen.js";

const BUTTON_TEXT_COLOR = "F5F5F5";

class TitleScreen extends Phaser.Scene {
  constructor() {
    super("titleScreen");
  }

  create() {
    this.add.image(300, 200, "titleBackground");
    //this.add.image(300, 100, "gameTitle");
    this.add.text(120, 40, "Game Title", {
      fontFamily: "bread",
      fontSize: 75,
      fill: "#494949",
    });
    this.startGameButton = new TextButton(
      this,
      240,
      140,
      "Start Game",
      {
        fontFamily: "bread",
        fontSize: 25,
        fill: `#${BUTTON_TEXT_COLOR}`,
      },
      () => this.scene.start("charCreationScreen")
    );
    this.startGameButton.setDepth(10);
    this.settingsGameButton = new TextButton(
      this,
      250,
      190,
      "Settings",
      {
        fontFamily: "bread",
        fontSize: 25,
        fill: `#0f0`,
      },
      () => console.log("You clicked me!")
    );
    this.settingsGameButton.setDepth(10);
  }

  update() {}
}

export default TitleScreen;
