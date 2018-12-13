function State() {
  const STATES = {
    paused: 'paused',
    play: 'play',
  };
  let state = STATES.paused;

  this.get = () => state;

  this.isPaused = () => (state == STATES.paused);
  this.isPlay = () => (state == STATES.play);

  this.setToPlay = () => (state = STATES.play);
  this.setToPaused = () => (state = STATES.paused);
}

export default State;
