class Player {
  /**
   * @param {Number} cell
   * @param {Number} row
   */
  constructor(cell, row) {
    this.width = 30;
    this.height = 30;
    this.speed = 1;
    this.bombSize = 1;
    this.image = 'player.png',
    this.midX = 0;
    this.midY = 0;
    this.collisionWidth = 20;
    this.collisionHeight = 20;
  }
}

export default Player;