class Canvas {
  /**
   * @param {Object} wrapper
   * @param {Number} zIndex
   */
  constructor(wrapper, zIndex) {
    this.width = 400;
    this.height = 400;
    this.zIndex = zIndex || 'auto';
    this.wrapper = wrapper;

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.create();
  }

  create() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.position = 'absolute';
    this.canvas.style.zIndex = this.zIndex;
    this.wrapper.append(this.canvas);
  }
}

export default Canvas;
