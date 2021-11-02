import imageObject from "./imageObject";
import type { _informationFrame } from "../utils/type";
export default class imageSprite extends imageObject {
  configFrame: Array<_informationFrame>;
  constructor() {
    super();
    this.configFrame = [];
  }
  setConfigFrame(configFrame: Array<_informationFrame>) {
    this.configFrame = configFrame;
  }
}
