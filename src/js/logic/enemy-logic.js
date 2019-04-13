import Enemy from '../objects/enemy';

class EnemyLogic {
  constructor(game) {
    this.game = game;
    this.time = this.game.time;
    this.utils = this.game.utils;
    this.levelData = this.game.levelData;
    this.objects = this.game.objects;
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

  moveEnemies() {
    // MOVE HERE!
  }
}

export default EnemyLogic;
