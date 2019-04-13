import Player from '../objects/player';

class PlayerLogic {
  constructor(game) {
    this.game = game;
    this.time = this.game.time;
    this.utils = this.game.utils;
    this.levelData = this.game.levelData;
    this.objects = this.game.objects;
  }

  add() {
    let playerMiddleCoordinates = this.utils.getMiddleCoordinates(this.levelData.playerPosition[0], this.levelData.playerPosition[1]);
    this.objects.player = new Player(playerMiddleCoordinates.midX, playerMiddleCoordinates.midY);
  }

  move() {
    let player = this.objects.player;
    let move = player.move;
    let moveValue = (player.speed * this.time.dt);

    if (move.left) {
      player.x -= moveValue;
    }

    if (move.right) {
      player.x += moveValue;
    }

    if (move.up) {
      player.y -= moveValue;
    }

    if (move.down) {
      player.y += moveValue;
    }
  }
}

export default PlayerLogic;
