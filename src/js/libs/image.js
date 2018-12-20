function ImageController() {
  /**
   * @param {String|Array} src
   */
  this.loadBySrc = (src) => new Promise((resolve) => {
    let imagesLoaded = 0;

    if (typeof src == 'string') {
      src = [src];
    }

    for (let i = 0; i < src.length; i++) {
      let image = new Image();
      image.src = src[i];
      image.onload = () => {
        if (imagesLoaded >= src.length - 1) {
          resolve();
        } else {
          imagesLoaded++;
        }
      };
    }
  });

  /**
   * @param {String} src
   * @returns {Object} image
   */
  this.getBySrc = (src) => {
    let image = new Image();
    image.src = src;

    return image;
  };
}

let image = new ImageController();

export default image;
