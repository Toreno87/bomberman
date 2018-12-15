function ImageController() {
  this.getBySrc = (src) => {
    let image = new Image();

    image.src = src;

    return image;
  };
}

let image = new ImageController();

export default image;
