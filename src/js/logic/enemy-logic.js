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
    const { enemies } = this.objects;
    const speed = 1;

    enemies.forEach((enemy) => {
      let { midX, midY, width, height, path } = enemy;

      if(path.direction === null) {

        path.direction = this.getDirectionPath(path.start, path.prevDirection);
        enemy.path.end = this.setEnemyPathEnd(path.start, path.direction);

        enemy.path.direction = path.direction;
      }

      switch(path.direction) {
        case 'up':
          if (path.end.y < midY){
            enemy.midY = midY - speed;
            enemy.y = (midY - (height / 2));
          } else {
            enemy.path.start = path.end;
            enemy.path.prevDirection = path.direction;
            enemy.path.direction = null;
          }
        break;
        case 'right':
          if (path.end.x > midX){
            enemy.midX = midX + speed;
            enemy.x = (midX - (width / 2));
          } else {
            enemy.path.start = path.end;
            enemy.path.prevDirection = path.direction;
            enemy.path.direction = null;
          }
        break;
        case 'down':
          if (path.end.y >= midY){
            enemy.midY = midY + speed;
            enemy.y = (midY - (height / 2));
          } else {
            enemy.path.start = path.end;
            enemy.path.prevDirection = path.direction;
            enemy.path.direction = null;
          }
        break;
        case 'left':
          if (path.end.x <= midX){
            enemy.midX = midX - speed;
            enemy.x = (midX - (width / 2));
          } else {
            enemy.path.start = path.end;
            enemy.path.prevDirection = path.direction;
            enemy.path.direction = null;
          }
        break;
      }
    })
  }

  /**
   *
   * @param {Array} start
   * @param {String} direction
   */
  setEnemyPathEnd(start, direction) {
    const { cellSize } = this.game.settings;
    const { x, y } = start;
    const coordinates = {
      x: x,
      y: y
    }

    switch(direction) {
      case 'up':
        coordinates.y = y - cellSize;
      break;
      case 'right':
        coordinates.x = x + cellSize;
      break;
      case 'down':
        coordinates.y = y + cellSize;
      break;
      case 'left':
        coordinates.x = x - cellSize;
      break;
    }

    return coordinates;
  }

  /**
   *
   * @param {Numbers} param0
   * @param {String} prevDirection
   */
  getDirectionPath({x, y}, prevDirection) {
    const directionObject = this.getDirectionObject(x, y);
    const direction = this.getRandomDirection(directionObject, prevDirection);

    return direction;
  }

  /**
   *
   * @param {Number} x
   * @param {Number} y
   */
  getDirectionObject(x, y) {
    const { cellSize } = this.game.settings;
    const { grid } = this.levelData;
    const gridX = Math.floor(x / cellSize);
    const gridY = Math.floor(y / cellSize);
    const directions = {
      up: -1,
      right: -1,
      down: -1,
      left: -1,
    };

    for (let direction in directions) {
      switch(direction) {
        case 'up':
          for (let cell = gridY; cell >= 0; cell--) {
            if (grid[cell][gridX] === 0) {
              directions[direction]++;
            } else {
              break;
            }
          }
        break;
        case 'right':
          for (let cell = gridX; cell <= grid.length; cell++) {
            if (grid[gridY][cell] === 0) {
              directions[direction]++;
            } else {
              break;
            }
          }
        break;
        case 'down':
          for (let cell = gridY; cell <= grid.length; cell++) {
            if (grid[cell][gridX] === 0) {
              directions[direction]++;
            } else {
              break;
            }
          }
        break;
        case 'left':
          for (let cell = gridX; cell >= 0; cell--) {
            if (grid[gridY][cell] === 0) {
              directions[direction]++;
            } else {
              break;
            }
          }
        break;
      }
    }

    return directions;
  }

  /**
   *
   * @param {Object} directionObject
   * @param {String} prevDirection
   */
  getRandomDirection(directionObject, prevDirection) {
    let directions = [];

    for (let direction in directionObject) {
      if (directionObject[direction] > 0) {
        directions.push(direction);
      }
    }

    if (prevDirection && directionObject[prevDirection] > 0) {

      return prevDirection;
    }

    return directions[this.getRandomInt(0, directions.length - 1)];
  }

  /**
   *
   * @param {Number} min
   * @param {Number} max
   */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export default EnemyLogic;
