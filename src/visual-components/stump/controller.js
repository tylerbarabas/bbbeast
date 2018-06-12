import DomElement from 'bbcore/dom-element';
import IMG from './img.png';

export default class stump extends DomElement {
    constructor(){
        super();
        this.dom = null;
    }

    init(){
        this.dom = document.createElement('IMG');
        this.dom.id = 'stump';
        this.dom.setAttribute('src', IMG);
        this.style({
            height: '300px',
            position: 'absolute',
            bottom: 0,
            left: '180px'
        });
        this.appendTo();
    }
}
