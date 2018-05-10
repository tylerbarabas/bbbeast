import SpriteSheet from 'bbcore/sprite-sheet';
import JSON from './instructions.json';
import IMG0 from './ss-0.png';
import IMG1 from './ss-1.png';
import IMG2 from './ss-2.png';


export default class treadmillSolo extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [ IMG0, IMG1, IMG2 ];
        this.init();
    }

    init(){
        super.init();
        this.dom.id = 'treadmill-solo';
        this.style('height','100%');
   } 
}
