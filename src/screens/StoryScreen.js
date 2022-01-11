import Phaser from "phaser";
import { Rectangle } from "phaser/src/gameobjects";
import UserFSM from "../modules/Characters/User.js";
const { User } = UserFSM;
import BasicButton from "../modules/utils/BasicButton.js";

var character;
class StoryScreen extends Phaser.Scene {
  constructor() {
    super("storyScreen");
  }
  init(data) {
    this.music = this.scene.get("charNameScreen").storyMusic;
    this.characterImg = data.characterImg;
    this.characterName = data.characterName;
  }

  create() {
    this.add.image(400, 300, "storyScreenBackground");
    this.user = new User(
      this,
      35,
      100,
      this.characterImg,
      this.characterName
    ).setOrigin(0, 0);
    this.user.setScale(0.65);

    this.add
      .text(10, 10, this.user.name, {
        fill: "#3a3a3b",
        fontSize: 30,
        fontFamily: "crystal",
      })
      .setOrigin(0, 0);

    this.healthPoints = this.add
      .text(10, 50, `HP: ${this.user.currentHealth} / ${this.user.health}`, {
        fill: "#3a3a3b",
        fontSize: 30,
        fontFamily: "crystal",
      })
      .setOrigin(0, 0);
    // character = this.add.image(35, 100, this.characterImg).setOrigin(0, 0);
    // character.setScale(0.65);
    var leftX = 250;
    var topY = 115;
    var midX = 300;
    var midY = 165;
    var rightX = 350;
    var bottomY = 215;
    var hitSize = 20;
    //this.add.image(400, 300, "storyScreenBackground");
    this.N = new BasicButton(this, "n", 2, 1, 3, midX, topY).setOrigin(0, 0);
    this.N.setDepth(100);
    this.N.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.NE = new BasicButton(this, "ne", 2, 1, 3, rightX, topY).setOrigin(
      0,
      0
    );
    this.NE.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.E = new BasicButton(this, "e", 2, 1, 3, rightX, midY).setOrigin(0, 0);
    this.E.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.SE = new BasicButton(this, "se", 2, 1, 3, rightX, bottomY).setOrigin(
      0,
      0
    );
    this.SE.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.S = new BasicButton(this, "s", 2, 1, 3, midX, bottomY).setOrigin(0, 0);
    this.S.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.SW = new BasicButton(this, "sw", 2, 1, 3, leftX, bottomY).setOrigin(
      0,
      0
    );
    this.SW.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.W = new BasicButton(this, "w", 2, 1, 3, leftX, midY).setOrigin(0, 0);
    this.W.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.NW = new BasicButton(this, "nw", 2, 1, 3, leftX, topY).setOrigin(0, 0);
    this.NW.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);

    /** Start Look Button */
    this.lookButton = new BasicButton(
      this,
      "greenButton",
      0,
      1,
      1,
      245,
      10
    ).setOrigin(0, 0);
    this.lookText = this.add.text(0, 0, "Look Around", {
      fill: "#3a3a3b",
      fontSize: 30,
      fontFamily: "crystal",
    });
    Phaser.Display.Align.In.Center(this.lookText, this.lookButton);
    /** Start Examine button */
    this.examineButton = new BasicButton(
      this,
      "greenButton",
      0,
      1,
      1,
      475,
      10
    ).setOrigin(0, 0);
    this.examineText = this.add.text(0, 0, "Examine", {
      fill: "#3a3a3b",
      fontSize: 30,
      fontFamily: "crystal",
    });
    Phaser.Display.Align.In.Center(this.examineText, this.examineButton);
    /** Start talk button */
    this.talkButton = new BasicButton(
      this,
      "greenButton",
      0,
      1,
      1,
      475,
      86
    ).setOrigin(0, 0);
    this.talkText = this.add.text(0, 0, "Talk", {
      fill: "#3a3a3b",
      fontSize: 30,
      fontFamily: "crystal",
    });
    Phaser.Display.Align.In.Center(this.talkText, this.talkButton);
    /** Start grab button */
    this.grabButton = new BasicButton(
      this,
      "greenButton",
      0,
      1,
      1,
      475,
      162
    ).setOrigin(0, 0);
    this.grabText = this.add.text(0, 0, "Grab", {
      fill: "#3a3a3b",
      fontSize: 30,
      fontFamily: "crystal",
    });
    Phaser.Display.Align.In.Center(this.grabText, this.grabButton);

    /** Start Inventory Button */
    this.inventoryButton = new BasicButton(
      this,
      "greenButton",
      0,
      1,
      1,
      475,
      238
    ).setOrigin(0, 0);
    this.inventoryText = this.add.text(0, 0, "Inventory", {
      fill: "#3a3a3b",
      fontSize: 30,
      fontFamily: "crystal",
    });
    Phaser.Display.Align.In.Center(this.inventoryText, this.inventoryButton);

    /** Start map button */
    this.mapButton = new BasicButton(
      this,
      "greenButton",
      0,
      1,
      1,
      775,
      10
    ).setOrigin(0, 0);
    this.mapButton.setAngle(90);
    this.mapText = this.add.text(720, 100, "Map", {
      fill: "#3a3a3b",
      fontSize: 30,
      fontFamily: "crystal",
    });
    //Phaser.Display.Align.In.Center(this.mapText, this.mapButton);
  }

  update() {}
}

export default StoryScreen;
