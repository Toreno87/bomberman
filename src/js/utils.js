import settings from './config/settings';

let utils = {};

/**
 * @param {Number} cell
 * @param {Number} row
 * @returns {Object}
 */
utils.getMiddleCoordinates = (cell, row) => ({
  midX: (cell * settings.cellSize) + (settings.cellSize / 2),
  midY: (row * settings.cellSize) + (settings.cellSize / 2),
});

/**
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
utils.randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default utils;
