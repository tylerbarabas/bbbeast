import SpriteSheet from 'bbcore/sprite-sheet';
import JSON from './instructions.json';
import IMG0 from './ss-0.png';


export default class walkCycle extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [ IMG0 ];
        this.init();
    }

    init(){
        super.init();
        this.dom.id = 'walk-cycle';
        this.style('height','100%');
   } 
}
