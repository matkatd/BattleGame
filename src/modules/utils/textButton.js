import Phaser from "phaser";

export class TextButton extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text, style, callback) {
    super(scene, x, y, text, style);

    this.setInteractive({ useHandCursor: true })
      .on("pointerover", () => this.enterButtonHoverState())
      .on("pointerout", () => this.enterButtonRestState())
      .on("pointerdown", () => this.enterButtonActiveState())
      .on("pointerup", () => {
        this.enterButtonHoverState();
        callback();
      });
  }

  enterButtonHoverState() {
    this.setStyle({ fill: "#CACACA" });
  }

  enterButtonRestState() {
    this.setStyle({ fill: "#F5F5F5" });
  }

  enterButtonActiveState() {
    this.setStyle({ fill: "#CACACA" });
  }
}
