class BasicButton extends Phaser.GameObjects.Sprite {
  constructor(scene, imgKey, up, over, down, x, y) {
    if (!scene) {
      console.log("missing scene");
      return;
    }
    if (!imgKey) {
      console.log("missing key!");
      return;
    }
    if (!up) {
      up = 0;
    }
    if (!down) {
      down = up;
    }
    if (!over) {
      over = up;
    }
    super(scene, 0, 0, imgKey, up);

    if (x) {
      this.x = x;
    }
    if (y) {
      this.y = y;
    }
    this.scene = scene;
    this.imgKey = imgKey;
    this.up = up;
    this.over = over;
    this.down = down;

    scene.add.existing(this);

    // Make interactive and set listeners
    this.setInteractive();
    this.on("pointerdown", this.onDown, this);
    this.on("pointerup", this.onOver, this);
    this.on("pointerover", this.onOver, this);
    this.on("pointerout", this.onUp, this);
  }

  onDown() {
    this.setFrame(this.down);
  }
  onOver() {
    this.setFrame(this.over);
  }
  onUp() {
    this.setFrame(this.up);
  }
}

export default BasicButton;
