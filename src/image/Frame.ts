import _Object from "../base/_Object";

export default class Frame extends _Object {
  name: string;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    name: string
  ) {
    super();
    this.name = name;
  }
}
