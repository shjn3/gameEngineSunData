import Keyboard from "./Keyboard";
import Mouse from "./Mouse";
export default class Input {
  //name: string;
  //isKey: boolean;
  //isMouse: boolean;
  keyboard: Keyboard;
  mouse: Mouse;
  constructor() {
    this.keyboard = new Keyboard();
    this.mouse = new Mouse();
  }
}
