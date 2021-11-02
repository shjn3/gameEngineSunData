import imageObject from "../image/imageObject";
import type { _informationFrame } from "../utils/type";
import imageSprite from "../image/imageSprite";

export default class Load {
  arrImage: Array<imageObject>;
  _imageSprites: Array<imageSprite>;

  constructor(arrImage: Array<imageObject>, _imageSprites: Array<imageSprite>) {
    this.arrImage = arrImage;
    this._imageSprites = _imageSprites;
  }
  image(name: string, url: string) {
    let image = new imageObject();
    image.setName(name);
    image.setImage(url);
    this.arrImage.push(image);
  }
  sprite(name: string, url: string, frameInSprite: Array<_informationFrame>) {
    let _imageSprite = new imageSprite();
    _imageSprite.setName(name);
    _imageSprite.setImage(url);
    _imageSprite.setConfigFrame(frameInSprite);
    this._imageSprites.push(_imageSprite);
  }
}
