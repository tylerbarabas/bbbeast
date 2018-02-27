import DomElement from '../../core-components/DomElement';

export default class BlundrLogo extends DomElement{
    constructor(){
        super();
        this.dom.id = 'blundr-logo';
        this.init();
    }

    init(){
        this.style({
            margin: '20px auto',
            width: 'fit-content',
            height: 'fit-content',
            fontSize: '50px'
        });
        this.dom.innerText = 'Blundr';
        this.appendTo();
    }
}
