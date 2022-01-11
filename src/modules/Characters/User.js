import { State } from "../../StateMachine.js";
const DEFAULT_HEALTH = 100;
class User extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, name) {
    super(scene, x, y, texture);
    scene.add.existing(this);

    this.health = DEFAULT_HEALTH;
    this.currentHealth = DEFAULT_HEALTH;
    this.experience = 0;
    this.name = name;
  }
}
class InitState extends State {}

class LookState extends State {}

class ExamineState extends State {}

class TalkState extends State {}

class GrabState extends State {}

class InventoryState extends State {}

class MapState extends State {}

class FightState extends State {}

export default {
  User,
  InitState,
  LookState,
  ExamineState,
  TalkState,
  GrabState,
  InventoryState,
  MapState,
  FightState,
};
