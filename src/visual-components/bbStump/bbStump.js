import SpriteSheet from '../../core-components/SpriteSheet';
import JSON from './json/bbStump.json';
import IMG from './img/bbstump2.png';

export default class bbStump extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [IMG];
        this.init();
    }

    init() {
        this.dom.id = 'bbstump';
        this.style('position','absolute');
        this.style('left','210px');
        this.style('top','288px');
        this.style('height','400px');
        this.style('z-index','1');

        super.init();

        this.appendTo();
    };
}
