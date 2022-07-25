import '../css/style.css';
import * as Phaser from 'phaser';
import { getGameConfig } from './common/config';

window.onload = () => {
  setTimeout(() => {
    new Phaser.Game(getGameConfig());
  }, 100);
};
