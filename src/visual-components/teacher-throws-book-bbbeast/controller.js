import SpriteSheet from 'bbcore/sprite-sheet';
import JSON from './instructions.json';
import IMG0 from './ss-0.png';
import IMG1 from './ss-1.png';
import IMG2 from './ss-2.png';
import IMG3 from './ss-3.png';
import IMG4 from './ss-4.png';

export default class teacherThrowsBookBbbeast extends SpriteSheet {
    constructor(){
        super();
        this.json = JSON;
        this.json.images = [IMG0, IMG1, IMG2, IMG3, IMG4];
        this.init();
    }

    init(){
        super.init();
        this.dom.id = 'teacher-throws-book-bbbeast';
    }
}
