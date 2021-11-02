import Game from "./game/Game";
import Scenes from "./scenes/Scenes";

class test extends Scenes {
  constructor() {
    super();
  }
  loadImage() {
    this._load.image("btnStart", "./assets/PlayButton.png");
    const frameInSprite = [
      {
        key: "run1",
        x: 1511,
        y: 0,
        width: 95,
        height: 110,
      },
      {
        key: "run2",
        x: 1590,
        y: 0,
        width: 95,
        height: 110,
      },
    ];
    this._load.sprite("imageSprites", "./assets/sprite.png", frameInSprite);
  }
  create() {
    //draw Image
    this._add.image(350, 125, 100, 100, "btnStart");
    //input event
    this._input.keyboard.on("keydown-ArrowUp", () => {
      console.log("abc");
    });
    this._input.keyboard.on("keydown- ", () => {
      console.log("space");
    });
    this._input.mouse.on((event: MouseEvent) => {
      console.log("left mouse");
    });
    //draw Text
    this._add.text(315, 250, 30, "Arial", "Click to Start");
    //run Player
    let configAnimationRunPlayer = {
      key: "runAnimations",
      frames: [{ key: "run1" }, { key: "run2" }],
      framesRate: 8,
      repeat: -1,
    };
    const RunSprite = this._add.sprite(15, 310, 60, 70, "imageSprites");
    RunSprite.play("runAnimations");
  }
}

let config = {
  width: 800,
  height: 400,
  parent: "parentCanvas",
  create: test,
};

let _game = new Game(config);
