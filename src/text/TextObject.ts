import _Object from "../base/_Object";

export default class TextObject extends _Object {
  text: string;
  font: string;
  size: number;
  constructor() {
    super();
    this.text = "";
    this.font = "";
    this.size = 13;
  }
  //size
  setSize(size: number) {
    this.size = size;
  }
  getSize() {
    return this.size;
  }
  //text
  setText(text: string) {
    this.text = text;
  }
  getText() {
    return this.text;
  }
  //font
  setFont(font: string) {
    this.font = font;
  }
  getFont() {
    return this.font;
  }
}
