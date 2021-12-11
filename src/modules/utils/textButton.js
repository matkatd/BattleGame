import Phaser from "phaser";

class TextButton {
  constructor(x, y, label, scene, style, callback) {
    const button = scene.add
      .text(x, y, label, style)
      .setOrigin(0.5)
      .setPadding(10)
      .setInteractive({ useHandCursor: true })
      .on("pointerup", () => callback())
      .on("pointerover", () => button.setStyle({ fill: "#CACACA" }))
      .on("pointerout", () => button.setStyle({ fill: "#F5F5F5" }));
  }
}

export default TextButton;
// export class TextButton extends Phaser.GameObjects.Text {
//   constructor(scene, x, y, text, style, callback) {
//     super(scene, x, y, text, style);

//     this.setInteractive({ useHandCursor: true })
//       .on("pointerover", () => this.enterButtonHoverState())
//       .on("pointerout", () => this.enterButtonRestState())
//       .on("pointerdown", () => this.enterButtonActiveState())
//       .on("pointerup", () => {
//         this.enterButtonHoverState();
//         callback();
//       });
//   }

//   enterButtonHoverState() {
//     this.setStyle({ fill: "#CACACA" });
//   }

//   enterButtonRestState() {
//     this.setStyle({ fill: "#F5F5F5" });
//   }

//   enterButtonActiveState() {
//     this.setStyle({ fill: "#CACACA" });
//   }
// }
