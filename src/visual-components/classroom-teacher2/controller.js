import DomElement from 'bbcore/dom-element';
import IMG from './img.png';

export default class classroomTeacher2 extends DomElement {
    constructor(){
        super();
        this.dom = null;
    }

    init(){
        this.dom = document.createElement('IMG');
        this.dom.id = 'classroom-teacher2';
        this.dom.setAttribute('src', IMG);
        this.style('height', '100%');
        this.appendTo();
    }
}
