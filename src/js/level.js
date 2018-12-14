import LEVELS from './levels';

function Level() {
  let currentLevel = 0;

  /**
   * @returns {Object} LEVELS[currentLevel]
   */
  this.get = () => LEVELS[currentLevel];

  /**
   * @param {Number} lvl
   */
  this.set = (lvl) => { currentLevel = lvl };
}

let level = new Level();

export default level;
