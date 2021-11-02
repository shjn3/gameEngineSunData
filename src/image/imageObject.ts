import { vector } from "../utils/type";
import _Object from "../base/_Object";

export default class imageObject extends _Object {
  name: string;
  image: HTMLImageElement;

  constructor() {
    super();
    this.image = new Image();
    this.name = "";
  }
  setName(name: string) {
    this.name = name;
  }
  setImage(url: string) {
    this.image.src = url;
  }
}
