import LEVELS from '../config/levels';
import image from '../libs/image';
import imagePaths from './image-paths';

function Level() {
  let currentLevel = 0;

  /**
   * @returns {Object} LEVELS[currentLevel]
   */
  this.getData = () => LEVELS[currentLevel];

  /**
   * @returns {Number} currentLevel
   */
  this.getIndex = () => currentLevel;

  /**
   * @param {Number} lvl
   */
  this.set = (lvl) => { currentLevel = lvl };

  /**
   * @returns {String}
   */
  this.getThemesPath = () => `images/themes/${this.getData().theme || 'default'}`;

  /**
   * @returns {String}
   */
  this.getObjectsPath = () => `images/objects`;

  /**
   * @param {Number} lvl
   * @returns {Promise} image.loadBySrc
   */
  this.loadLevel = (lvl) => {
    this.set(lvl);
    let allLevelImagePaths = imagePaths.getCurrentLevelPaths();

    return image.loadBySrc(allLevelImagePaths);
  };
}

let level = new Level();

export default level;
