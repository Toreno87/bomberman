import Game from './game';
import Logic from './logic';
import Draw from './draw';

let game = new Game();
new Logic(game);
new Draw(game);
