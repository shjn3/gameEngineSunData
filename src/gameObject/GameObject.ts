import { vector } from "../utils/type";

export default class GameObject {
  position: vector;
  width: number;
  height: number;
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.width = 0;
    this.height = 0;
  }
}
