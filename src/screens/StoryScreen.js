import Phaser from "phaser";
import { Rectangle } from "phaser/src/gameobjects";
import UserFSM from "../modules/Characters/User.js";
const { User } = UserFSM;
import BasicButton from "../modules/utils/BasicButton.js";
import eventsCenter from "../modules/utils/EventsCenter.js";

var character;
class StoryScreen extends Phaser.Scene {
  constructor() {
    super("storyScreen");
  }
  init(data) {
    this.music = this.scene.get("charNameScreen").storyMusic;
    this.characterImg = data.characterImg;
    this.characterName = data.characterName;
    this.direction;
  }

  create() {
    this.scene.launch("storyStateMachine");
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
    this.N.on("pointerdown", this.clickN, this);

    this.NE = new BasicButton(this, "ne", 2, 1, 3, rightX, topY).setOrigin(
      0,
      0
    );
    this.NE.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.NE.on("pointerdown", this.clickNE, this);

    this.E = new BasicButton(this, "e", 2, 1, 3, rightX, midY).setOrigin(0, 0);
    this.E.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.E.on("pointerdown", this.clickE, this);

    this.SE = new BasicButton(this, "se", 2, 1, 3, rightX, bottomY).setOrigin(
      0,
      0
    );
    this.SE.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.SE.on("pointerdown", this.clickSE, this);

    this.S = new BasicButton(this, "s", 2, 1, 3, midX, bottomY).setOrigin(0, 0);
    this.S.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.S.on("pointerdown", this.clickS, this);

    this.SW = new BasicButton(this, "sw", 2, 1, 3, leftX, bottomY).setOrigin(
      0,
      0
    );
    this.SW.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.SW.on("pointerdown", this.clickSW, this);

    this.W = new BasicButton(this, "w", 2, 1, 3, leftX, midY).setOrigin(0, 0);
    this.W.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.W.on("pointerdown", this.clickW, this);

    this.NW = new BasicButton(this, "nw", 2, 1, 3, leftX, topY).setOrigin(0, 0);
    this.NW.hitArea = new Rectangle(this, 0, 0, hitSize, hitSize);
    this.NW.on("pointerdown", this.clickNW, this);

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
    this.lookButton.on("pointerdown", this.clickLook, this);

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
    this.examineButton.on("pointerdown", this.clickExamine, this);

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
    this.talkButton.on("pointerdown", this.clickTalk, this);

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
    this.grabButton.on("pointerdown", this.clickGrab, this);

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
    this.inventoryButton.on("pointerdown", this.clickInventory, this);

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
    this.mapButton.on("pointerdown", this.clickMap, this);
    //Phaser.Display.Align.In.Center(this.mapText, this.mapButton);
  }

  update() {}

  clickN() {
    this.direction = "N";
    console.log("You went north!");
    eventsCenter.emit("north", this.direction);
  }

  clickNE() {
    this.direction = "NE";
    console.log("You went northeast!");
  }

  clickE() {
    this.direction = "E";
    console.log("You went east!");
  }

  clickSE() {
    this.direction = "SE";
    console.log("You went southeast!");
  }

  clickS() {
    this.direction = "S";
    console.log("You went south!");
  }

  clickSW() {
    this.direction = "SW";
    console.log("You went southwest!");
  }

  clickW() {
    this.direction = "W";
    console.log("You went west!");
  }

  clickNW() {
    this.direction = "NW";
    console.log("You went northwest!");
  }

  clickLook() {
    console.log("you look around the room...");
    // call LookState of user and output description of current room
  }

  clickExamine() {
    console.log("Which Object would you like to examine?");
    // Prompt the user with a list of available objects, and then call ExamineState of user and output description of chosen object
  }

  clickTalk() {
    console.log("What do you want to talk about?");
    // Prompt User with list of questions, output responses and additional questions until conversation ends
  }

  clickGrab() {
    console.log("What do you want to grab?");
    // Prompt use with list of grabbable items. call Grab state and put item into inventory
  }

  clickInventory() {
    console.log("Look at all that stuff!");
    // Start Inventory scene
  }

  clickMap() {
    console.log("It's a wild world out there!");
    // Start Map scene
  }
}

export default StoryScreen;
