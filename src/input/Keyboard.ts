export default class Keyboard {
  key: string;
  constructor() {
    this.key = "";
  }
  on(key: string, callback: (event: KeyboardEvent) => void) {
    let inputKey = key.split("-");
    let lengthInputKey = inputKey.length;
    if (lengthInputKey > 1) {
      if (inputKey[0] === "keydown") {
        window.addEventListener("keydown", function (event) {
          if (event.key === inputKey[1]) {
            callback(event);
          }
        });
      } else {
        if (inputKey[0] === "keyup")
          window.addEventListener("keyup", function (event) {
            if (event.key === inputKey[1]) {
              callback(event);
            }
          });
      }
    } else {
      if (inputKey[0] === "keydown") {
        window.addEventListener("keydown", (event) => callback(event));
      } else {
        if (inputKey[0] === "keyup")
          window.addEventListener("keyup", (event) => callback(event));
      }
    }
  }
}
