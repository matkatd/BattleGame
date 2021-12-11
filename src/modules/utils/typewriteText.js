// function Typewriter(scene, textElement, content) {
//   scene.tweens.addCounter({
//     from: 0,
//     to: content.length,
//     duration: 50 * content.length,
//     onUpdate: function (counter) {
//       textElement.setText(content.slice(0, counter.getValue()));
//     },
//   });
// }

class TypewriteTextBlock {
  constructor(scene, text, x, y, style) {
    this.scene = scene;
    this.text = text;
    this.x = x;
    this.y = y;
    this.style = style;
    const textBox = scene.add
      .text(this.x, this.y, "", this.style)
      .setOrigin(0.5);
  }

  Typewriter() {
    scene.tweens.addCounter({
      from: 0,
      to: this.text.length,
      duration: 50 * text.length,
      onUpdate: function (counter) {
        textBox.setText(content.slice(0, counter.getValue()));
      },
    });
  }
}
export default { TypewriteTextBlock };
