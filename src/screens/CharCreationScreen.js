import Phaser from "phaser";
import BasicButton from "../modules/utils/BasicButton.js";
import { TextBox } from "phaser3-rex-plugins/templates/ui/ui-components.js";
import TypewriteTextBlock from "../modules/utils/typewriteText.js";

const content = [
  "In a hole in the ground there lived a hobbit. It was not a dirty, grimy hole...",
  "but it was a nice, clean hole. Indeed, it was a hobbit hole:",
  "But ultimately, you are here to create a character; a character who will be the hero of this story",
  "So first, please select a sprite:",
];
const contentSize = content.length;
let index = 0;
var typewriter;
class CharCreationScreen extends Phaser.Scene {
  constructor() {
    super("charCreationScreen");
    // this.typewriter;
    this.spacebar;
  }

  preload() {}

  create() {
    this.add.image(400, 300, "charCreationBackground");

    var leftArrow = new BasicButton(
      this,
      "leftArrow",
      0,
      1,
      2,
      150,
      180
    ).setOrigin(0, 0);
    leftArrow.on("pointerdown", this.clickLeft, this);

    var rightArrow = new BasicButton(
      this,
      "rightArrow",
      0,
      1,
      2,
      600,
      180
    ).setOrigin(0, 0);
    rightArrow.on("pointerdown", this.clickRight, this);

    // this.add.image(150, 180, "leftArrow").setOrigin(0, 0);
    // this.add.image(600, 180, "rightArrow").setOrigin(0, 0);

    typewriter = this.add
      .text(400, 480, content[index], {
        fill: "#3a3a3b",
        fontSize: 30,
        fontFamily: "crystal",
        wordWrap: { width: 700, useAdvancedWrap: true },
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
      index < contentSize - 1
    ) {
      index++;
      typewriter.setText(content[index]);
    }
  }

  clickRight() {
    console.log("you clicked the right button!");
  }

  clickLeft() {
    console.log("You clicked the left button!");
  }
}

export default CharCreationScreen;
