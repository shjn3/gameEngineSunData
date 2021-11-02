import Game from "../game/Game";

export default class Mouse {
  constructor() {}
  on(callback: (event: MouseEvent) => void) {
    Game.canvas.addEventListener("click", (event: MouseEvent) => {
      callback(event);
    });
  }
}
