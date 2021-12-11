import Phaser from "phaser";
import TextButton from "../modules/utils/textButton.js";
// import CharCreationScreen from "./CharCreationScreen.js";

class TitleScreen extends Phaser.Scene {
  constructor() {
    super("titleScreen");
  }

  create() {
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
      () => this.scene.start("charCreationScreen")
    );
    //this.startGameButton.setDepth(10);

    this.settingsGameButton = new TextButton(
      400,
      275,
      "Settings",
      this,
      { fill: "#F5F5F5", fontFamily: "bread", fontSize: 50 },
      () => console.log("You clicked me!")
    );
    //this.settingsGameButton.setDepth(10);
  }

  update() {}
}

export default TitleScreen;
