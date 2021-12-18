import Phaser from "phaser";
import BasicButton from "../modules/utils/BasicButton.js";
class StoryScreen extends Phaser.Scene {
  constructor() {
    super("storyScreen");
  }
  init(data) {
    this.music = data.bgMusic;
    //this.characterImg = data.characterImg;
    //this.characterName = data.characterName;
  }

  create() {
    this.add.image(400, 300, "storyScreenBackground");
    this.N = new BasicButton(this, "n", 2, 1, 0, 250, 115).setOrigin(0, 0);
    this.NE = new BasicButton(this, "ne", 2, 1, 0, 250, 115).setOrigin(0, 0);
    this.E = new BasicButton(this, "e", 2, 1, 0, 250, 115).setOrigin(0, 0);
    this.SE = new BasicButton(this, "se", 2, 1, 0, 250, 115).setOrigin(0, 0);
    this.S = new BasicButton(this, "s", 2, 1, 0, 250, 115).setOrigin(0, 0);
    this.SW = new BasicButton(this, "sw", 2, 1, 0, 250, 115).setOrigin(0, 0);
    this.W = new BasicButton(this, "w", 2, 1, 0, 250, 115).setOrigin(0, 0);
    this.NW = new BasicButton(this, "nw", 2, 1, 0, 250, 115).setOrigin(0, 0);
  }

  update() {}
}

export default StoryScreen;
