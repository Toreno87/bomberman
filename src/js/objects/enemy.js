import enemyData from '../game/enemies-data';

class Enemy {
  /**
   * @param {Number} midX
   * @param {Number} midY
   */
  constructor(type, midX, midY) {
    let typeData = enemyData[type];
    this.type = type;

    this.width = typeData.width;
    this.height = typeData.height;
    this.collisionWidth = typeData.collisionWidth;
    this.collisionHeight = typeData.collisionHeight;

    this.midX = midX;
    this.midY = midY;
    this.x = (midX - (this.width / 2));
    this.y = (midY - (this.height / 2));

    this.imageName = typeData.imageName;
  }
}

export default Enemy;
