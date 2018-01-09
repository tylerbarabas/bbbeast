import 'latest-createjs';
import DomElement from './DomElement';
const createjs = window.createjs;

export default class SpriteSheet extends DomElement {
    constructor(){
        super();
        this.dom = document.createElement('canvas');
        this.json = null;
    }

    init(){
        if (typeof this.json !== 'object') {
            console.log('Cannot init sprite sheet. No JSON present.');
            return;
        }

        this.spritesheet = new createjs.SpriteSheet(this.json);
        this.stage = new createjs.Stage(this.dom);

        this.dom.height = this.json.frames.height || this.json.size.height;
        this.dom.width = this.json.frames.width || this.json.size.width;

        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener('tick', this.stage);
    }
}