class Player {
  /**
   * @param {Number} midX
   * @param {Number} midY
   */
  constructor(midX, midY) {
    this.width = 34;
    this.height = 46;
    this.collisionWidth = 28;
    this.collisionHeight = 38;

    this.midX = midX;
    this.midY = midY;
    this.x = (midX - (this.width / 2));
    this.y = (midY - (this.height / 2));

    this.imageName = 'player.svg';

    this.speed = 1;
    this.bombSize = 1;
  }
}

export default Player;
