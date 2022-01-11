import Phaser from "phaser";
import Preloader from "./screens/Preloader.js";
import TitleScreen from "./screens/TitleScreen.js";
import CharCreationScreen from "./screens/CharCreationScreen.js";
import CharNameScreen from "./screens/CharNameScreen.js";
import StoryScreen from "./screens/StoryScreen.js";
import OptionsScene from "./screens/OptionsScene.js";
import Model from "./modules/Model.js";
import config from "./config.js";
import User from "./modules/Characters/User.js";
import { TextBox } from "phaser3-rex-plugins/templates/ui/ui-components.js";

// const config = {
//   type: Phaser.AUTO,

//   width: 800,
//   height: 600,
//   dom: {
//     createContainer: true,
//   },
//   physics: {
//     default: "arcade",
//     arcade: {
//       gravity: { y: 0 },
//     },
//   },
//   scene: [
//     Preloader,
//     TitleScreen,
//     OptionsScene,
//     CharCreationScreen,
//     CharNameScreen,
//   ],
// };

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();

    this.globals = { model, bgMusic: null };
    this.scene.add("preloader", Preloader);
    this.scene.add("titleScreen", TitleScreen);
    this.scene.add("Options", OptionsScene);
    this.scene.add("charCreationScreen", CharCreationScreen);
    this.scene.add("charNameScreen", CharNameScreen);
    this.scene.add("storyScreen", StoryScreen);

    this.scene.start("preloader");
  }
}

window.game = new Game();
// export default new Phaser.Game(config);
