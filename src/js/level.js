import LEVELS from './config/levels';

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
}

let level = new Level();

export default level;
