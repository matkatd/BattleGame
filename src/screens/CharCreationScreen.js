import Phaser from "phaser";
import BasicButton from "../modules/utils/BasicButton.js";
import TextButton from "../modules/utils/textButton.js";
import eventsCenter from "../modules/utils/EventsCenter.js";

const content = [
  "In a hole in the ground there lived a hobbit. It was not a dirty, grimy hole...",
  "but it was a nice, clean hole. Indeed, it was a hobbit hole:",
  "But ultimately, you are here to create a character; a character who will be the hero of this story",
  "So first, please select a character:",
];
const contentSize = content.length;
let contentIndex = 0;
let characterIndex = 0;
const characters = ["male1", "male2", "female1", "male3", "female2"];
var typewriter;
var characterImage;
var finishedDialogue = 0;
var nextButton;
class CharCreationScreen extends Phaser.Scene {
  constructor() {
    super("charCreationScreen");
    // this.typewriter;
    this.spacebar;
  }

  preload() {}

  create() {
    this.add.image(400, 300, "charCreationBackground");

    characterImage = this.add.image(270, 40, "grayRectangle").setOrigin(0, 0);
    this.leftArrow = new BasicButton(
      this,
      "leftArrow",
      0,
      1,
      2,
      150,
      180
    ).setOrigin(0, 0);

    this.rightArrow = new BasicButton(
      this,
      "rightArrow",
      0,
      1,
      2,
      600,
      180
    ).setOrigin(0, 0);

    // this.add.image(150, 180, "leftArrow").setOrigin(0, 0);
    // this.add.image(600, 180, "rightArrow").setOrigin(0, 0);

    typewriter = this.add
      .text(400, 480, content[contentIndex], {
        fill: "#3a3a3b",
        fontSize: 30,
        fontFamily: "crystal",
        wordWrap: { width: 700, useAdvancedWrap: true },
      })
      .setOrigin(0.5);

    this.pressSpacebar = this.add
      .text(400, 550, "(Press Spacebar to continue)", {
        fill: "#3a3a3b",
        fontSize: 30,
        fontFamily: "crystal",
      })
      .setOrigin(0.5);

    // this.typewriter = new TypewriteTextBlock(this, content, 400, 450, {
    //   fill: "white",
    //   fontSize: 30,
    //   fontFamily: "crystal",
    //   wordWrap: { width: 700, useAdvancedWrap: true },
    // });
    // this.typewriter.Typewriter();

    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }

  update() {
    this.updateText();
  }

  updateText() {
    if (
      Phaser.Input.Keyboard.JustDown(this.spacebar) &&
      contentIndex < contentSize - 1
    ) {
      contentIndex++;
      typewriter.setText(content[contentIndex]);
    }
    if (contentIndex === contentSize - 1) {
      // Make character images appear
      characterImage.setTexture(characters[characterIndex]);
      finishedDialogue++;
      if (finishedDialogue === 1) {
        this.pressSpacebar.setText("");
        // Make arrows clickable
        this.rightArrow.on("pointerdown", this.clickRight, this);
        this.leftArrow.on("pointerdown", this.clickLeft, this);
        // Give instructions
        nextButton = new TextButton(
          400,
          550,
          "(Click Next When Ready)",
          this,
          { fill: "#3a3a3b", fontFamily: "crystal", fontSize: 35 },
          () =>
            this.scene.start("charNameScreen", {
              characterImg: characters[characterIndex],
            })
        );
      }
    }
  }

  clickRight() {
    console.log("you clicked the right button!");
    if (characterIndex == characters.length - 1) {
      characterIndex = 0;
      characterImage.setTexture(characters[characterIndex]);
      eventsCenter.emit("char-index", characterIndex);
    } else {
      characterIndex++;
      characterImage.setTexture(characters[characterIndex]);
      eventsCenter.emit("char-index", characterIndex);
    }
  }

  clickLeft() {
    console.log("You clicked the left button!");
    if (characterIndex == 0) {
      characterIndex = characters.length - 1;
      characterImage.setTexture(characters[characterIndex]);
      eventsCenter.emit("char-index", characterIndex);
    } else {
      characterIndex--;
      characterImage.setTexture(characters[characterIndex]);
      eventsCenter.emit("char-index", characterIndex);
    }
  }
}

export default CharCreationScreen;
