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
import IMG8 from './ss-8.png';
import IMG9 from './ss-9.png';
import IMG10 from './ss-10.png';
import IMG11 from './ss-11.png';
import IMG12 from './ss-12.png';
import IMG13 from './ss-13.png';
import IMG14 from './ss-14.png';


export default class mamaPutsBbbeastToBed extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [ IMG0, IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12, IMG13, IMG14 ];
        this.init();
    }

    init(){
        super.init();
        this.dom.id = 'mama-puts-bbbeast-to-bed';
        this.style('width','100%');
   } 
}
