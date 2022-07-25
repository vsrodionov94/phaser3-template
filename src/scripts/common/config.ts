import Boot from '../scenes/Boot';
import Main from '../scenes/Main';
import Preload from '../scenes/Preload';

export const getGameConfig = (): Phaser.Types.Core.GameConfig => ({
  type: Phaser.WEBGL,
  width: document.body.clientWidth,
  height: document.body.clientHeight,
  parent: 'root',
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
  render: { transparent: true },
  scene: [Boot, Preload, Main],
  loader: { maxParallelDownloads: 128 },
});
