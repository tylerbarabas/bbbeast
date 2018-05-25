import DomElement from 'bbcore/dom-element';
import IMG from './img.jpg';

export default class backdropTreehouseInside extends DomElement {
    constructor(){
        super();
        this.dom = null;
    }

    init(){
        this.dom = document.createElement('IMG');
        this.dom.id = 'backdrop-treehouse-inside';
        this.dom.setAttribute('src', IMG);
        this.style('width', '100%');
        this.style('height', '100%');
        this.appendTo();
    }
}
