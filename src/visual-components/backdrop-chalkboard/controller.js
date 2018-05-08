import DomElement from 'bbcore/dom-element';
import IMG from './img.png';

export default class backdropChalkboard extends DomElement {
    constructor(){
        super();
        this.dom = null;
    }

    init(){
        this.dom = document.createElement('IMG');
        this.dom.id = 'backdrop-chalkboard';
        this.dom.setAttribute('src', IMG);
        this.style('width', '100%');
        this.appendTo();
    }
}
