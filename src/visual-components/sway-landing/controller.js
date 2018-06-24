import SpriteSheet from 'bbcore/sprite-sheet';
import JSON from './instructions.json';
import IMG0 from './ss-0.png';
import IMG1 from './ss-1.png';
import IMG2 from './ss-2.png';
import IMG3 from './ss-3.png';
import IMG4 from './ss-4.png';
import IMG5 from './ss-5.png';
import IMG6 from './ss-6.png';
import IMG7 from './ss-7.png';


export default class swayLanding extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [ IMG0, IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7 ];
        this.init();
    }

    init(){
        super.init();
        this.dom.id = 'sway-landing';
        this.style('width','100%');
   } 
}
