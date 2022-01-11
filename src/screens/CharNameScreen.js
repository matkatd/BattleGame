import Phaser from "phaser";
import TextButton from "../modules/utils/textButton.js";
var content = ["Please follow the above instructions"];
const contentSize = content.length;
var contentIndex = 0;
var finishedDialogue = 0;
var nextButton;
class CharNameScreen extends Phaser.Scene {
  constructor() {
    super("charNameScreen");
  }

  init(data) {
    this.characterImg = data.characterImg;
  }

  preload() {
    //  this.load.html("form", "../userInput.html");
  }

  create() {
    this.add.image(400, 300, "charNameBackground");
    this.music = this.scene.get("titleScreen").charMusic; // get access to charMusic from titleScreen
    this.storyMusic = this.sound.add("storyMusic", {
      mute: false,
      volume: 0.15,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    });

    this.character = this.add.image(50, 40, this.characterImg).setOrigin(0, 0);
    this.playerName = "";

    this.typewriter = this.add
      .text(400, 480, content[contentIndex], {
        fill: "#3a3a3b",
        fontSize: 30,
        fontFamily: "crystal",
        wordWrap: { width: 700, useAdvancedWrap: true },
        fontStyle: "italic",
      })
      .setOrigin(0.5);

    this.pressSpacebar = this.add
      .text(400, 550, "", {
        fill: "#3a3a3b",
        fontSize: 30,
        fontFamily: "crystal",
      })
      .setOrigin(0.5);
    this.inputInstructions = this.add.text(450, 150, "Enter your name:", {
      font: "32px crystal",
      fill: "#ffffff",
    });

    var textEntry = this.add.text(450, 200, " ", {
      font: "32px crystal",
      fill: "#ffff00",
      backgroundColor: "black",
    });

    this.input.keyboard.on("keydown", function (event) {
      if (event.keyCode === 8 && textEntry.text.length > 0) {
        textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
      } else if (
        event.keyCode === 32 ||
        (event.keyCode >= 48 && event.keyCode < 90)
      ) {
        textEntry.text += event.key;
      }
    });

    this.returnKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );

    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    this.returnKey.on("down", () => {
      this.input.keyboard.off("keydown");
      if (this.playerName == "") {
        // If player name has not already been recorded, do this
        this.playerName = textEntry.text;
        if (this.playerName[0] === " ") {
          this.playerName = this.playerName.slice(1);
        }
        textEntry.setText("");
        this.inputInstructions.setText("");
        // this.pressSpacebar.setText("(Press Spacebar to continue)");
        contentIndex++;
        this.typewriter.setText(`Welcome, ${this.playerName}!`);
        finishedDialogue = 1;
      }
    });
  }

  update() {
    this.updateText();
  }

  updateText() {
    // if (
    //   Phaser.Input.Keyboard.JustDown(this.spacebar) &&
    //   contentIndex < contentSize - 1
    // ) {
    //   typewriter.setText(content[contentIndex]);
    //   contentIndex++;
    // }
    if (finishedDialogue === 1) {
      this.pressSpacebar.setText("");
      // Give instructions
      nextButton = new TextButton(
        400,
        550,
        "(Click Next To Begin)",
        this,
        { fill: "#3a3a3b", fontFamily: "crystal", fontSize: 35 },
        () => {
          this.music.stop();
          this.storyMusic.play();
          this.scene.start("storyScreen", {
            characterImg: this.characterImg,
            characterName: this.playerName,
            storyMusic: this.storyMusic,
          });
        }
      );
    }
  }
}

export default CharNameScreen;
