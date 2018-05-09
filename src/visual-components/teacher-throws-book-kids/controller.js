import SpriteSheet from 'bbcore/sprite-sheet';
import JSON from './instructions.json';
import IMG0 from './ss-0.png';
import IMG1 from './ss-1.png';

export default class teacherThrowsBookKids extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [IMG0, IMG1];
        this.init();
    }

    init(){
        super.init();
        this.dom.id = 'teacher-throws-book-kids';
    }
}
