import level from './level';
import enemiesData from './enemies-data';

function ImagePathsController() {
  this.themes = 'images/themes';
  this.objects = 'images/objects';

  /**
   * @returns {String} src
   */
  this.getCurrentTheme = (src) => {
    let levelData = level.getData();

    return (this.themes + '/' + levelData.theme);
  };

  /**
   * @returns {Array}
   */
  this.getMainImagePaths = () => ([
    `${this.objects}/player.svg`,
  ]);

  /**
   * @returns {Array}
   */
  this.getBricks = () => {
    let currentThemePath = this.getCurrentTheme();

    return [
      `${currentThemePath}/brick_0.svg`,
      `${currentThemePath}/brick_1.svg`,
      `${currentThemePath}/brick_2.svg`,
    ];
  };

  /**
   * @returns {Array}
   */
  this.getEnemies = () => {
    let levelData = level.getData();
    let enemyPaths = [];

    for (let enemyType in levelData.enemies.types) {
      let enemyData = enemiesData[enemyType];
      let enemyImagePath = (this.objects + '/' + enemyData.imageName);
      enemyPaths.push(enemyImagePath);
    }

    return enemyPaths;
  };

  /**
   * @returns {Array}
   */
  this.getCurrentLevelPaths = () => {
    let bricks = this.getBricks();
    let enemies = this.getEnemies();

    return this.getMainImagePaths().concat(bricks, enemies);
  };
}

let imagePaths = new ImagePathsController();

export default imagePaths;
