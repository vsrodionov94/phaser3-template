export default class Utils {
  static click(object: any, action: () => void, maxMoveCounter = 3) {
    object.setInteractive();
    let moveCounter = 0;

    object.on('pointerdown', () => {
      object.xDown = object.x;
      object.yDown = object.y;
      object.press = true;
    });

    object.on('pointermove', () => {
      if (object.press) moveCounter++;
    });

    object.on('pointerout', () => {
      if (object.press) {
        moveCounter = 0;
        object.press = false;
      }
    });

    object.on('pointerup', () => {
      let x: number;
      let y: number;

      if (object.xDown >= object.x) x = object.xDown - object.x;
      else x = object.x - object.xDown;

      if (object.yDown >= object.y) y = object.yDown - object.y;
      else y = object.y - object.yDown;

      if (object.press && moveCounter < maxMoveCounter && x < 5 && y < 5) {
        object.press = false;
        action();
      } else if (object.press) {
        object.press = false;
      }
      moveCounter = 0;
    });
  }

  static clickButton(scene: Phaser.Scene, button: any, action: () => void) {
    button.setInteractive();
    button.on('pointerdown', () => {
      button.press = true;
      button.increase = false;
      let counter = 0;
      const interval = scene.time.addEvent({
        delay: 5,
        callback: () => {
          if (button.scale > 0.9 && !button.increase) {
            const scale: number = button.scale - 0.1;
            button.scale = Number(scale.toFixed(2));
          }
          counter++;
          if (counter >= 2) interval.remove(false);
        },
        callbackScope: scene,
        loop: true,
      });
    });

    button.on('pointerout', () => {
      if (button.press) {
        button.press = false;
        button.increase = true;
        const interval = scene.time.addEvent({
          delay: 10,
          callback: () => {
            if (button.scale < 1 && button.increase) {
              const scale: number = button.scale + 0.05;
              button.scale = Number(scale.toFixed(2));
            }
            if (button.scale >= 1) interval.remove(false);
          },
          callbackScope: scene,
          loop: true,
        });
      }
    });

    button.on('pointerup', () => {
      if (button.press) {
        button.press = false;
        button.increase = true;
        const interval = scene.time.addEvent({
          delay: 10,
          callback: () => {
            if (button.scale < 1 && button.increase) {
              const scale: number = button.scale + 0.05;
              button.scale = Number(scale.toFixed(2));
            }
            if (button.scale >= 1) interval.remove(false);
          },
          callbackScope: scene,
          loop: true,
        });
        action();
      }
    });
  }

  static setHoverEffect(
    btn: Phaser.GameObjects.Sprite | Phaser.GameObjects.TileSprite,
  ) {
    btn.on('pointerover', () => btn.setAlpha(0.8));
    btn.on('pointerout', () => btn.setAlpha(1));
  }
}
