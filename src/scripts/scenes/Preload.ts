export default class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  create() {
    this.scene.start('Main');
  }
}
