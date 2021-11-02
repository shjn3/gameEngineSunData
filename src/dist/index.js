"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Game_1 = require("./game/Game");
var config = {
    width: 800,
    height: 400,
    parent: "parentCanvas",
    create: create
};
var _game = new Game_1["default"](config);
var test = /** @class */ (function (_super) {
    __extends(test, _super);
    function test(config) {
        return _super.call(this, config) || this;
    }
    test.prototype.create = function () {
        this.load.image("btnStart", "assets/PlayButton.png");
        this.load.sprite("sprites", "assets/sprite.png");
        this.add.sprite(0, 0, 50, 50);
        this._input.keyboard.on("keydown-ArrowUp", function () {
            console.log("abc");
        });
        this._input.keyboard.on("keydown- ", function () {
            console.log("space");
        });
        this._input.mouse.on(function (event) {
            console.log("left mouse");
        });
    };
    return test;
}(Game_1["default"]));
function create() {
    //initialize
    //_game.load.image("btnStart", "assets/PlayButton.png");
    //_game.load.sprite("sprites", "assets/sprite.png");
    //_game.add.image(0, 0, 50, 50, "btnStart");
    //set Event Input
    /*_game._input.keyboard.on("keydown-ArrowUp", () => {
      console.log("abc");
    });
    _game._input.keyboard.on("keydown- ", () => {
      console.log("space");
    });
    _game._input.mouse.on((event: MouseEvent) => {
      console.log("left mouse");
    });*/
}
function update() { }
