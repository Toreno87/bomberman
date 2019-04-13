class Events {
  constructor(game) {
    this.game = game;

    window.addEventListener('keydown', (event) => {
      let hotkeys = this.game.settings.hotkeys;

      this.playerMove(event, hotkeys, true);
    }, false);

    window.addEventListener('keyup', (event) => {
      let hotkeys = this.game.settings.hotkeys;

      this.playerMove(event, hotkeys, false);
    }, false);
  }

  playerMove(event, hotkeys, value) {
    if (this.game.state.isPlayed()) {
      let playerDirections = ['up', 'down', 'left', 'right'];
      let player = this.game.getPlayer();
      let hotkeysKey = null;

      for (let key in playerDirections) {
        let playerDirectionsKey = playerDirections[key];

        if (event.code == hotkeys[playerDirectionsKey]) {
          hotkeysKey = playerDirectionsKey;
          break;
        }
      }

      if (hotkeysKey) {
        player.move[hotkeysKey] = value;
      }
    }
  }
}

export default Events;
