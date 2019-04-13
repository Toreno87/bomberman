function State() {
  const STATES = {
    pause: 'pause',
    play: 'play',
  };
  let currentState = STATES.pause;

  /**
   * @returns {String} currentState
   */
  this.get = () => currentState;

  /**
   * @returns {Object} STATES
   */
  this.getStates = () => STATES;

  /**
   * @returns {boolean}
   */
  this.isPaused = () => (currentState == STATES.pause);

  /**
   * @returns {boolean}
   */
  this.isPlayed = () => (currentState == STATES.play);

  this.setToPlay = () => { currentState = STATES.play; };
  this.setToPaused = () => { currentState = STATES.pause; };
}

let state = new State();

export default state;
