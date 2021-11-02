import imageObject from "../image/imageObject";
import imageSprite from "../image/imageSprite";
import TextObject from "../text/TextObject";
import Animation from "../animations/Animation";

export default class Add {
  arrImage: Array<imageObject>;
  imageSprites: Array<imageObject>;
  arrDraw: Array<imageObject>;
  arrDrawSprite: Array<imageSprite>;
  arrText: Array<TextObject>;
  constructor(
    arrImage: Array<imageObject> = [],
    imageSprites: Array<imageObject> = [],
    arrDraw: Array<imageObject> = [],
    arrText: Array<TextObject> = [],
    arrDrawSprite: Array<imageSprite> = []
  ) {
    this.arrImage = arrImage;
    this.imageSprites = imageSprites;
    this.arrDraw = arrDraw;
    this.arrText = arrText;
    this.arrDrawSprite = arrDrawSprite;
  }
  image(
    x: number,
    y: number,
    width: number,
    height: number,
    nameImage: string
  ) {
    let _image = this.arrImage.filter((_e) => _e.name === nameImage);
    if (_image) {
      _image[0].setPosition(x, y);
      _image[0].setWidth(width);
      _image[0].setHeight(height);
      this.arrDraw.push(_image[0]);
    }
  }
  sprite(x: number, y: number, width: number, height: number, name: string) {
    let _imageSprite = this.imageSprites.filter((_e) => _e.name === name);
    if (_imageSprite) {
      _imageSprite[0].setPosition(x, y);
      _imageSprite[0].setWidth(width);
      _imageSprite[0].setHeight(height);
      this.imageSprites.push(_imageSprite[0]);
    }
    return this;
  }
  play(key: string) {
    let mainAnimation = Animation.arrConfig.filter((_e) => _e.key === key);
    //find mainAnimation
    if (mainAnimation) {
      const { frames, framesRate, repeat } = mainAnimation[0];

      frames.forEach((_e: any) => {});
    }
  }
  text(x: number, y: number, size: number, font: string, text: string) {
    let _text = new TextObject();
    _text.setPosition(x, y);
    _text.setSize(size);
    _text.setFont(font);
    _text.setText(text);
    this.arrText.push(_text);
  }
}
