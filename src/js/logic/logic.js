import time from '../game/time';
import utils from '../utils';
import Player from '../objects/player';
import Enemy from '../objects/enemy';

class Logic {
  /**
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.time = time;
    this.utils = utils;

    this.levelData = this.game.levelData;
    this.objects = this.game.objects;
  }

  addPlayer() {
    let playerMiddleCoordinates = this.utils.getMiddleCoordinates(this.levelData.playerPosition[0], this.levelData.playerPosition[1]);
    this.objects.player = new Player(playerMiddleCoordinates.midX, playerMiddleCoordinates.midY);
  }

  addEnemies() {
    let enemiesPositions = this.levelData.enemies.positions.slice();
    this.objects.enemies = [];

    for (let enemyType in this.levelData.enemies.types) {
      let enemyQuantity = this.levelData.enemies.types[enemyType];

      for (let i = 0; i < enemyQuantity; i++) {
        let positionIndex = this.utils.randomIntFromInterval(0, enemiesPositions.length - 1);
        let enemyPosition = enemiesPositions[positionIndex];
        let enemyMiddleCoordinates = this.utils.getMiddleCoordinates(enemyPosition[0], enemyPosition[1]);
        let enemy = new Enemy(enemyType, enemyMiddleCoordinates.midX, enemyMiddleCoordinates.midY);

        this.objects.enemies.push(enemy);
        enemiesPositions.splice(positionIndex, 1);
      }
    }

  }

  init() {
    this.addPlayer();
    this.addEnemies();
  }

  refresh() {

  }
};

export default Logic;
