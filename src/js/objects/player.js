class Player {
  /**
   * @param {Number} cell
   * @param {Number} row
   */
  constructor(cell, row) {
    this.width = 30;
    this.height = 30;
    this.midX = 0;
    this.midY = 0;
    this.collisionWidth = 20;
    this.collisionHeight = 20;

    this.speed = 1;
    this.bombSize = 1;
    this.imageSrc = 'images/objects/player.png';
  }
}

export default Player;
