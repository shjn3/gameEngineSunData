import { gameStart, gamePlay, gameOver } from "../utils/config";
import GameObject from "../gameObject/GameObject";
import Scenes from "../scenes/Scenes";

export default class Game {
  static canvas: HTMLCanvasElement;
  static ctx: CanvasRenderingContext2D;
  mainImage: HTMLImageElement = new Image();
  _Scenes: Scenes;
  _status: number;
  constructor(config: any) {
    const { width, height, parent, ...configScenes } = config;
    Game.canvas = <HTMLCanvasElement>(
      document.querySelector(`#${parent} canvas`)
    );

    Game.ctx = <CanvasRenderingContext2D>Game.canvas.getContext("2d");
    Game.canvas.width = width;
    Game.canvas.height = height;
    this._status = gameStart;
    this._Scenes = new config.create();
  }
}
