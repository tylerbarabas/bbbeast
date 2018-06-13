import DomElement from 'bbcore/dom-element';
import IMG from './img.png';

export default class guitar extends DomElement {
    constructor(){
        super();
        this.dom = null;
    }

    init(){
        this.dom = document.createElement('IMG');
        this.dom.id = 'guitar';
        this.dom.setAttribute('src', IMG);
        this.style({
            height: '400px',
            position: 'absolute',
            bottom: '-40px',
            left: '145px'
        });
        this.appendTo();
    }
}
