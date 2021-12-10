import Phaser from "phaser";
import Preloader from "./screens/Preloader.js";
import TitleScreen from "./screens/TitleScreen.js";
import CharCreationScreen from "./screens/CharCreationScreen.js";
import { TextBox } from "phaser3-rex-plugins/templates/ui/ui-components.js";

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [Preloader, TitleScreen, CharCreationScreen],
};

export default new Phaser.Game(config);
