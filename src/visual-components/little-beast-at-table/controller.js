import SpriteSheet from 'bbcore/sprite-sheet';
import JSON from './instructions.json';
import IMG0 from './ss-0.png';


export default class littleBeastAtTable extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [ IMG0 ];
        this.init();
    }

    init(){
        super.init();
        this.dom.id = 'little-beast-at-table';
        this.style({
            position: 'absolute',
            bottom: 0,
            left: '80px'
        });
   } 
}
