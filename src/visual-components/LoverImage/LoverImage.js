import DomElement from '../../core-components/DomElement';
import IMG from '../../img/carlton.gif';

export default class LoverImage extends DomElement{
    constructor(){
        super();
        this.dom.id = 'lover-image';
        this.displayImage = null;
        this.init();
    }

    init(){
        this.style({
            margin: '0 auto',
            width: 'fit-content',
            height: 'fit-content',
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderRadius: '10px'
        });   
        this.displayImage = new DomElement('IMG');
        this.displayImage.dom.src = IMG;
        this.displayImage.style('height', `${window.innerHeight * 0.3}px`);
        this.displayImage.appendTo( this );
        this.appendTo();
    }
}
