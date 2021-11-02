import type { vector } from "../utils/type";

export default class _Object {
  position: vector;
  width: number;
  height: number;
  constructor() {
    this.width = 0;
    this.height = 0;
    this.position = {
      x: 0,
      y: 0,
    };
  }
  getPosition() {
    return this.position;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }

  setPosition(x: number, y: number) {
    this.position = {
      x,
      y,
    };
  }
  setWidth(width: number) {
    this.width = width;
  }
  setHeight(height: number) {
    this.height = height;
  }
}
