import Canvas from './canvas';
import Game from './game';
import Logic from './logic';
import Draw from './draw';

let canvasBg = new Canvas(1);
let canvas = new Canvas(2);
let game = new Game(canvas, canvasBg);
new Logic(game);
new Draw(game);
