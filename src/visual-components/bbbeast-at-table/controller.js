import SpriteSheet from 'bbcore/sprite-sheet';
import JSON from './instructions.json';
import IMG from './ss.png';

export default class bbbeastAtTable extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [IMG];
        this.init();
    }
}
