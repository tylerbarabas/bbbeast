import SpriteSheet from 'bbcore/sprite-sheet';
import JSON from './instructions.json';
import IMG from './img/bbstump2.png';

export default class bbbeastAtTable extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [IMG];
        this.init();
    }

    init() {
        this.dom.id = 'bbbeast-at-table';
        this.style('position','absolute');
        this.style('left','210px');
        this.style('top','288px');
        this.style('height','400px');
        this.style('z-index','1');

        super.init();

        this.appendTo();
    };
}
