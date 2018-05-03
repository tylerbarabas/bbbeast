import SpriteSheet from 'bbcore/SpriteSheet';
import JSON from './bbbeast-on-stump.json';
import IMG from './img/bbstump2.png';

export default class bbbeast-on-stump extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [IMG];
        this.init();
    }

    init() {
        this.dom.id = 'bbbeast-on-stump';
        this.style('position','absolute');
        this.style('left','210px');
        this.style('top','288px');
        this.style('height','400px');
        this.style('z-index','1');

        super.init();

        this.appendTo();
    };
}
