import imageObject from "../image/imageObject";
import imageSprite from "../image/imageSprite";

import Game from "../game/Game";
import type { vector } from "../utils/type";

import Input from "../input/Input";
import Load from "../loader/Load";
import Add from "../add/Add";
import TextObject from "../text/TextObject";

export default abstract class Scenes {
  arrImage: Array<imageObject> = [];
  imageSprites: Array<imageSprite> = [];
  _arrDraw: Array<imageObject> = [];
  _arrDrawSprite: Array<imageSprite> = [];
  _arrText: Array<TextObject> = [];
  _load: Load;
  _add: Add;

  _input: Input = new Input();
  constructor() {
    this._load = new Load(this.arrImage, this.imageSprites);
    this._add = new Add(
      this.arrImage,
      this.imageSprites,
      this._arrDraw,
      this._arrText,
      this._arrDrawSprite
    );
    this.init();
  }
  init() {
    this.loadImage();
    this.create();
    this.loop();
  }
  create() {}
  loadImage() {}
  draw() {
    let lengthArrDraw = this._arrDraw.length;
    let lengthArrText = this._arrText.length;

    if (lengthArrDraw > 0) {
      this._arrDraw.forEach((_e) =>
        Game.ctx.drawImage(
          _e.image,
          _e.position.x,
          _e.position.y,
          _e.width,
          _e.height
        )
      );
    }
    if (lengthArrText > 0) {
      this._arrText.forEach((_e) => {
        Game.ctx.font = `${_e.getSize()}px ${_e.getFont()}`;
        const position: vector = _e.getPosition();
        Game.ctx.fillText(`${_e.getText()}`, position.x, position.y);
      });
    }
  }
  loop() {
    window.requestAnimationFrame(() => this.loop());
    Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    this.draw();
  }
}
