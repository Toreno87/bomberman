import PlayerLogic from './player-logic';
import EnemyLogic from './enemy-logic';

class Logic {
  /**
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.utils = this.game.utils;
    this.levelData = this.game.levelData;
    this.objects = this.game.objects;

    this.playerLogic = new PlayerLogic(this.game);
    this.enemyLogic = new EnemyLogic(this.game);
  }

  init() {
    this.playerLogic.add();
    this.enemyLogic.addEnemies();
  }

  refresh() {
    this.playerLogic.move();
    this.enemyLogic.moveEnemies();
  }
};

export default Logic;
