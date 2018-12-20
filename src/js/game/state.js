function State() {
  const STATES = {
    paused: 'paused',
    play: 'play',
  };
  let currentState = STATES.paused;

  /**
   * @returns {String} currentState
   */
  this.get = () => currentState;

  this.isPaused = () => (currentState == STATES.paused);
  this.isPlay = () => (currentState == STATES.play);

  this.setToPlay = () => (currentState = STATES.play);
  this.setToPaused = () => (currentState = STATES.paused);
}

let state = new State();

export default state;
