import * as Webfont from 'webfontloader';

export default class BootScene extends Phaser.Scene {
  private _fontsReady: boolean;
  private _userReady: boolean;

  constructor() {
    super('Boot');
  }

  init() {
    this.initUser();
    this.initFonts();
  }

  private initFonts() {
    const families: Array<string> = ['Roboto'];
    if (families.length === 0) {
      this._fontsReady = true;
      return;
    }

    Webfont.load({
      google: { families },
      active: () => {
        this._fontsReady = true;
      },
    });
  }

  private initUser() {
    this.authUser();
  }

  private authUser() {
    this._userReady = true;
  }

  update() {
    if (!this._fontsReady) return;
    if (!this._userReady) return;
    this.scene.start('Preload');
  }
}
