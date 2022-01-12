import { State } from "../../StateMachine.js";
import eventsCenter from "../utils/EventsCenter.js";
const DEFAULT_HEALTH = 100;
class User extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture = "male2", name = "Ron") {
    super(scene, x, y, texture);
    scene.add.existing(this);

    this.health = DEFAULT_HEALTH;
    this.currentHealth = DEFAULT_HEALTH;
    this.experience = 0;
    this.name = name;
  }
}
class InitState extends State {
  enter(scene, hero) {
    /* This is the default state. When a user is not clicking on any buttons, they will be in
    InitState */
  }
  execute(scene, hero) {
    /* The User leaves InitState by clicking on a button */
    eventsCenter.on("north", this.move, this);
  }

  move(direction) {
    console.log(`You went ${direction}`);
  }
}

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
