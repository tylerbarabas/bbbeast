import DomElement from '../../core-components/DomElement';

export default class Nah extends DomElement{
    constructor(){
        super();
        this.dom.id = 'nah';
        this.init();
    }

    init(){
        this.style({
            height: '150px',
            width: '150px',
            backgroundColor: 'rgba(255,255,255,0.6)',
            position: 'absolute',
            right: `${window.innerWidth / 6}px`,
            bottom: '50px',
            textAlign: 'center',
            fontSize: '40px',
            lineHeight: '150px',
            borderRadius: '10px'
        });
        this.dom.innerText = 'Nah';
        this.appendTo();
    }
}
